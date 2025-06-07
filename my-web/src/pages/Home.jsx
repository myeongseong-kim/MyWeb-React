import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from "styled-components";

import Card from '../components/Card';
import { Wrapper, Header, BlankLine, Text, Anchor, Accent, CardList, CardGrid } from "../components/Styles"

import profileImg from '../assets/myeongseongkim_2020-12-31.png';


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
    align-items: center;

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
                <Accent>Myeongseong Kim / 김명성 / 金明星</Accent>.
            </Text>
            <Text> 
                I am <Accent>a maker</Accent>—an 
                    interaction designer, 
                    mechanical engineer, 
                    software developer, 
                    media artist, 
                    and HCI researcher. 
                As a maker, I create computing-based novel interfaces, products, and installations spanning hardware to software. 
            </Text>
            <Text> 
                My interest lies in 
                designing <Accent>natural interactions, inspired by nature and physical phenomena</Accent>,
                to seamlessly <Accent>blend the physical and the virtual</Accent>. 
                I take creative and experimental approaches across diverse domains, including tangible media, digital fabrication, robotics, AI, and XR, 
                exploring new possibilities at the intersection of <Accent>engineering, art, and design</Accent>. 
            </Text>
            <Text> 
                After receiving 
                a B.S. in Industrial Design (with a minor in Mechanical Engineering) from KAIST and
                an M.S. in Industrial Design from KAIST (<Anchor href="https://wonderlab.kaist.ac.kr" target="_blank">WonderLab</Anchor>), 
                I am currently working as a Research Assistant at KIST, under the Alternative Military Service program. 
                {/* I am currently working as a Software Engineer under the Alternative Military Service program.  */}
                {/* I am currently working as a Software Engineer at <Anchor href="https://maxst.com/" target="_blank">MAXST</Anchor>. */}
                {/* I am currently working as a Mechatronics Engineer at <Anchor href="https://www.bearrobotics.ai/" target="_blank">Bear Robotics</Anchor>. */}
                {/* Currently, I am a Master student at <Anchor href="https://wonderlab.kaist.ac.kr" target="_blank">WonderLab</Anchor>, KAIST. */}
            </Text>
        </SelfIntro>
    );
}


const Home = () => {
    const data = require.context('../assets', true, /\.json$/ );

    let objs = [];
    objs[0] = data(`./dot/dot.json`);
    objs[1] = data(`./isle-of-reflections/isle-of-reflections.json`);
    objs[2] = data(`./fishtank-jelly/fishtank-jelly.json`);
    objs[3] = data(`./phantom/phantom.json`);
    objs[4] = data(`./under-the-cherry-blossom/under-the-cherry-blossom.json`);
    objs[5] = data(`./time-to-snow/time-to-snow.json`);
    objs.reverse();

    const cards = objs.map((obj) => (
        <CardGrid key={obj.id}>
            <Card
                thumbnail={obj.thumbnail}
                directory={obj.directory}
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
        <StyledHome>
            <title> Myeongseong Kim </title>
            <Header> Hi, there :D </Header>
            <Wrapper>
                <IntroContainer>
                    <ProfileImg src={profileImg} loading="lazy" />
                    <Spacer></Spacer>
                    <SelfIntroduction />
                </IntroContainer>
            </Wrapper>
            <Text> &nbsp; </Text>

            <TwoColumn>
                <Header> 
                    Selected Projects 
                </Header>
                <AllProjects to='/projects' onClick={() => {window.scrollTo({top:0})}} > 
                    All projects &gt;&gt; 
                </AllProjects>
            </TwoColumn>

            <CardList>
                {cards}
            </CardList>

        </StyledHome>
    );
}

export default Home;