import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styled, { css } from "styled-components";

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const StyledMain = styled.main`
    z-index: 0;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin-left: 2.0rem;
    margin-right: 2.0rem;
    margin-top: ${(props) => props.topMargin}px;

    @media screen and (min-width: 768px) {
        width: 750px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 1024px) {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 1920px) {
        width: 1500px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 2560px) {
        width: 2000px;
        margin-left: auto;
        margin-right: auto;
    }
`;


const Main = (props) => {
    return (
        <StyledMain topMargin={props.topMargin}>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects/*' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </StyledMain>
    );
}

export default Main;