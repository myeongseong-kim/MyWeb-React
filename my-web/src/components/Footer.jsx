import React, { forwardRef } from 'react';
import styled, { css } from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';


const StyledFooter = styled.footer`
    font-size: 1.2rem;
    font-weight: 300;
    padding: 4em;
    background-color: var(--white-smoky);
`;

const Socials = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    padding: 2em;
`;

const Copyright = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    padding: 2em;
    color: gray;
    white-space: nowrap;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    font-size: 2.4rem;
    text-align: center;
    margin-left: 1em;
    margin-right: 1em;

    cursor: pointer;
`;

const Brands = styled(FontAwesomeIcon)`
    z-index: 0;

    ${(props) => props.type === 'bw' &&
        css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            color: gray;
            background: var(--white-smoky);
            opacity: 1;
            transition: opacity 0.5s ease-in-out;

            &:hover {
                opacity: 0;
            }
        `
    }
    ${(props) => (props.type === 'color' && props.name === 'github') &&
        css` color: #24292f; background: var(--white-smoky); `
    }
    ${(props) => (props.type === 'color' && props.name === 'youtube') &&
        css` color: #ff0000; background: var(--white-smoky); `
    }
    ${(props) => (props.type === 'color' && props.name === 'linkedin') &&
        css` color: #2867b2; background: var(--white-smoky); `
    }
    ${(props) => (props.type === 'color' && props.name === 'instagram') &&
        css` 
            background: 
                radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), 
                radial-gradient(circle farthest-corner at 0% 140%, #fec564, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 0% -25%, #5258cf, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 100% 0%, #893dc2, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent 100%), 
                linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
            color: var(--white-smoky);
        `
    }
`;


const Footer = forwardRef((props, ref) => {
    let year = new Date().getFullYear();
    
    return (
        <StyledFooter ref={ref}>
            {/* socials: github, youtube, linkedin, instagram */}
            <Socials>
                <Icon onClick={() => window.open("https://github.com/MyeongseongKim", "_blank")}>
                    <Brands name='github' type='color' icon={faGithub} />
                    <Brands name='github' type='bw' icon={faGithub} />
                </Icon>
                <Icon onClick={() => window.open("https://www.youtube.com/channel/UCNO9pBEjRyb-8NW2R75SeUQ", "_blank")}>
                    <Brands name='youtube' type='color' icon={faYoutube} />
                    <Brands name='youtube' type='bw' icon={faYoutube} />
                </Icon>
                <Icon onClick={() => window.open("https://www.linkedin.com/in/myeongseong-kim-27a30015b", "_blank")}>
                    <Brands name='linkedin' type='color' icon={faLinkedin} />
                    <Brands name='linkedin' type='bw' icon={faLinkedin} />
                </Icon>
                {/* <Icon onClick={() => window.open("https://www.instagram.com/", "_blank")}>
                    <Brands name='instagram' type='color' icon={faInstagram} mask={faSquareFull} inverse />
                    <Brands name='instagram' type='bw' icon={faInstagram} />
                </Icon> */}
            </Socials>

            {/* a copyright */}
            <Copyright>
                © {year} Myeongseong Kim
            </Copyright>
        </StyledFooter>
    );
});

export default Footer;