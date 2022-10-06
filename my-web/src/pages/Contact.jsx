import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledContact = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    min-height: 100vh;
`;


const Contact = () => {
    return (
        <StyledContact>
            <h1> Contact </h1>
        </StyledContact>
    );
}

export default Contact;