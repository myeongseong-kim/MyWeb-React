import React from 'react';
import styled, { css } from "styled-components";

import Card from '../../components/Card';

import Each from './Each'


const All = (props) => {
   
    return (
        <>
            <Card 
                title='Test' 
                address='/projects/test'
                imgurl={require('../../assets/test.jpg')} 
                summary='This is ...'
            ></Card>
            
            {/* <Card
                title={Test.title}
                address={Test.address}
                imgurl={require(Test.imgurl)} 
                summary={Test.summary}
            ></Card> */}
        </>
    );
}

export default All;