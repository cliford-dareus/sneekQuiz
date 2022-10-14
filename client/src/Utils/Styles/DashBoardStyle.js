import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashBoardContainer = styled.div`
    padding: 1em;
    color: white;
    height: 100vh;
`;

export const DashBoardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DashBoardTitle = styled.h4`

`;

export const DashBoardControls = styled.div`
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DashBoardThemeControl = styled.div`
    display: flex;
    gap: 1em;
    font-size: 1.3rem
`;

export const DashBoardProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DashBoardUsername = styled.span`
    font-size: .9rem;
    text-transform: capitalize;
`;

export const DashBoardUserPic = styled.div`
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-left: .5em;
    background: var(--primary-900);
    border: 1px solid white;
`;


export const DashBoardContentContainer = styled.section`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DashBoardContentTop = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    gap: 1em; 
    padding: 2em 0;
    // background: red;
`;

export const DashBoardHero = styled.div`
width: 40%;
`;

export const DashBoardAddButton = styled(Link)`
    // width: 20%;
    display: flex;
    border-radius: .5em;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    font-size: 2rem;
    padding: .5em;
    cursor: pointer;
`;

export const DashBoardUserQuizzes = styled.div`
position: relative;
    // border: 1px solid white;
    width: 50%;
    display: flex;
`;

export const DashBoardContentBottom = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    gap: 1em; 
    // padding: 1em 0;
    // background: red;
`;

export const DashBoardUserResume = styled.div`
    width: 49%;
    height: 100%;
    border: 1px solid white;
`;

export const DashBoardUserMetrics = styled.div`
    width: 49%;
    height: 100%;
    border: 1px solid white;
`;

// DashBoard Cards
export const DashBoardCardContainer = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border-radius: .5em;
    border: 1px solid black;
    // box-shadow: ;
    color: black;
    overflow: hidden;
`;



