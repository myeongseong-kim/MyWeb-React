import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
`;


const Contact = () => {
    return (
        <StyledContact>
            <h1> Contact </h1>
        </StyledContact>
    );
}

export default Contact;