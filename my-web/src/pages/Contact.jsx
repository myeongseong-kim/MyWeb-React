import React from 'react';
import styled, { css } from "styled-components";

import Map from '../components/Map';

import { Wrapper, Chapter, BlankLine, Text, Anchor, Accent } from "../components/Styles"


const StyledContact = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    /* min-height: 75vh; */
    
    margin: 2.0rem 0rem;
    color: var(--black-ink);
`;

const MapContainer = styled.div`
    width: 100%;
    height: 37.5vh;

    font-size: 1.2rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const AddressText = styled.div`
    text-align: right;

    font-weight: 300;
    font-size: 1.0rem;
    margin: 1.0em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;

// Dept.Industrial Design, KAIST
// Plus code : 99F6+FR Daejeon
// lat : 36.373688, lng : 127.362063
const POS_ID_KAIST = {
    lat: 36.373688,
    lng: 127.362063
};


const Contact = () => {
    return (
        <StyledContact>
            <Chapter> Location </Chapter>
            <Wrapper>
                <Text>
                    I am currently studying at <Anchor href="https://wonderlab.kaist.ac.kr" target="_blank">WonderLab</Anchor>, KAIST. 
                    The physical location is as below.
                </Text>
                <BlankLine> </BlankLine>
                <MapContainer>
                    <Map pos={POS_ID_KAIST} zoom={18} />
                </MapContainer>
                <BlankLine> </BlankLine>
                <AddressText>
                    Room 225, N25 Department of Industrial Design, KAIST <br/>
                    291, Daehak-ro, Yuseong-gu, Daejeon, 34141 <br/>
                    Republic of Korea
                </AddressText>
            </Wrapper>
            <Text> &nbsp; </Text> 

            <Chapter> Get in Touch </Chapter>
            <Wrapper>
                <Text>
                    If you have any questions or want to know details of my projects, feel free to mail me!
                </Text>
                <Text> 
                    e-mail : contact@myeongseong.kim | pluto6944@kaist.ac.kr 
                    {/* <br/> phone : +82 10-4083-6944 */}
                </Text>
            </Wrapper>
            <Text> &nbsp; </Text>

        </StyledContact>
    );
}

export default Contact;