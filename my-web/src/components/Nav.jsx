import React, { useState } from 'react';
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
    padding: 0.5em;
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
    font-size: 0.125em;
    width: 12.5%;
    ${(props) => props.stateToggle === true &&
    css`
        width: 100%;
    `}
    height: 12.5%;

    border-radius: 0.25em;
    background-color: white;

    transition: width 0.5s ease-in-out;
`;

const NavMenu = styled.div`
    visibility: hidden;
    transition: visibility 0.0s ease-in-out;
    transition-delay: 0.5s;
    ${(props) => props.stateToggle === true &&
    css`
        visibility: visible;
        transition: visibility 0.0s ease-in-out;
        transition-delay: 0.0s;
    `}
    
    width: 100vw;
    height: calc(100vh - 100%);
    overflow-x: hidden;
    
    position: absolute;
    top: 100%;
    left: 0%;

    @media screen and (min-width: 1024px) {
        width: auto;
        height: auto;
        overflow-x: auto;

        position: relative;
        top: 100%;
        left: 0%;
    }
`;


const MenuList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 62.5%;
    height: 100%;
    background: rgba(0, 0, 0, 0.625);
    backdrop-filter: blur(0.25em);

    position: absolute;
    top: 0%;
    left: 100%;
    transform: translate(0%, 0%);
    ${(props) => props.stateToggle === true &&
    css`
        transform: translate(-100%, 0%);
    `}

    transition: transform 0.5s ease-in-out;
    
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

    width: 50%;
    padding: 1em;
    margin: 0em;

    &:first-child {
        border-top: 0.5px solid gray;
    }
    border-bottom: 0.5px solid gray;

    @media screen and (min-width: 1024px) {
        width: auto;
        padding: 0.5em;
        margin-top: 0em;
        margin-bottom: 0em;
        margin-left: 0.5em;
        margin-right: 0.5em;

        &:first-child {
            border: none;
        }
        border: none;
    }

    transition: 
        color 0.5s ease-in-out,
        text-shadow 0.5s ease-in-out;

    text-decoration: none;
    &:link, :visited {
        color: white;
        ${(props) => props.to === props.chapter &&
        css`
            color: var(--yellow-daisy);
            text-shadow: 
                0em 0em 0.25em currentColor,
                0em 0em 0.125em currentColor;
        `}
    }
    &:hover, :active {
        color: var(--yellow-daisy);
    }
`;

const FakeBox = styled.div`
    display: none;
    ${(props) => props.stateToggle === true &&
    css`
        display: block;
    `}

    width: 37.5vw;
    height: 100%;
    background: transparent;
       
    position: absolute;
    top: 0%;
    right: 100%;
    transform: translate(0%, 0%);

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
    const chapter = '/' + location.pathname.split('/')[1];
    // console.log(chapter);

    return (
        <StyledNav>
            <NavLogo to='/' onClick={closeMenu}> Myeongseong Kim </NavLogo>

            <NavToggle stateToggle={toggle}
                onClick={handleToggle}
            >
                <DotBar stateToggle={toggle}> </DotBar>
                <DotBar stateToggle={toggle}> </DotBar>
                <DotBar stateToggle={toggle}> </DotBar>
            </NavToggle>

            <NavMenu stateToggle={toggle}>
                <MenuList stateToggle={toggle}>
                    <MenuItem to='/about' chapter={chapter} onClick={closeMenu}> About </MenuItem>
                    <MenuItem to='/projects' chapter={chapter} onClick={closeMenu}> Projects </MenuItem>
                    <MenuItem to='/contact' chapter={chapter} onClick={closeMenu}> Contact </MenuItem>
                    <FakeBox stateToggle={toggle} onClick={closeMenu}></FakeBox>
                </MenuList>
            </NavMenu>
        </StyledNav>
    );
}

export default Nav;