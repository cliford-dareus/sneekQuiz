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
    padding: 1em;
    border-radius: .5em;
    width: 100%;
    height: 60%;
    background: linear-gradient(var(--primary-400), var(--primary-500));
`;

export const LandingPageTop = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LandingPageShowcaseContent = styled.div`
    width: 70%;
    padding: 1em 0;
    color: var(--primary-500);
    margin-top: 2em;
    h1{
        font-weight: bolder;
        line-Height: 1;
        font-size: clamp(2rem, 6vw, 5rem);
    };
    p{
        color: var(--primary-100);
        font-weight: bolder;
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-Height: 1;
    };
    div{
        margin-top: 1em;
        display: flex;
        gap: 1em;
    }
`;

export const ShowcaseBtn = styled.div`
    padding: .5em 1em;
    outline: none;
    border: none;
    border-radius: .5em;
    color: var(--primary-100);
    background: var(--primary-500);
`;

export const LandingPageTitle = styled.h3`
    color: var(--primary-500);
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
    border-radius: .5em;
    border: 1px solid var(--primary-400);
`;

export const CategoryCardsTitle = styled.h5`
    position: absolute;
    bottom: .1em;
    left: 50%;
    transform: translateX(-50%);
`;