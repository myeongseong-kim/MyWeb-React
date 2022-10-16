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

const Chapter = styled.p`
    font-weight: 500;
    font-size: 2.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
    }
`;

const Text = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Anchor = styled.a`
    color: var(--black-ink);
    text-decoration-color: gray;
    /* background: var(--yellow-daisy-trans); */
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