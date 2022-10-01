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
    flex-direction: row;
    align-items: center;

    margin: 20px;
`;


const Main = () => {
    return (
        <StyledMain>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </StyledMain>
    );
}

export default Main;