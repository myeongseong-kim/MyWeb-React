import React from 'react';
import styled, { css } from "styled-components";

import Card from '../../components/Card';


const All = (props) => {
   
    return (
        <>
            <Card 
                title='Test' 
                address='/projects/test'
                imgurl={require('../../assets/images/test.jpg')}
                // imgurl='test.jpg' 
                summary='This is ...'
            ></Card>
            
        </>
    );
}

export default All;