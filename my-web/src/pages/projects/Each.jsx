import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from "styled-components";

import { Wrapper, Header, SubHeader, BlankLine, Text, Anchor, Accent, OneShot, MultiShots, Video } from "../../components/Styles"


const StyledEach = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.p`
    font-weight: 500;
    font-size: 2.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
    }
`;

const Date = styled.span`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.5em 0em;
    color: gray;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Members  = styled.p`
    font-weight: 300;
    font-size: 1.0rem;
    font-style: oblique;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;

const Shot = styled.img`
    max-width: 100%;
    width: calc((100% - ${props => props.num} * 0.5em) * ${props => props.coef});
    height: auto;

    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Each = () => {
    const images = require.context('../../assets/images', true);

    const params = useParams();
    // console.log(params);
    
    let obj = require(`../../assets/data/${params.id}.json`);
    // console.log(data);

    let title = obj.title;
    let date = obj.date;
    let team = obj.team;
    let fullcontent = obj.fullcontent;

    const contents = fullcontent.map((item, index) => {
        var uid = title + ' ' + index;
        // console.log(uid);
        var pair = Object.entries(item)[0];
        // console.log(pair[0]);

        var content;
        switch (pair[0]) {
            case 'chapter' :
                content = <SubHeader key={uid} > {pair[1]} </SubHeader>;
                return content;
            case 'paragraph' :
                content = <Text key={uid} > {pair[1]} </Text>;
                return content;
            case 'blank' :
                content = <BlankLine key={uid}> </BlankLine>;
                return content;
            case 'link' :
                content = 
                    <Text key={uid}> 
                        <Anchor href={pair[1]} target="_blank"> {pair[1]} </Anchor> 
                    </Text>
                ;
                return content;
            case 'img' :
                content = 
                    <OneShot 
                        key={uid} 
                        src={images(`./${pair[1]}`)} 
                        loading="lazy"
                    />
                ;
                return content;
            case 'imgs' :
                var srcs = pair[1];
                // console.log(srcs.length);
                
                var imgRatios = [];

                const SingleLineImages = () => {
                    const [total, setTotal] = useState(0);
                    var sum = 0;

                    const imgs = srcs.map((adr, order) => {
                        const handleImageLoad = (e) => {
                            var ratio = e.target.naturalWidth / e.target.naturalHeight;
                            // console.log(ratio);
                            imgRatios.push(ratio);
                            sum += ratio;
                            
                            if (imgRatios.length === srcs.length) {
                                console.log(imgRatios);
                                // console.log(sum);
                                setTotal(sum);
                            }
                        }
    
                        var image = 
                            <Shot 
                                key={uid + '-' + order} 
                                src={images(`./${adr}`)} 
                                loading="lazy"
                                onLoad={handleImageLoad}
                                coef={imgRatios[order]/total} 
                                num={imgRatios.length-1} 
                            />
                        ;
                        return image;
                    });

                    return imgs;
                }

                content = 
                    <MultiShots key={uid}>
                        <SingleLineImages />
                    </MultiShots>
                ;
                return content;
            case 'video' :
                var embedCode = pair[1] + '?fs=1&rel=0';
                content = 
                    <Video 
                        key={uid}
                        src={embedCode}
                        allow="fullscreen"
                        loading="lazy"
                    ></Video>
                ;
                return content;
            default : 
                console.log(`{${pair[0]} : ${pair[1]}} is not predefined.`);
                content = <p key={uid} > error </p>
                return content;
        }          
    });

    const Team = () => {
        const me = 'Myeongseong Kim';
        let others = team.split(me);
        // console.log(others);

        return (
            <Members> 
                {others[0]}<Accent>{me}</Accent>{others[1]} 
            </Members>
        );
    }

    
    return (
        <StyledEach>
            <Title> {title} <Date>({date})</Date> </Title>
            <Team></Team>
            <Wrapper>
                {contents}
            </Wrapper>
        </StyledEach>
    );
}

export default Each;