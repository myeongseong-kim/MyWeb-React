import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
`;


class About extends Component {
    render() {
        return (
            <StyledAbout>
                <h1> About </h1>
            </StyledAbout>
        );
    }
}

export default About;