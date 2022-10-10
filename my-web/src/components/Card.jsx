import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: start;

    text-decoration: none;
    &:link, :visited {
        color: var(--black-ink);
    }
    &:hover, :active {
        color: var(--black-ink);
    }

    @media screen and (min-width: 768px) {
        width: calc(100%/2);
    }  
    @media screen and (min-width: 1024px) {
        width: calc(100%/2);
    }
    @media screen and (min-width: 1920px) {
        width: calc(100%/3);
    }
    @media screen and (min-width: 2560px) {
        width: calc(100%/4);
    }
    @media screen and (min-width: 3840px) {
        width: calc(100%/6);
    }
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 20px 0px;

    transition: 
        box-shadow 0.25s ease-in-out;

    &:link, :visited {
        box-shadow: 0 0 0em 0em lightgray;
        /* box-shadow: 0 0 0em 0em var(--yellow-daisy); */
    }
    &:hover, :active {
        box-shadow: 0 0 1em 0.5em lightgray;
        /* box-shadow: 0 0 0.5em 0em var(--yellow-daisy); */
    }

    @media screen and (min-width: 768px) {
        width: 360px;
        margin: 20px auto;
    }  
    @media screen and (min-width: 1024px) {
        width: 480px;
        margin: 20px auto;
    }    
`

const Thumbnail = styled.img`
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
`;

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    width: auto;
    height: 12rem;
    padding: 0rem 1.0rem;
    
    background-color: var(--white-smoky);
`;

const Title = styled.p`
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0.5em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    background-color: var(--white-smoky);
`;

// const BarLine = styled.hr`
//     width: 100%;
//     height: 0.1rem;
//     border: none;
//     margin: 0rem 0rem;
//     background-color: lightgray;
// `;

const Members  = styled.p`
    font-weight: 300;
    font-size: 1.0rem;
    font-style: oblique;
    margin: 0.25em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const Me = styled.strong`
    font-weight: 500;
    background-color: var(--yellow-daisy-trans);
`;

const Summary = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.25em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
`;



const Card = (props) => {
    
    const Team = () => {
        const me = 'Myeongseong Kim';
        let others = props.team.split(me);
        // console.log(others);

        return (
            <Members> 
                {others[0]}<Me>{me}</Me>{others[1]} 
            </Members>
        );
    }

    return (
        <StyledCard to={props.address}
            onClick={() => {
                window.scrollTo({
                    top: 1,
                    behavior: 'auto'
                });
            }}
        >
            <CardBox>
                <Thumbnail src={props.imgurl} />
                <CardText>
                    <Title> {props.title} </Title>
                    <Team> </Team>
                    <Summary> {props.summary} </Summary>
                </CardText>
            </CardBox>
        </StyledCard>
    );
}

export default Card;