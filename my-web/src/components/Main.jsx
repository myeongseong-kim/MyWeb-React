import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation  } from 'react-router-dom';

import styled, { css } from "styled-components";

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

import ReactGA from 'react-ga4';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);


const StyledMain = styled.main`   
    z-index: 0;

    width: auto;
    min-height: 
        calc(
            100vh 
            - ${(props) => props.topMargin}px
            - ${(props) => props.bottomMargin}px
        );
    padding-top: ${(props) => props.topMargin}px;
    
    --num-col : 1;
    margin-left: 20px;
    margin-right: 20px;

    @media screen and (min-width: 768px) {
        --num-col : 2;
        width: 750px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 1024px) {
        --num-col : 2;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 1920px) {
        --num-col : 3;
        width: 1500px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 2560px) {
        --num-col : 4;
        width: 2000px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 3840px) {
        --num-col : 6;
        width: 3000px;
        margin-left: auto;
        margin-right: auto;
    }

    @media print {
        padding-top : 0;
    }
`;


const Main = (props) => {

    const location = useLocation();
    useEffect(() => {
        ReactGA.set({ page: location.pathname });
        ReactGA.send("pageview");
        // console.log(location.pathname);
    }, [location]);

    return (
        <StyledMain topMargin={props.topMargin} bottomMargin={props.bottomMargin}>
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