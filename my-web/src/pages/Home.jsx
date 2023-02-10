import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from "styled-components";

import Card from '../components/Card';
import { Wrapper, Chapter, BlankLine, Text, Anchor, Accent, CardList, CardGrid } from "../components/Styles"

import profileImg from '../assets/images/myeongseongkim_2020-12-31.png';


const StyledHome = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    min-height: 100vh;
    margin: 2.0rem 0rem;
    color: var(--black-ink);
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const ProfileImg = styled.img`
    aspect-ratio: 1/1;
    object-fit: cover;
    background-color: var(--white-smoky);
    
    width: 100%;

    margin: 1.0rem 0rem;

    @media screen and (min-width: 768px) {
        width: 25.6rem;
    }
`;

const SelfIntro = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;

    margin: 1.0rem 0rem;
`;

const Spacer = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        margin: 0rem 1.0rem;
    }
`;

const TwoColumn = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;


const AllProjects = styled(Link)`
    color: var(--black-ink);
    text-decoration-color: var(--black-ink);
    text-decoration-thickness: 0.5px;

    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;


const SelfIntroduction = () => {
    return (
        <SelfIntro>
            <Text> 
                My name is <Accent>Myeongseong Kim / 김명성 / 金明星</Accent>.
            </Text>
            {/* <Text>&nbsp;</Text> */}
            <Text> 
                I am <Accent>a maker</Accent>, which includes 
                    an interaction designer, 
                    mechanical engineer, 
                    software developer, 
                    media artist, 
                    and HCI researcher.
                As a maker, I used to build novel interfaces and interactive installations based on physical computing.
            </Text>
            <Text> 
                My research interest is designing and developing&nbsp;
                <Accent>nature-inspired natural interaction</Accent> 
                &nbsp;in domains of tangible media, shape-changing, robotics, digital fabrication, and XR. 
                I believe, like many aesthetic and functional nature-mimetic designs in everyday life, 
                interactions between human users and computers can also create new values by mimicking nature's way.
            </Text>
            <Text> 
                Currently, I am a Master student
                at <Anchor href="https://wonderlab.kaist.ac.kr" target="_blank">WonderLab</Anchor>, KAIST.
            </Text>
        </SelfIntro>
    );
}


const Home = () => {
    const data = require.context('../assets/data', true, /\.json$/ );
    const images = require.context('../assets/images', true);

    let objs = [];
    objs[0] = data(`./dot.json`);
    objs[1] = data(`./snow-clock.json`);
    objs[2] = data(`./fishtank-jelly.json`);
    objs[3] = data(`./phantom.json`);
    objs[4] = data(`./under-the-cherry-blossom.json`);
    objs.reverse();

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
        <StyledHome>
            <Chapter> Hi, there :D </Chapter>
            <Wrapper>
                <IntroContainer>
                    <ProfileImg src={profileImg} loading="lazy" />
                    <Spacer></Spacer>
                    <SelfIntroduction />
                </IntroContainer>
            </Wrapper>
            <Text> &nbsp; </Text>

            <TwoColumn>
                <Chapter> 
                    Selected Projects 
                </Chapter>
                <AllProjects to='/projects' onClick={() => {window.scrollTo({top:0})}} > 
                    See all projects &gt;&gt; 
                </AllProjects>
            </TwoColumn>
            {/* <Text> Here are the projects I chose. </Text> */}
            <CardList>
                {cards}
            </CardList>

        </StyledHome>
    );
}

export default Home;