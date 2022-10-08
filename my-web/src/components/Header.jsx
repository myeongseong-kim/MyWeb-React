import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";

import Nav from './Nav';
import headerImg from '../assets/images/test.jpg';


const StyledHeader = styled.header`
    position: fixed;
    z-index: 1;
    top: 0%;
    width: 100vw;
    /* height: ${(props) => props.height}px; */
    height: 100vh;
    ${(props) => props.snap === true &&
    css`
        height: ${(props) => props.minHeight}px;
    `}

    transition: height 0.5s ease-in-out;
`;

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: hidden;
`;

const HeaderImg = styled.img`
    position: absolute;
    width: 100vw;
    height: 100vh;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
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
    opacity: 1.0;

    ${(props) => props.snap === true &&
    css`
        opacity: 0;
    `}

    transition: opacity 0.5s ease-in-out;
`;

const TranslucentBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0.625;

    ${(props) => props.snap === true &&
    css`
        opacity: 1.0;
    `}

    transition: opacity 0.5s ease-in-out;
`;


const Header = (props) => {

    return (
        <StyledHeader snap={props.snap} minHeight={props.minHeight}>
            <ImgBox> 
                <HeaderImg src={headerImg} />
            </ImgBox>
            <TranslucentBox snap={props.snap}></TranslucentBox>
            <HeaderText snap={props.snap}>
                "I make, <br /> &emsp; therefore I am."
            </HeaderText>
        </StyledHeader>
    );
}

export default Header;