import styled from 'styled-components';



export const QuizModecontainer = styled.div`
    width: calc(100vw - 100px);
    height: 100vh;
    padding: 1em;
`;

export const QuizStartContainer = styled.div`
    width: 100%;
    height 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primary-400);
`;

export const QuizHolderContainer = styled.div`
    width: 50%;
    height: 40%;
    transform: perspective(600px);
    transform-style: preserve-3d;
`;

export const QuizHolder = styled.div`
    background: white;
    color: black;
    width: 100%;
    height: 100%;
    border-radius: .5em;
    word-wrap: break-word;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    overflow: visible;
    transition: .8s;
    transform: rotateY(var(--rotate-y)) translateY(var(--translate-y, 0));
    &:hover{
        --translate-y: -2px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);
    }
`;

export const QuizFront = styled.div`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    padding: 1em;
    left: 0;
`;

export const QuizBack = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const QuizAnswerBtnContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const AnswerButton = styled.button`
    padding: .5em 0;
    border-radius: .5em;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);
    }
`;