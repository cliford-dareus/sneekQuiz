import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const RegisterPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RegisterPageFormContainer = styled.div`
    // background: white;
    width: 50%;
    height: 60%;
`;

export const LoginCTA = styled(Link)`
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-100);
    cursor: pointer;
`; 

// Form Styled
export const FormRowContainer = styled.div`
    margin-bottom: .5em;
`;

export const FormLabel = styled.label`
    display: block;
    color: white;
`;

export const FormInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    background: transparent;
    padding: .5em;
`;