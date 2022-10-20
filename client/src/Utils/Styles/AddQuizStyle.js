import styled from "styled-components";

export const AddQuizContainer = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;
      
export const AddQuizFormContainer = styled.div`
    width: 60%;
    // height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%
`;

export const InputField = styled.input`
    width: 100%;
    outline: none;
    border: none;
    padding: .5em;
    margin-bottom: 1em; 
`;

export const SelectField = styled.select`
    width: 100%;
    outline: none;
    border: none;
    padding: .5em;
`;

export const InputContainer = styled.div`
    width: 100%;
`;

export const FormErrorContainer = styled.div`
    position: absolute;
    bottom: 2em;
    right: 0;
    background: red;
`;

// Review Page
export const QuizReviewContainer = styled.div`
    width: 55%
`;

export const QuizCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
`;

// Review Quiz Card
export const ReviewCardContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid white;
`;