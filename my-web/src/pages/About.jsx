import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

import { Wrapper, Header, BlankLine, Text, Note, Anchor, Accent } from "../components/Styles"


const StyledAbout = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    margin: 2.0rem 0rem;
    color: var(--black-ink);
`;

const OneColumn = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: start;

    margin: 0.5em 0em;
    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }

    &:link, :visited {
        background-color: var(--yellow-daisy-trans);
    }
    &:hover, :active {
        background-color: var(--yellow-daisy-trans);
    }
`;

const TwoColumn = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: start;

    margin: 0.5em 0em;
    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }

    &:link, :visited {
        background-color: var(--yellow-daisy-trans);
    }
    &:hover, :active {
        background-color: var(--yellow-daisy-trans);
    }
`;

const Period = styled.p`
    text-align: right;
    white-space: nowrap;

    font-weight: 300;
    font-style: oblique;
    font-size: 1.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;


const Title = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0.25em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;
const Authors = styled.p`
    font-weight: 300;
    font-style: oblique;
    font-size: 1.0rem;
    margin: 0.25em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;
const Proceeding = styled.p`
    font-weight: 300;
    font-size: 1.0rem;
    margin: 0.25em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;
const Publication = (props) => {
    const me = 'Myeongseong Kim';
    let others = props.authors.split(me);

    return (
        <div>
            <Title> {props.title} </Title>
            <Authors> {others[0]}<Accent>{me}</Accent>{others[1]} </Authors>
            <Proceeding> {props.proceeding} </Proceeding>
            <Proceeding> <Anchor href={props.doi} target="_blank" > {props.doi} </Anchor> </Proceeding>
        </div>
    );
};



