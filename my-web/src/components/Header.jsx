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
        console.log(height);
    }

    let onSnapping = false;
    const snapTo = (y) => {
        if (!onSnapping) {
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            console.log("Snap to : " + y);
        }
        if (Math.round(window.scrollY) === y) {
            onSnapping = false;
            // console.log("Snap end");
        }
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

        var timer = null;
        window.addEventListener('scroll', () => {
            if(timer !== null) {
                clearTimeout(timer);        
            }
            timer = setTimeout(handleScroll, 125);
        }, false);
    })    


    return (
        <StyledHeader ref={headerRef} onScroll={handleScroll}>
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