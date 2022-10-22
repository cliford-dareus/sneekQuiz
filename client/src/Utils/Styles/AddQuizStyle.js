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
    width: 50%;
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
    border-bottom: 1px solid var(--primary-400);
    background: transparent;
    // padding: .5em;
    font-size: 1rem;
    margin-bottom: 1em; 
    color: var(--primary-100);
    margin-top: 1em;
`;

export const SelectField = styled.select`
    width: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    margin-top: 1em;
    // padding: .5em;
    background: transparent;
    appearance: none;
    color: var(--primary-100);
`;

export const InputContainer = styled.div`
    width: 100%;
`;

export const FormErrorContainer = styled.div`
    color: var(--primary-400);
    position: absolute;
    bottom: 2em;
    padding: .5em 1em;
    right: 0;
    border-radius: .5em;
    transform: translate(150%);
    background: var(--primary-500);
    @keyframes slideIn {
        0% {
            transform: translate(150%);
        }
        50% {
            transform: translate(0);
        }
        100% {
            transform: translate(150%);
        }
    }
    animation: 3s slideIn ease;
`;

// Review Page
export const QuizReviewContainer = styled.div`
    width: 50%
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
    padding: 1em;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: .5em;
`;

// Progress Quiz Page
export const QuizFormProgressContainer = styled.div`
    width: 50%;
    height: 50px;
    padding: 1em;
    border-radius: .5em;
    margin-bottom: 1em;
    background: var(--primary-500);
    position: absolute;
    top: 10em;
`;

export const QuizProgress = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProgressCircle = styled.div`
    width: 35px;
    height: 35px;
    border: 3px solid ${props => props.defaultColor? 'var(--primary-400)':'var(--primary-100)'};
    border-radius: 50px;
    color: var(--primary-100);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProgressLabel = styled.p`
  color: white;
`;

export const ProgressLine = styled.div`
  height: 2px;
  width: 40%;
  background-color: white;
  @keyframes expandProgressLine {
    0% {
      width: 0px;
    }
    100% {
      width: 100px;
    }
  }
  animation: 1s expandProgressLine ease;
`;

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;