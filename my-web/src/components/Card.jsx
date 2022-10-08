import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: start;

    margin-top: 4.0rem;
    margin-bottom: 4.0rem;

    @media screen and (min-width: 1024px) {
        
    }

    transition: 
        box-shadow 0.25s ease-in-out;

    text-decoration: none;
    &:link, :visited {
        color: var(--black-ink);
        box-shadow: 0 0 0.5em 0em lightgray;
    }
    &:hover, :active {
        color: var(--black-ink);
        box-shadow: 0 0 1em 0.5em lightgray;
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    height: calc(width * 0.5);
    object-fit: cover;
`;

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    /* padding: 1rem; */
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;

    background-color: var(--white-smoky);
`;

const Title = styled.p`
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0.5em 0em;
`;

const Member  = styled.p`
    font-weight: 300;
    font-style: oblique;
    font-size: 1.0rem;
    margin: 0.25em 0em;

    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
`;


const Card = (props) => {
    
    const Team = () => {
        const me = 'Myeongseong Kim';
        let others = props.team.split(me);
        // console.log(others);

        return (
            <Member> 
                {others[0]}<b>{me}</b>{others[1]} 
            </Member>
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
            <CardText>
                <Title> {props.title} </Title>
                <Team> </Team>
                <Summary> {props.summary} </Summary>
            </CardText>
        </StyledCard>
    );
}

export default Card;