import { Link } from 'react-router-dom'
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-size: 1.6rem;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: var(--basic-bg);
`;

const NavLogo = styled(Link)`
    font-size: 1em;
    font-weight: 700;
    padding: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;

    text-decoration: none;
    &:link, :visited, :hover, :active {
        color: black;
    }
`;

const NavToggle = styled.button`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    font-size: 1em;
    padding: 0.5em;
    
    cursor: pointer;
    border: none;
    background-color: transparent;
`;

const NavMenu = styled.div`
    
`;

const MenuItem = styled(Link)`
    font-size: 1em;
    font-weight: 500;
    padding: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;

    text-decoration: none;
    &:link, :visited, :hover, :active {
        color: black;
    }
`;


function Nav() {
    return (
        <StyledNav>
            <NavLogo to='/'> myeongseong.kim </NavLogo>

            <NavToggle type="button" aria-controls="NavMenu" aria-expanded="false">
                <FontAwesomeIcon icon={faBars} />
            </NavToggle>

            <NavMenu>
                <MenuItem to='/about'> About </MenuItem>
                <MenuItem to='/projects'> Projects </MenuItem>
                <MenuItem to='/contact'> Contact </MenuItem>
            </NavMenu>
        </StyledNav>
    );
}

export default Nav;