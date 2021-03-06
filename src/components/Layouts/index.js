import React from 'react'
import styled from '@emotion/styled';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

const AppLayout = props => {
    return (
        <>
            <Header />
                <Wrapper>
                    <Content>
                        {props.children}
                    </Content>
                </Wrapper>
            <Footer />
        </>
    )
}

const Wrapper = styled(Layout)`

`;

export default AppLayout;
