import React from 'react';
import styled, { css } from "styled-components";

// import testImg from '../assets/test.jpg';


const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const HeroShot = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const Title = styled.p`
    display: flex;
    justify-content: left;

    font-weight: 500;
    font-size: 1.2rem;
    margin: 0.5em 0em;
`;

const Summary = styled.p`
    font-size: 1.1rem;
    margin: 0.5em 0em;
`;


function Card(props) {
   
    return (
        <StyledCard>
            <HeroShot src={props.imgURL} />
            <Title> {props.title} </Title>
            <Summary> {props.summary} </Summary>
        </StyledCard>
    );
}

export default Card;