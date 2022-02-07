import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled, { css } from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
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

    transition: color 0.5s ease-in-out;

    &:link, :visited, :hover, :active  {
        color: white;
    }
`;

const NavToggle = styled.button`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    font-size: 1.25em;
    padding: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    
    cursor: pointer;
    border: none;
    background: transparent;
    color: white;

    ${(props) => props.stateToggle === true &&
    css`
        color: white;
    `}

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    z-index: -1;

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


class Nav extends Component {
    state = { clicked: false }
    handleToggle = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    closeMenu = () => {
        this.setState({ clicked: false });
    }

    render() {
        return (
            <StyledNav>
                <NavLogo to='/' onClick={this.closeMenu}> Myeongseong Kim </NavLogo>

                <NavToggle stateToggle={this.state.clicked}
                    // type="button" aria-controls="NavMenu" aria-expanded="false"
                    onClick={this.handleToggle}
                >
                    <FontAwesomeIcon icon={faBars} />
                </NavToggle>

                <NavMenu stateToggle={this.state.clicked}>
                    <MenuItem to='/about' onClick={this.closeMenu}> About </MenuItem>
                    <MenuItem to='/projects' onClick={this.closeMenu}> Projects </MenuItem>
                    <MenuItem to='/contact' onClick={this.closeMenu}> Contact </MenuItem>
                </NavMenu>
            </StyledNav>
        );
    }
}

export default Nav;