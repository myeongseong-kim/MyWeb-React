import React from 'react';
import styled, { css } from "styled-components";

import Card from '../../components/Card';

import { Wrapper, Chapter, Text, Anchor, Accent, CardList, CardGrid } from "../../components/Styles"


const StyledAll = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    objs.reverse();
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