import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from "styled-components";


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    position: sticky;
    top: 0%;
    z-index: 1;

    font-size: 1.6rem;
    padding: 0.5em 0em;
    background-color: black;
`;

const NavLogo = styled(Link)`
    font-size: 1.25em;
    font-weight: 500;
    padding: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;

    text-decoration: none;
    &:link, :visited, :hover, :active  {
        color: white;
    }
`;

const NavToggle = styled.button`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: end;

    font-size: 1.25em;
    padding: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;

    width: 2em;
    height: 2em;
    
    cursor: pointer;
    border: none;
    background: transparent;
    color: white;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const DotBar = styled.div`
    width: 12.5%;
    height: 12.5%;
    background-color: white;

    transition: width 0.5s ease-in-out;

    ${(props) => props.stateToggle === true &&
    css`
        width: 100%;
    `}
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 62.5vw;
    height: calc(100vh - 100%);
    background: rgba(0, 0, 0, 0.625);
    backdrop-filter: blur(0.25em);
    
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(0%, 0%);

    transition: transform 0.5s ease-in-out;

    ${(props) => props.stateToggle === true &&
    css`
        position: absolute;
        top: 100%;
        left: 100%;
        transform: translate(-100%, 0%);
    `}

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

        width: auto;
        height: auto;
        background: transparent;
        backdrop-filter: none;

        position: relative;
        top: 100%;
        left: 0%;
        transform: translate(0%, 0%);

        transition: transform 0s ease-in-out;
    }
`;

const MenuItem = styled(Link)`
    display: flex;
    justify-content: center;

    font-size: 1em;
    font-weight: 300;

    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;

    transition: color 0.5s ease-in-out;

    text-decoration: none;
    &:link, :visited {
        color: white;
    }
    &:hover, :active {
        color: var(--yellow-daisy);
    }

    @media screen and (min-width: 1024px) {
        width: auto;
        padding: 0.5em;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }
`;

const FakeBox = styled.div`
    display: none;

    width: 37.5vw;
    height: 100%;
    background: transparent;
       
    position: absolute;
    top: 0%;
    right: 100%;
    transform: translate(0%, 0%);

    ${(props) => props.stateToggle === true &&
    css`
        display: block;
    `}
`;


function Nav() {  
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const closeMenu = () => {
        setToggle(false);
    }

    const location = useLocation();
    const chapter = location.pathname.split("/")[1];
    console.log(chapter);

    return (
        <StyledNav>
            <NavLogo to='/' onClick={closeMenu}> Myeongseong Kim </NavLogo>

            <NavToggle stateToggle={toggle}
                // type="button" aria-controls="NavMenu" aria-expanded="false"
                onClick={handleToggle}
            >
                <DotBar stateToggle={toggle}> </DotBar>
                <DotBar stateToggle={toggle}> </DotBar>
                <DotBar stateToggle={toggle}> </DotBar>
            </NavToggle>

            <NavMenu stateToggle={toggle}>
                <MenuItem to='/about' onClick={closeMenu}> About </MenuItem>
                <MenuItem to='/projects' onClick={closeMenu}> Projects </MenuItem>
                <MenuItem to='/contact' onClick={closeMenu}> Contact </MenuItem>
                <FakeBox stateToggle={toggle} onClick={closeMenu}></FakeBox>
            </NavMenu>
        </StyledNav>
    );
}

export default Nav;