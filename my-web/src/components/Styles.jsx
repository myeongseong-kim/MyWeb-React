import styled from "styled-components";


const Wrapper = styled.div`
    margin: 1.0rem 0rem;
    @media screen and (min-width: 768px) {
        margin: 1.0rem 10px;
    }
`;

const Chapter = styled.p`
    font-weight: 500;
    font-size: 2.0rem;
    margin: 0.5em 0em;

    @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
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

const Shot = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    margin: 0.25em 0em;
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
    width: 100%;
    margin: 2.0rem 0px;

    @media screen and (min-width: 768px) {
        width: calc(100%/2 - 15px);
        margin: 2.0rem 7.5px;
    }  
    @media screen and (min-width: 1024px) {
        width: calc(100%/2 - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 1920px) {
        width: calc(100%/3 - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 2560px) {
        width: calc(100%/4 - 20px);
        margin: 2.0rem 10px;
    }
    @media screen and (min-width: 3840px) {
        width: calc(100%/6 - 20px);
        margin: 2.0rem 10px;
    }
`;



export { 
    Wrapper, Chapter, BlankLine, Text, Anchor, Accent, 
    Shot, Video,
    CardList, CardGrid 
};