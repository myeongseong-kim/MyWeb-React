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

    &:link, :visited {
        box-shadow: 0 0 0em 0em lightgray;
        /* box-shadow: 0 0 0em 0em var(--yellow-daisy); */
    }
    &:hover, :active {
        box-shadow: 0 0 1em 0.5em lightgray;
        /* box-shadow: 0 0 0.5em 0em var(--yellow-daisy); */
    }

    transition: 
        box-shadow 0.25s ease-in-out;
`;

const Thumbnail = styled.img`
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
`;

const CardTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    width: auto;
    height: 12rem;
    padding: 0rem 1.0rem;
    
    background-color: var(--white-smoky);
`;

const CardTitle = styled.p`
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0.5em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const CardDate = styled.span`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.5em 0em;
    color: gray;
`;

const CardMembers  = styled.p`
    font-weight: 300;
    font-size: 1.0rem;
    font-style: oblique;
    margin: 0.25em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const CardMe = styled.strong`
    font-weight: 500;
    /* background-color: var(--yellow-daisy-trans); */
`;

const CardSummary = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.25em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;



const Card = (props) => {
    
    const Team = () => {
        const me = 'Myeongseong Kim';
        let others = props.team.split(me);
        // console.log(others);

        return (
            <CardMembers> 
                {others[0]}<CardMe>{me}</CardMe>{others[1]} 
            </CardMembers>
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
            <Thumbnail src={props.imgurl} />
            <CardTextBox>
                <CardTitle> {props.title} <CardDate>({props.date})</CardDate> </CardTitle>
                <Team> </Team>
                <CardSummary> {props.summary} </CardSummary>
            </CardTextBox>
        </StyledCard>
    );
}

export default Card;