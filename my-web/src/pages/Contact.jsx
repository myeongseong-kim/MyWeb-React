import React from 'react';
import styled, { css } from "styled-components";

import { Wrapper, Header, BlankLine, Text, Anchor, Accent } from "../components/Styles"


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
    height: 50vh;

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


const Contact = () => {
    return (
        <StyledContact>
            <title> Contact </title>
            <Header> Location </Header>
            <Wrapper>
                <Text>
                    I am currently studying at <Anchor href="https://wonderlab.kaist.ac.kr" target="_blank">WonderLab</Anchor>, KAIST. 
                    The physical location is as below.
                </Text>
                <BlankLine> </BlankLine>
                <MapContainer>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.4656616580955!2d127.35993611527195!3d36.37371969928934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bca6d0c010f%3A0x16ce22b81107060f!2zS0FJU1Qg7IKw7JeF65SU7J6Q7J247ZWZ6rO864-ZKE4yNSk!5e0!3m2!1sko!2sus!4v1667056305807!5m2!1sko!2sus" 
                        width="100%" height="100%" frameBorder="0" loading="lazy" >
                    </iframe>
                </MapContainer>
                <BlankLine> </BlankLine>
                <AddressText>
                    Room 225, N25 Department of Industrial Design, KAIST <br/>
                    291, Daehak-ro, Yuseong-gu, Daejeon, 34141 <br/>
                    Republic of Korea
                </AddressText>
            </Wrapper>
            <Text> &nbsp; </Text> 

            <Header> Get in Touch </Header>
            <Wrapper>
                <Text>
                    If you want to reach out, feel free to mail me!
                </Text>
                <BlankLine> </BlankLine>
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