import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledEach = styled.div`
    width: 100%;
    
`;


const Heroshot = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;


const Each = () => {
    const images = require.context('../../assets/images', true);

    const params = useParams();
    // console.log(params.key);
    
    let obj = require(`../../assets/data/${params.id}.json`);
    // console.log(data);

    let title = obj.title;
    let heroshot = images(`./${obj.heroshot}`);
    let summary = obj.summary;
    let fullcontent = obj.fullcontent;

    
    return (
        <StyledEach>
            <h1> {title} </h1>
            <Heroshot src={heroshot}></Heroshot>
            <h2> {summary} </h2>
            <h3> {fullcontent} </h3>
        </StyledEach>
    );
}

export default Each;