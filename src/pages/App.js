import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/styled';
import Chart from 'chart.js';
import { Table } from 'antd';

import { getRandomColor } from '../utils';
import * as appActions from '../store/app/actions';
import Layout from '../components/Layouts';

const App = props => {
    const { app: { columns, dataSource, pagination, visit, condition } } = props;

    const [expanded, setExpanded] = React.useState([]);
    const genderChart = React.useRef(null);
    const raceChart = React.useRef(null);
    const ethnicityChart = React.useRef(null);

    const handleTableChange = (pagination, filters, sorter, extra) => {
        switch (extra.action) {
            case 'paginate':
                props.changePagination(pagination);
                break;
            
            case 'sort':
                const { columnKey, order } = sorter;
                props.changeSorters(columnKey, order);
                break;

            default:
                break;
        }
    }

    React.useEffect(() => {
        const genders = {},
            genderColors = [];

        const races = {},
            raceChartColors = [];
        
        const ethnicities = {},
            ethnicitiyColors = [];

        dataSource.map((data) => {
            if (genders[data.gender_source_value]) {
                genders[data.gender_source_value] += 1;
            } else {
                genders[data.gender_source_value] = 1;
                genderColors.push(getRandomColor());
            }
            if (races[data.race_source_value]) {
                races[data.race_source_value] += 1;
            } else {
                races[data.race_source_value] = 1;
                raceChartColors.push(getRandomColor());
            }
            if (ethnicities[data.ethnicity_source_value]) {
                ethnicities[data.ethnicity_source_value] += 1;
            } else {
                ethnicities[data.ethnicity_source_value] = 1;
                ethnicitiyColors.push(getRandomColor());
            }
            return null;
        });

        new Chart(genderChart.current, {
            type: 'pie',
            data: {
                labels: Object.keys(genders),
                datasets: [{
                    backgroundColor: genderColors,
                    data: Object.values(genders),
                }],
            },
        });

        new Chart(raceChart.current, {
            type: 'pie',
            data: {
                labels: Object.keys(races),
                datasets: [{
                    backgroundColor: raceChartColors,
                    data: Object.values(races),
                }],
            },
        });

        new Chart(ethnicityChart.current, {
            type: 'pie',
            data: {
                labels: Object.keys(ethnicities),
                datasets: [{
                    backgroundColor: ethnicitiyColors,
                    data: Object.values(ethnicities),
                }],
            },
        });
    }, [dataSource]);

    return (
        <Layout>
            <ChartWrapper>
                <canvas ref={genderChart}/>
                <canvas ref={raceChart}/>
                <canvas ref={ethnicityChart}/>
            </ChartWrapper>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={pagination}
                onChange={handleTableChange}
                expandable={{
                    expandRowByClick: true,
                    defaultExpandedRowKeys: expanded,
                    // expandedRowKeys: expanded,
                    onExpand: (_, record) => {
                        if (expanded.includes(record.person_id)) {
                            setExpanded([]);
                        } else {
                            setExpanded([record.person_id]);
                        }
                    },
                    rowExpandable: record => true,
                    expandedRowRender: record => {
                        if (expanded.includes(record.person_id)) {
                            const visits = visit.filter(v => Number(v.person_id) === record.person_id);
                            const conditions = condition.filter(c => Number(c.person_id) === record.person_id);
                            return (
                                <ContentWrapper>
                                    <p>전체 방문 수: {visits.length}</p>
                                    <p>진단 정보</p>
                                    {conditions.length > 0 && (
                                        <ul>
                                            {conditions.map((condition, key) => 
                                                <li key={key}>
                                                    {condition.condition_occurrence_id}
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </ContentWrapper>
                            );
                        }
                    },
                }}
            />
        </Layout>
    );
}

const ChartWrapper = styled.div`
    canvas {
        margin: 10px 0 40px;
    }
`;

const ContentWrapper = styled.div`
    padding: 20px 60px 10px;
`;

const mapStateToProps = state => ({
    app: state.app,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePagination: appActions.changePagination,
            changeSorters: appActions.changeSorters,
        },
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
