import React from 'react';
import styled, { css } from "styled-components";

import Card from '../../components/Card';


const StyledAll = styled.div`
    width: 100%;
    
`;


const All = (props) => {
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
        <Card key={obj.id}
            title={obj.title}
            address={obj.address}
            imgurl={images(`./${obj.heroshot}`)}
            summary={obj.summary}
        ></Card>
    ));


    return (
        <StyledAll>
            {cards}
        </StyledAll>
    );
}

export default All;