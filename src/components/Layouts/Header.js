import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled';
import { Layout } from 'antd';

export const Header = props => {
    return (
        <Wrapper>
            
        </Wrapper>
    );
}

const Wrapper = styled(Layout.Header)`

`;

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
