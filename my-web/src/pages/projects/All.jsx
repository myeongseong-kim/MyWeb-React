import React from 'react';
import styled, { css } from "styled-components";

import Card from '../../components/Card';


const StyledAll = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Chapter = styled.p`
    font-weight: 500;
    font-size: 2.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
    }
`;

const CardList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 768px) {
        flex-flow: row wrap;
        justify-content: left;
    }
`;

const CardGrid = styled.div`
    width: 100%;
    margin: 2.0rem 0px;

    @media screen and (min-width: 768px) {
        width: calc(100%/2 - 15px);
        margin: 2.0rem 7.5px;
    }  
    @media screen and (min-width: 1024px) {
        width: calc(100%/2 - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 1920px) {
        width: calc(100%/3 - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 2560px) {
        width: calc(100%/4 - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 3840px) {
        width: calc(100%/6 - 20px);
        margin: 2.0rem 10px;
    }
`;


const All = () => {
    const data = require.context('../../assets/data', true, /\.json$/ );
    const images = require.context('../../assets/images', true);

    let objs = [];
    data.keys().map((item, index) => {
        objs[index] = data(item);
    });
    objs.sort((a, b) => {
        return a.id - b.id;
    });
    // console.log(objs);

    const cards = objs.map((obj) => (
        <CardGrid key={obj.id}>
            <Card
                imgurl={images(`./${obj.heroshot}`)}
                address={obj.address}
                title={obj.title}
                date={obj.date}
                team={obj.team}
                summary={obj.summary}
            ></Card>
        </CardGrid>
    ));


    return (
        <StyledAll>
            <Chapter> All Projects </Chapter>
            <CardList>
                {cards}
            </CardList>
        </StyledAll>
    );
}

export default All;