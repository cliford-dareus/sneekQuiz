import { Link } from "react-router-dom";
import styled from "styled-components";



export const SideBarContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--primary-400); 
    border-bottom-right-radius: 2em;
    border-top-right-radius: 2em;
`;

export const SideBarLogoContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 1em;
`;

export const SideBarLogo = styled(Link)`

`;

export const SideBarNavContainer = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    background: var(--primary-400); 
    display: flex;
    // align-items: center;
`;

export const SideBarNav = styled.ul`
    color: var(--primary-900);
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 5em;
    width: 100%;
`;

export const SideBarNavItem = styled.li`
    padding: .5em 1em;
    &:hover{
        background: var(--primary-500);
    }
`;

export const SideBarNavItemLink = styled(Link)`
    width: 100%;
    color: inherit;
    text-transform: uppercase;
    cursor: pointer;
`;
