import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const RegisterPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1em 2em;
`;

export const RegisterPageContenContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    // background: white;
    // height: 50%;
    width: 40%;
`;

export const Form = styled.form`
    margin-bottom: 1em;
`;

// Button for all the Forms
export const FormButton = styled.button`
    margin-top: 1em;
    padding: .5em 1em;
    cursor:pointer;
    border-radius: .5em;
`;

export const LoginCTA = styled(Link)`
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-400);
    cursor: pointer;
`; 

// Form Styled
export const FormRowContainer = styled.div`
    margin-bottom: 1em;
    // background: white;
`;

export const FormLabel = styled.label`
    display: block;
    color: var(--primary-100);
`;

export const FormInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--primary-400);
    background: transparent;
    // padding: .5em;
    color: var(--primary-100);
    font-size: 1.1rem;
`;