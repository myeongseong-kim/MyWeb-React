import React from 'react';
import styled, { css } from "styled-components";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const StyledMap = styled.div`
    width: 100%;
    height: 100%;
`;

const Map = (props) => {

    return (
        <StyledMap>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    center={props.pos}
                    zoom={props.zoom}
                >
                    <Marker position={props.pos} />
                </GoogleMap>
            </LoadScript>
        </StyledMap>
    )
}

export default Map;