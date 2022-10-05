import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from "styled-components";


const Each = () => {
    const params = useParams();
    console.log(params.key);

    return (
        <h1 
            title = 'Test'
            address = '/projects/test'
            imgurl = '../../assets/test.jpg'
            summary = 'This is a test...'
        > Test </h1>
        
    );
}

export default Each;