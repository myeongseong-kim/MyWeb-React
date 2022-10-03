import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

import Card from '../components/Card';


const StyledProjects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
`;


class Projects extends Component {
    render() {
        return (
            <StyledProjects>
                {/* <h1> Projects </h1> */}
                <Card 
                    title='Test' 
                    imgURL={require('../assets/test.jpg')} 
                    summary='This is ...'
                ></Card>
            </StyledProjects>
        );
    }
}

export default Projects;