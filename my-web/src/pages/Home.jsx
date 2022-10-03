import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
`;


const Home = () => {
    return (
        <StyledHome>
            <h1> Home </h1>
        </StyledHome>
    );
}

export default Home;