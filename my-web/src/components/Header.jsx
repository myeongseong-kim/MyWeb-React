import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from "styled-components";

import headerImg from '../assets/test.jpg';


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
    const headerRef = useRef(null);
    
    let height;
    const handleResize = () => {
        height = headerRef.current.clientHeight;
        // console.log(height);
    }

    let onSnapping = false;

    const snapTo = (y) => {
        onSnapping = true;
        console.log("Snap to : " + y);
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    
    const threshold = 0.25;
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
        var delta = window.scrollY - lastScrollY;
        if (window.scrollY <= height && window.scrollY >= 0) {
            if (delta > 0) {
                if (window.scrollY > threshold * height) {
                    snapTo(height);
                }
                else  snapTo(0);
            }
            else if (delta < 0) {
                if (window.scrollY < (1 - threshold) * height) {
                    snapTo(0);
                }
                else  snapTo(height);
            }
        }
        lastScrollY = window.scrollY; 
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', () => {
            handleResize();
        });

        var timer1 = null;
        window.addEventListener('wheel', () => {
            if(timer1 !== null) {
                clearTimeout(timer1);        
            }
            timer1 = setTimeout(handleScroll, 250);
        }, false);

        var timer2 = null
        window.addEventListener('touchmove', () => {
            if(timer2 !== null) {
                clearTimeout(timer2);        
            }
            timer2 = setTimeout(handleScroll, 250);
        }, false);
    })    


    return (
        // <StyledHeader ref={headerRef} onScroll={handleScroll}>
        <StyledHeader ref={headerRef}>
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