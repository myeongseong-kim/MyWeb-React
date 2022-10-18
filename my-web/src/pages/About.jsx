import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

import { Chapter, Text, Anchor } from "./Styles";


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
            <Chapter> About Myself </Chapter>
            <Text>
                My name is Myeongseong Kim / 김명성 / 金明星
            </Text>
            <Text> &nbsp; </Text>
            
        </StyledAbout>
    );
}

export default About;