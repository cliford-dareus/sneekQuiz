import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SearchPageContainer = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    padding: 1em;
    z-index: 1;
`;

export const SearchPageTitle = styled.h3`
    color: var(--primary-400);
`;

export const SearchPageFormContainer = styled.div`
    width: 70%;
    height: 25px;
    border-radius: .5em;
    overflow: hidden;
    margin-bottom: auto;
`;

export const SearchPageContentContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    padding: 6.5em 0 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5{
        margin-bottom: 1em;
    }
`;

export const SearchPageCardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    padding: 4em 1em 0;
    background: var(--primary-400);
    display: flex;
    gap: 1em;
    justify-content: space-between;
    :before{
        content: '';
        position: absolute;
        width: 60%;
        height: 80px;
        aspect-ratio: 1;
        border-radius: 52%;
        background: var(--primary-400);
        top: -2.3em;
        left: 0px;
        z-index: -2;
    }
    :after{
        content: '';
        position: absolute;
        width: 40%;
        height: 60px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--primary-500);
        top: -2em;
        right: 0;
        z-index: 2;
    }
`;

// Search Card Style
export const SearchCardContainer = styled.div`
    width: 33%;
    height: 300px;
    border: 1px solid var(--primary-100);
    border-radius: .5em;
    padding: 1em;
    background: var(--primary-100);
`;

export const SearchCardTitle = styled.h5`
    text-align: center;
`;

export const SearchResultContainer = styled(Link)`
    
`;