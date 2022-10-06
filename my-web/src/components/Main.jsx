import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styled, { css } from "styled-components";

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 2.0rem;
    margin-top: ${(props) => props.topMargin}px;
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