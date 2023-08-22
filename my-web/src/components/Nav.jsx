import React, { useEffect, useState, forwardRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from "styled-components";

import { ReactComponent as Logo} from '../assets/logo.svg';
import { ReactComponent as LogoThin} from '../assets/logo_thin.svg';
import { ReactComponent as LogoBold} from '../assets/logo_bold.svg';


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    z-index: 1;

    font-size: 1.6rem;
    padding: 0.5em 0.5em;

    background-color: rgba(0, 0, 0, 0);
`;

// const NavLogo = styled(Link)`
//     z-index: 2;

//     font-family: 'Zen Kaku Gothic New';
//     font-size: 2.4rem;
//     font-weight: 300;
    
//     padding: 1rem;
//     margin-left: 0.5rem;
//     margin-right: 0.5rem;

//     transition: 
//         color 0.5s ease-in-out,
//         text-shadow 0.5s ease-in-out;

//     text-decoration: none;
//     &:link, :visited {
//         color: white;
//         ${(props) => props.to === props.chapter &&
//         css`
//             color: var(--yellow-daisy);
//             text-shadow: 
//                 /* 0em 0em 0.25em currentColor, */
//                 0em 0em 0.125em currentColor;
//         `}
//     }
//     &:hover, :active {
//         color: var(--yellow-daisy);
//     }

//     @media screen and (min-width: 1024px) {
//         padding: 0.5em;
//         margin-left: 0.5em;
//         margin-right: 0.5em;
//     }
// `;

const NavLogo = styled.div`
    z-index: 2;

    height: 4em;
    margin: 0em 0.5em;

    transition: 
        color 0.5s ease-in-out,
        text-shadow 0.5s ease-in-out;

    text-decoration: none;
    &:link, :visited {
        
    }
    &:hover, :active {
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        margin: 0em 0.5em;
    }
`;

const NavToggle = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    z-index: 2;

    font-size: 2.0rem;
    padding: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

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
    height: 6.25%;
    ${(props) => props.stateToggle === true &&
    css`
        width: 100%;
    `}

    border-radius: 0.125em;
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
    height: 100vh;
    overflow-x: hidden;

    position: absolute;
    top: 0%;
    left: 0%;

    @media screen and (min-width: 1024px) {
        visibility: visible;
        
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    /* width: 62.5%; */
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
        flex-direction: row;
        justify-content: center;
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
    margin: 0em 0em;

    /* &:first-child {
        border-top: 0.5px solid var(--white-smoky);
    }
    border-bottom: 0.5px solid var(--white-smoky); */

    @media screen and (min-width: 1024px) {
        width: auto;
        padding: 0.5em;
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
                /* 0em 0em 0.25em currentColor, */
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


const Nav = forwardRef((props, ref) => {
    
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const closeMenu = () => {
        setToggle(false);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const chapter = '/' + location.pathname.split('/')[1];

    return (
        <StyledNav ref={ref}>
            {/* <NavLogo to='/' chapter={chapter} 
                onClick={(event) => {
                    closeMenu();
                    props.toggleSnap(false);
                }}
            > 明星 </NavLogo> */}

            <NavLogo>
                <Logo height='4em'
                    onClick={(event) => {
                        navigate('/')
                        closeMenu();
                        props.toggleSnap(false);
                    }}
                />
            </NavLogo>

            <NavToggle stateToggle={toggle}
                onClick={handleToggle}
            >
                <DotBar stateToggle={toggle}> </DotBar>
                <DotBar stateToggle={toggle}> </DotBar>
                <DotBar stateToggle={toggle}> </DotBar>
            </NavToggle>

            <NavMenu stateToggle={toggle}>
                <MenuList stateToggle={toggle}>
                    <MenuItem to='/about' chapter={chapter} 
                        onClick={(event) => {
                            closeMenu();
                            props.toggleSnap(true);
                        }}
                    > ABOUT </MenuItem>
                    <MenuItem to='/projects' chapter={chapter} 
                        onClick={(event) => {
                            closeMenu();
                            props.toggleSnap(true);
                        }}
                    > PROJECTS </MenuItem>
                    <MenuItem to='/contact' chapter={chapter} 
                        onClick={(event) => {
                            closeMenu();
                            props.toggleSnap(true);
                        }}
                    > CONTACT </MenuItem>
                    {/* <FakeBox stateToggle={toggle} onPointerDown={closeMenu}></FakeBox> */}
                </MenuList>
            </NavMenu>
        </StyledNav>
    );
});

export default Nav;