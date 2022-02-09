import React, { Component } from 'react';
import styled, { css } from "styled-components";

import headerImg from '../assets/test.jpg'


const StyledHeader = styled.header`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeaderText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    white-space: nowrap;
    font-weight: 700;
    font-size: 8vw;
    text-align: left;

    padding: 0.5em;

    color: white;
`;

const TranslucentBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0.5;
`;


function Header() {
    const handleScroll = () => {
        console.log('scroll');
    }

    return (
        <StyledHeader onScroll={handleScroll}>
            {/* header image */}
            <HeaderImg src={headerImg} />
            {/* translucent & black box */}
            <TranslucentBox></TranslucentBox>
            {/* <text on header */}
            <HeaderText>"I make, <br /> &emsp; therefore I am."</HeaderText>
        </StyledHeader>
    );
}

export default Header;