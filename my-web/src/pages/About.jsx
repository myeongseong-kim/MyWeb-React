import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledAbout = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    margin: 2.0rem 0rem;
    color: var(--black-ink);
`;


const About = () => {
    return (
        <StyledAbout>
            <h1> About </h1>
        </StyledAbout>
    );
}

export default About;