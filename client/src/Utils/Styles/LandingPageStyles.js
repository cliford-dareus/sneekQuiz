import styled from "styled-components";



export const LandingPageContainer = styled.div`
    width: calc(100vw - 15vw);
    height: 100%;
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LandingPageShowcase = styled.div`
    position: relative;
    width: 100%;
    height: 60%;
    background: black;
    display: flex;
    justify-content: space-between;
`;

export const LandingPageTitle = styled.h3`
    color: var(--primary-400);
`;

export const ShowcaseButtonContainer = styled.div`

`;

export const LandingPageCategoryContainer = styled.div`
    width: 100%;
    color: var(--primary-400);
    // height: 300px;
`;

export const LandingPageCategoryTitle = styled.h5`
    font-weight: bold;
    color: var(--primary-500);
`;

export const LandingPageCategorySlider = styled.div`
    // overflow: hidden;
    width: 100%;
    padding: 2em 0;
`;


export const CategoryCardsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid var(--primary-400);
`;

export const CategoryCardsTitle = styled.h5`
    position: absolute;
    bottom: .1em;
    left: 50%;
    transform: translateX(-50%);
`;