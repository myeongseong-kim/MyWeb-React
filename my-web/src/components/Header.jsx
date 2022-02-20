import React from 'react';
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
    let onSnapping = false;
    const snapTo = (y) => {
        if (!onSnapping) {
            onSnapping = true;
            console.log("Snap to : " + y);
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
        if (Math.round(window.scrollY) === y) {
            onSnapping = false;
            console.log("Snap end");
        }
    }

    let lastScrollY = window.scrollY;
    const handleScroll = () => {       
        const threshold = 0;
        var delta = window.scrollY - lastScrollY;
        if (window.scrollY <= window.innerHeight && window.scrollY >= 0) {
            if (delta > +threshold) {
                // console.log("Snap Down");
                snapTo(window.innerHeight);
            }
            else if (delta < -threshold) {
                // console.log("Snap Up");
                snapTo(0);
            }
        }
        lastScrollY = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);

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