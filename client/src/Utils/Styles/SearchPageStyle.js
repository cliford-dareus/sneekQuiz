import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SearchPageContainer = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    padding: 1em 2em;
    z-index: 1;
`;

export const SearchPageTitle = styled.h3`
    color: var(--primary-400);
    // font-weight: bold;
`;

export const SearchPageFormContainer = styled.div`
    width: 60%;
    border-radius: .5em;
    overflow: hidden;
    margin-bottom: auto;
`;

export const SearchPageContentContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    padding: 8em 0 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h5{
        margin-bottom: 1em;
    }
`;

export const SearchPageCardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    padding: 2em;
    background: linear-gradient(var(--primary-400), var(--primary-500));
    border-radius: .5em;
    display: flex;
    gap: 2em;
    justify-content: space-between;
`;

// Search Card Style
export const SearchCardContainer = styled.div`
    width: 33%;
    height: 100%;
    // border: 1px solid var(--primary-100);
    border-radius: .5em;
    padding: 1em;
    background: var(--primary-100);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SearchCardTitle = styled.h3`
    color: var(--primary-500);
    font-weight: bold;
    text-align: center;
`;

export const SearchResultContainer = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
`;

export const DefaultCategory = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    gap: .3em;
`;

export const DefaultCategoryItem = styled.div`
    width: 100%;
    padding: .3em;
    background: var(--primary-300);
    border-radius: .5em;
    color: var(--primary-100);
    cursor: pointer;
    &:hover{
        background: var(--primary-400)
    }
`;
