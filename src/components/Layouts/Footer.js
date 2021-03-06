import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled';
import { Layout } from 'antd';

export const Footer = props => {
    return (
        <Wrapper>
            
        </Wrapper>
    );
}

const Wrapper = styled(Layout.Footer)`

`;

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
