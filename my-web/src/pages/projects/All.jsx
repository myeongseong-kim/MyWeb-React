import React from 'react';
import styled, { css } from "styled-components";

import Card from '../../components/Card';

import { Wrapper, Header, BlankLine, Text, Anchor, Accent, CardList, CardGrid } from "../../components/Styles"


const StyledAll = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const All = () => {
    const data = require.context('../../assets', true, /\.json$/ );

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
                imgurl={obj.heroshot}
                address={obj.address}
                title={obj.title}
                date={obj.date}
                team={obj.team}
                summary={obj.summary}
                award={obj.award}
                publication={obj.publication}
                preview={obj.preview}
            ></Card>
        </CardGrid>
    ));


    return (
        <StyledAll>
            <title> Projects </title>
            <Header> All Projects </Header>
            <CardList>
                {cards}
            </CardList>
        </StyledAll>
    );
}

export default All;