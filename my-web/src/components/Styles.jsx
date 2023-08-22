import styled from "styled-components";


const Wrapper = styled.div`
    margin: 1.0rem 0rem;
    @media screen and (min-width: 768px) {
        margin: 1.0rem 10px;
    }
`;

const Header = styled.p`
    font-weight: 500;
    font-size: 2.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
    }
`;

const SubHeader = styled.p`
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.0rem;
    }
`;

const BlankLine = styled.div`
    padding: 0.25em 0em;
    margin: 0.25em 0em;
    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Text = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.25em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Anchor = styled.a`
    color: var(--black-ink);
    text-decoration-color: var(--black-ink);
    text-decoration-thickness: 0.5px;
    /* background: var(--yellow-daisy-trans); */
`;

const Accent = styled.strong`
    font-weight: 500;
    /* background-color: var(--yellow-daisy-trans); */
`;

const OneShot = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const MultiShots = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: auto;

    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Video = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border: none;

    margin: 0.25em 0em;
    font-size: 1.2rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const CardList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 768px) {
        flex-flow: row wrap;
        justify-content: left;
    }
`;

const CardGrid = styled.div`
    width: 100%/var(--num-col);
    margin: 2.0rem 0px;

    @media screen and (min-width: 768px) {
        width: calc(100%/var(--num-col) - 15px);
        margin: 2.0rem 7.5px;
    }  
    @media screen and (min-width: 1024px) {
        width: calc(100%/var(--num-col) - 20px);
        margin: 2.0rem 10px;
    }
    /* @media screen and (min-width: 1920px) {
        width: calc(100%/var(--num-col) - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 2560px) {
        width: calc(100%/var(--num-col) - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 3840px) {
        width: calc(100%/var(--num-col) - 20px);
        margin: 2.0rem 10px;
    } */
`;



export { 
    Wrapper, Header, SubHeader, BlankLine, Text, Anchor, Accent, 
    OneShot, MultiShots, Video,
    CardList, CardGrid 
};