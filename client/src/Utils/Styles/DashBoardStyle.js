import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashBoardContainer = styled.div`
    width: 100%;
    padding: 1em 2em;
    color: var(--primary-400);
    height: 100vh;
    position: relative;
`;

export const DashBoardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DashBoardTitle = styled.h3`

`;

export const DashBoardControls = styled.div`
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
    margin-left: 2em;
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
    height: 45vh;
    display: flex;
    gap: 1em; 
    padding: 2em 0;
    // background: red;
`;

export const DashBoardHero = styled.div`
    width: 40%;
`;

export const DashBoardAddButton = styled(Link)`
    display: flex;
    border-radius: .5em;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary-500);
    color: var(--primary-100);
    font-size: 2rem;
    padding: .5em;
    cursor: pointer;
`;

export const DashBoardUserQuizzes = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    border: .5em;
    // background: var(--primary-400);
`;

export const DashBoardContentBottom = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    gap: 2em; 
    // padding: 1em 0;
    // background: red;
`;

export const DashBoardUserResume = styled.div`
    width: 49%;
    height: 100%;
    // border: 1px solid white;
    border-radius: .5em;
    padding: 1em;
    background: var(--primary-500)
`;

export const DashBoardUserMetrics = styled.div`
    width: 49%;
    height: 100%;
    border: 1px solid white;
    border-radius: .5em;
    padding: 1em;
    background: var(--primary-100);
    color: var(--primary-900)
`;

// DashBoard Cards
export const ModalBtnsContainer = styled.div`
    position: absolute;
    top: 1em;
    right: 1em;
    display: flex;
    gap: .5em;
`;

// Resume Quiz

// User Stat



