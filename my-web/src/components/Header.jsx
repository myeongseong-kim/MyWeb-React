import React, { useEffect, useState, useRef, forwardRef } from 'react';
import styled, { css } from "styled-components";

import Nav from './Nav';
import headerImg from '../assets/test.jpg';


const StyledHeader = styled.header`
    position: sticky;
    top: 0%;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    ${(props) => props.snap === true &&
    css`
        height: ${(props) => props.thickness}px;
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
    const navRef = useRef();
    let navHeight;
    const [thickness, setThickness] = useState(0);
    
    useEffect (() => {
        navHeight = navRef.current.clientHeight;
        setThickness(navHeight);
        // console.log(thickness);
    });

    return (
        <StyledHeader snap={props.snap} thickness={thickness}>
            <ImgBox> 
                <HeaderImg src={headerImg} />
            </ImgBox>
            <TranslucentBox snap={props.snap}></TranslucentBox>
            <HeaderText snap={props.snap}>
                "I make, <br /> &emsp; therefore I am."
            </HeaderText>
            <Nav ref={navRef} />
        </StyledHeader>
    );
}

export default Header;