const About = () => {
    return (
        <StyledAbout>
            <title> About </title>

            <Header> Experience </Header>
            <Wrapper>
                <TwoColumn>
                    <Text>
                        <Accent> Researcher at KIST </Accent> <br/>
                        XR & Spatial Computing, Robotics <br/>
                        <Note>*Alternative Military Service</Note>
                    </Text>
                    <Period> Jun. 2025 –<br/> Present </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Software Engineer at MAXST </Accent> <br/>
                        XR & Spatial Computing, Computer Graphics <br/>
                        <Note>*Alternative Military Service</Note>
                    </Text>
                    <Period> Jan. 2024 –<br/> Mar. 2025 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Mechatronics Engineer at Bear Robotics </Accent> <br/>
                        Mechatronics, Embedded Systems <br/>
                    </Text>
                    <Period> Sep. 2023 –<br/> Jan. 2024 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Research Assistant at Wonder Lab, KAIST </Accent> <br/>
                        HCI, Interaction Design, New Media <br/>
                    </Text>
                    <Period> Aug. 2020 –<br/> Sep. 2023 </Period>
                </TwoColumn>
            </Wrapper>
            <Text> &nbsp; </Text>

            <Header> Education </Header>
            <Wrapper>
                <TwoColumn>
                    <Text>
                        <Accent> M.S. in Industrial Design, KAIST </Accent> <br/>
                        Advisor: Prof. Woohun Lee
                    </Text>
                    <Period> Sep. 2020 –<br/> Aug. 2023 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> B.S. in Industrial Design, KAIST </Accent> <br/>
                        Minor: Mechanical Engineering
                    </Text>
                    <Period> Mar. 2014 –<br/> Aug. 2020 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Gwangju Science High School </Accent> <br/>
                    </Text>
                    <Period> Mar. 2012 –<br/> Feb. 2014 </Period>
                </TwoColumn>
            </Wrapper>
            <Text> &nbsp; </Text>

            <Header> Skills </Header>
            <Wrapper>
                {/* <OneColumn>
                    <Text>
                        <Accent> Design </Accent> : Design Thinking, Prototyping, UX Analysis
                    </Text>
                </OneColumn> */}
                {/* <OneColumn>
                    <Text>
                        <Accent> Engineering </Accent> : Software Programming, Electrical Circuit Design, Mechanical Design
                    </Text>
                </OneColumn> */}
                <OneColumn>
                    <Text>
                        <Accent> Software Development </Accent> : Unity (C#, HLSL), React (JavaScript, CSS, HTML), Processing (Java)
                    </Text>
                </OneColumn>
                <OneColumn>    
                    <Text>
                        <Accent> Embedded & Physical Computing </Accent> : Arduino (C/C++), Raspberry Pi (Python), Eagle CAD
                    </Text>
                </OneColumn>
                <OneColumn>
                    <Text>
                        <Accent> 2D Graphics & Media </Accent> : Figma, Photoshop, Illustrator, After Effects
                    </Text>
                </OneColumn>
                <OneColumn>
                    <Text>
                        <Accent> 3D Modeling & CAD </Accent> : Blender, Rhino/Grasshopper, Fusion 360, SolidWorks
                    </Text>
                </OneColumn>
                <OneColumn>
                    <Text>
                        <Accent> Digital & Physical Fabrication </Accent> : 3D Printing, Laser Cutting, Woodworking
                    </Text>
                </OneColumn>
            </Wrapper>
            <Text> &nbsp; </Text>

            <Header> Publications </Header>
            <Wrapper>
                <OneColumn>
                    <Publication
                        title="Time to Snow"
                        authors="Myeongseong Kim, Sunwoo Baek, Woohun Lee"
                        proceeding="ACM SIGGRAPH 2023 Art Gallery (SIGGRAPH '23), Article 14, 1-2"
                        doi="https://doi.org/10.1145/3588428.3593822"
                    > </Publication>
                </OneColumn>
                <OneColumn>
                    <Publication
                        title="Thermoformable Shell for Repeatable Thermoforming"
                        authors="Donghyeon Ko, Myeongseong Kim, Woohun Lee"
                        proceeding="Adjunct Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST '22 Adjunct), Article 61, 1-3"
                        doi="https://doi.org/10.1145/3526114.3558632"
                    > </Publication>
                </OneColumn>
                <OneColumn>
                    <Publication
                        title="Isle of Reflections"
                        authors="Chaeun Lee, Myeongseong Kim, Hyunjung Kim"
                        proceeding="ACM SIGGRAPH 2021 Art Gallery (SIGGRAPH '21), Article 7, 1-3"
                        doi="https://doi.org/10.1145/3450507.3457434"
                    > </Publication>
                </OneColumn>
                <OneColumn>
                    <Publication
                        title="Ambiguus Tiles: Origami Rhombic Pyramid Tiles for Creating Dual-View Tile Mosaics"
                        authors="Hyunjung Kim, Myeongseong Kim, Yujin Lee"
                        proceeding="Leonardo (MIT Press Journal) 54 (2), 206-207"
                        doi="https://doi.org/10.1162/leon_a_01977"
                    > </Publication>
                </OneColumn>
                <OneColumn>
                    <Publication
                        title="Rolling Pixels: Robotic Steinmetz Solids for Creating Physical Animations"
                        authors="*Yujin Lee, *Myeongseong Kim, Hyunjung Kim (* Both authors contributed equally to this work)"
                        proceeding="Proceedings of the Fourteenth International Conference on Tangible, Embedded, and Embodied Interaction (TEI '20), 557-564"
                        doi="https://doi.org/10.1145/3374920.3374987"
                    > </Publication>
                </OneColumn>
                <OneColumn>
                    <Publication
                        title="Snow Clock"
                        authors="Myeongseong Kim, Donghyuk Yun, Woohun Lee"
                        proceeding="Proceedings of HCIK 2020, 1323-1324"
                    > </Publication>
                </OneColumn>                
            </Wrapper>
            <Text> &nbsp; </Text>

            <Header> Awards </Header>
            <Wrapper>
                <OneColumn>
                    <Text>
                        <Accent> "Red Dot: Best of the Best" - Red Dot Award 2023 Design Concept : Time to Snow </Accent> <br/>
                        {/* -&nbsp; */}
                        <Anchor href="https://www.red-dot.org/project/time-to-snow-65892" target="blank"> 
                            https://www.red-dot.org/project/time-to-snow-65892 
                        </Anchor>
                    </Text>
                </OneColumn>
                <OneColumn>
                    <Text>
                        <Accent> "Red Dot: Best of the Best" - Red Dot Award 2021 Design Concept : Isle of Reflections </Accent> <br/>
                        {/* -&nbsp; */}
                        <Anchor href="https://www.red-dot.org/project/isle-of-reflections-54298" target="blank"> 
                            https://www.red-dot.org/project/isle-of-reflections-54298 
                        </Anchor>
                    </Text>
                </OneColumn>
                <OneColumn>    
                    <Text>
                        <Accent> "Special Prize" - International Busan Design Award 2020 : Moleculight  </Accent>
                    </Text>               
                </OneColumn>
            </Wrapper>
            <Text> &nbsp; </Text>

            <Header> Exhibitions </Header>
            <Wrapper>
                {/* <TwoColumn>
                    <Text>
                        <Accent> Time to Snow </Accent> <br/> 
                        Blueprint: Feasible Blue 
                    </Text>
                    <Period> 17 – 22. Dec. 2023</Period> 
                </TwoColumn> */}
                <TwoColumn>
                    <Text>
                        <Accent> Time to Snow </Accent> <br/> 
                        SIGGRAPH 2023 ArtGallery 
                    </Text>
                    <Period> 6 – 10. Aug. 2023</Period> 
                </TwoColumn>
                {/* <TwoColumn>
                    <Text>
                        <Accent> Snow Clock </Accent> <br/>
                        Inventive Minds and Ideas, Seoul DDP
                    </Text>
                    <Period> 17. Dec. – 26. Dec. 2022</Period>
                </TwoColumn> */}
                <TwoColumn>
                    <Text>
                        <Accent> WOW-Flow </Accent> <br/>
                        ZER01NE DAY 2022 
                    </Text>
                    <Period> 30. Sep. – 3. Oct. 2022</Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Phantom: interact with invisible beings </Accent> <br/> 
                        NATURE WEEK Exploration HMG Nature Observation 2.0 
                    </Text> 
                    <Period> 22. Nov. – 2. Dec. 2021</Period> 
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> TransWall </Accent> <br/> 
                        Nexperium, Shinsegae Art & Science 
                    </Text>
                    <Period> 27. Aug. 2021 – </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Isle of Reflections </Accent> <br/> 
                        SIGGRAPH 2021 ArtGallery 
                    </Text>
                    <Period> 9 – 13. Aug. 2021</Period> 
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Snow Clock </Accent> <br/> 
                        HCI Korea 2020 Creative Award 
                    </Text>
                    <Period> 19 – 21. Aug. 2020</Period>           
                </TwoColumn>
            </Wrapper>
            <Text> &nbsp; </Text>
            
            <Header> Additionals </Header>
            <Wrapper>
                <TwoColumn>
                    <Text>
                        <Accent> Teaching Assistant : Media Interaction Design </Accent> <br/>
                        Instructor: Prof. Woohun Lee
                    </Text>
                    <Period> Fall 2022,<br/> Fall 2021,<br/> Fall 2020 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Teaching Assistant : Graduation Design Studio II </Accent> <br/>
                        Instructor: Prof. Changhee Lee
                    </Text>
                    <Period> Fall 2021 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Assistant at ID Fablab, KAIST </Accent> <br/>
                    </Text>
                    <Period> Sep. 2021 –<br/> Feb. 2022 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Teaching Assistant : Introduction to Hands-on Prototyping </Accent> <br/>
                        Instructor: Prof. Minjun Park and Prof. Jeamin Koo
                    </Text>
                    <Period> Fall 2020 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Assistant at Idea Factory, KAIST </Accent> <br/>
                    </Text>
                    <Period> Jul. 2019 –<br/> Dec. 2021 </Period>
                </TwoColumn>
                <TwoColumn>
                    <Text>
                        <Accent> Assistant at ID Fablab, KAIST </Accent> <br/>
                    </Text>
                    <Period> Sep. 2017 –<br/> Aug. 2018 </Period>
                </TwoColumn>
            </Wrapper>
            <Text> &nbsp; </Text>

        </StyledAbout>
    );
}

export default About;