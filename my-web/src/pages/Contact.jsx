import React from 'react';
import styled, { css } from "styled-components";

import Map from '../components/Map';


const StyledContact = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 100%;
    min-height: 100vh;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 400px;
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
            <h1> Contact </h1>
            <MapContainer>
                <Map pos={POS_ID_KAIST} zoom={18} />
            </MapContainer>
        </StyledContact>
    );
}

export default Contact;