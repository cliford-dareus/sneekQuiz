import styled from "styled-components";



export const LandingPageContainer = styled.div``;

export const LandingPageShowcase = styled.div`
    position: relative;
    width: 100%;
    height: 65%;
    background: black;
    padding: 1em;
    display: flex;
    justify-content: space-between;
`;

export const LandingPageTitle = styled.h3`
    color: var(--primary-400);
`;

export const ShowcaseButtonContainer = styled.div`

`;

export const LandingPageCategoryContainer = styled.div`
    padding: 0 1em;
    color: var(--primary-400);
`;

export const LandingPageCategoryTitle = styled.h4``;

export const LandingPageCategorySlider = styled.div`
    // overflow: hidden;
    width: calc(100vw - 20vw);
`;


export const CategoryCardsContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border: 1px solid var(--primary-400);
`;

export const CategoryCardsTitle = styled.h5`
    position: absolute;
    bottom: .1em;
    left: 50%;
    transform: translateX(-50%);
`;