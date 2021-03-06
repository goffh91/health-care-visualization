import _ from 'lodash';
import data from '../../utils/data';
import * as appTypes from './types';
import produce from '../../utils/produce';
import { getAgeFromBirthDay } from '../../utils';

export const initialState = {
    columns: [
        {
            title: "환자 id",
            key: "person_id",
            dataIndex: "person_id",
            sorter: true,
        },
        {
            title: "성별",
            key: "gender_source_value",
            dataIndex: "gender_source_value",
            sorter: true,
        },
        {
            title: "생년월일",
            key: "birth_datetime",
            dataIndex: "birth_datetime",
            render: birthDay => String(birthDay).substring(0, 10),
            sorter: true,
        },
        {
            title: "나이",
            key: "age",
            dataIndex: "birth_datetime",
            render: birthDay => getAgeFromBirthDay(birthDay),
            sorter: true,
        },
        {
            title: "인종",
            key: "race_source_value",
            dataIndex: "race_source_value",
            sorter: true,
        },
        {
            title: "민족",
            key: "ethnicity_source_value",
            dataIndex: "ethnicity_source_value",
            sorter: true,
        },
        {
            title: "사망여부",
            key: "death_date",
            dataIndex: "death_date",
            render: death_date => death_date ? 'dead' : '',
            sorter: true,
        },
    ],
    dataSource: data.person.map(person =>
        ({
            ...person,
            person_id: Number(person.person_id),
            death_date: data.death
                ?.find(d => d.person_id === person.person_id)
                ?.death_date || null,
        })
    ),
    pagination: {
        current: 1,
        pageSize: 10,
        total: data.person.length,
    },
    visit: data.visit,
    condition: data.condition,
    sorters: [],
    loading: {},
    error: {},
}

const appReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {

            case appTypes.CHANGE_PAGINATION:
                draft.pagination = action.pagination;
                break;

            case appTypes.CHANGE_SORTER:
                const sorters = state.sorters
                    .filter(sorter => sorter.columnKey !== action.columnKey);
                if (action.order) {
                    sorters.push({
                        columnKey: action.columnKey,
                        order: action.order,
                    });
                }
                draft.sorters = sorters;

                let dataSource = initialState.dataSource;
                for (let sorter of sorters) {
                    switch (sorter.columnKey) {
                        case 'age':
                            dataSource = _.sortBy(dataSource, 'birth_datetime');
                            if (sorter.order === 'ascend') dataSource.reverse();
                            break;

                        default:
                            dataSource = _.sortBy(dataSource, sorter.columnKey);
                            if (sorter.order === 'descend') dataSource.reverse();
                            break;
                    }
                }
                
                draft.dataSource = dataSource;
                break;

            case appTypes.VIEW_DETAIL:
                const { personId } = action;
                draft.detailData = {
                    visit: data.visit.filter(v => v.person_id === personId),
                    condition: data.condition.filter(c => c.person_id === personId),
                };
                break;

            default:
                break;
        }
    })
}

export default appReducer;
