import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

import { Chapter, Text, Anchor } from "./Styles"


const StyledHome = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    min-height: 100vh;
    margin: 2.0rem 0rem;
    color: var(--black-ink);
`;

    font-weight: 500;
    /* background-color: var(--yellow-daisy-trans); */
`;


const Home = () => {
    return (
        <StyledHome>
            <Chapter> Home </Chapter>
            <Text>
                Home
            </Text>
            <Text> &nbsp; </Text>
        </StyledHome>
    );
}

export default Home;