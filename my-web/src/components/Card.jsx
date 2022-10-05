import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledCard = styled(Link)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Thumbnail = styled.img`
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


const Card = (props) => {
   
    return (
        <StyledCard to={props.address}>
            <Thumbnail src={props.imgurl} />
            <Title> {props.title} </Title>
            <Summary> {props.summary} </Summary>
        </StyledCard>
    );
}

export default Card;