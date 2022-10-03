import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

import Card from '../../components/Card';


const All = () => {
    
    return (
        <Card 
            title='Test' 
            address='/projects/test'
            imgURL={require('../../assets/test.jpg')} 
            summary='This is ...'
        ></Card>
    );
}

export default All;