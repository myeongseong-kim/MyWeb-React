import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from "styled-components";

import headerImg from '../assets/images/temporary_header.jpg';
import { ReactComponent as Phrase } from '../assets/images/phrase.svg';


const StyledHeader = styled.header`
    z-index: 1;
    
    position: fixed;
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

// const HeaderText = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
    
//     height: 100%;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);

//     overflow: hidden;
//     white-space: nowrap;
//     font-weight: 700;
//     font-size: 8vw;
//     text-align: left;

//     color: white;
//     opacity: 1.0;

//     ${(props) => props.snap === true &&
//     css`
//         opacity: 0;
//     `}

//     transition: opacity 0.5s ease-in-out;
// `;

const HeaderPhrase = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    overflow: hidden;
    white-space: nowrap;
    font-size: 8vw;
    text-align: left;

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
    width: 100%;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;

    background-color: black;
    opacity: 0.625;

    ${(props) => props.snap === true &&
    css`
        opacity: 1.0;
    `}

    transition: opacity 0.5s ease-in-out;
`;


const Header = (props) => {

    const location = useLocation();
    const chapter = '/' + location.pathname.split('/')[1];
    // console.log(chapter);

    let snap = props.snap || chapter!=='/';

    useEffect(() => {
        if (chapter === '/')
            props.setLock(false);
        else 
            props.setLock(true);
    });

    return (
        <StyledHeader snap={snap} minHeight={props.minHeight}>
            <ImgBox> 
                <HeaderImg src={headerImg} />
            </ImgBox>
            <TranslucentBox snap={snap}></TranslucentBox>
            {/* <HeaderText snap={snap}>
                "I make, <br /> &emsp; therefore I am."
            </HeaderText> */}
            <HeaderPhrase snap={snap}>
                <Phrase width="62.5vmin" height="62.5vmin" />
            </HeaderPhrase>
        </StyledHeader>
    );
}

export default Header;