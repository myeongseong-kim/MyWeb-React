import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from "styled-components";

import { Wrapper, Chapter, Text, Anchor, Accent } from "../../components/Styles"


const StyledEach = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.p`
    font-weight: 500;
    font-size: 2.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
    }
`;

const Date = styled.span`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.5em 0em;
    color: gray;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Members  = styled.p`
    font-weight: 300;
    font-size: 1.0rem;
    font-style: oblique;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;

const Heroshot = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    margin: 0.5rem 0rem;
`;

const Shot = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    margin: 0.5rem 0rem;
`;

const YouTube = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border: none;

    margin: 0.5rem 0rem;
`;


const Each = () => {
    const images = require.context('../../assets/images', true);

    const params = useParams();
    // console.log(params);
    
    let obj = require(`../../assets/data/${params.id}.json`);
    // console.log(data);

    let title = obj.title;
    let date = obj.date;
    let team = obj.team;
    let heroshot = images(`./${obj.heroshot}`);
    let summary = obj.summary;
    let fullcontent = obj.fullcontent;

    const contents = fullcontent.map((item, index) => {
        var pair = Object.entries(item)[0];
        // console.log(pair[0]);

        var content;
        switch (pair[0]) {
            case 'text' :
                content = <Text key={index} > {pair[1]} </Text>;
                return content;
            case 'img' :
                content = 
                    <Shot 
                        key={index} 
                        src={images(`./${pair[1]}`)} 
                    />;
                return content;
            case 'video' :
                var embedCode = pair[1] + '?fs=1&rel=0';
                content = 
                    <YouTube 
                        key={index}
                        src={embedCode}
                        allow="fullscreen"
                    ></YouTube>
                return content;
            default : 
                console.log(`{${pair[0]} : ${pair[1]}} is not predefined.`);
                content = <p key={index} > error </p>
                return content;
        }          
    });

    const Team = () => {
        const me = 'Myeongseong Kim';
        let others = team.split(me);
        // console.log(others);

        return (
            <Members> 
                {others[0]}<Accent>{me}</Accent>{others[1]} 
            </Members>
        );
    }

    
    return (
        <StyledEach>
            <Title> {title} <Date>({date})</Date> </Title>
            <Team></Team>
            <Wrapper>
                {contents}
            </Wrapper>
        </StyledEach>
    );
}

export default Each;