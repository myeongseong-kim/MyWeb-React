import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { css } from "styled-components";

import All from './projects/All';
import Each from './projects/Each';


const StyledProjects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
`;


const Projects = () => {
    
    return (
        <StyledProjects>
            {/* <h1> Projects </h1> */}
            <Routes>
                <Route exact path='/' element={<All />} />
                {/* <Route path='/test' element={<Test />} /> */}
                <Route path='/:id' element={<Each />} />
            </Routes>
        </StyledProjects>
    );
}

export default Projects;