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
`;

export const QuizHolder = styled.div`
    width: 50%;
    height: 50%;
    background: white;
    border-radius: .5em;
    padding: 1em;
    word-wrap: break-word;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: .8s;
    transform: perspective(1000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0));
    &:hover{
        --translate-y: -2px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);
    }
`;

export const QuizFront = styled.div`
    position: absolute;
    // left: 0;
    padding: 1em;
    backface-visibility: hidden;
`;

export const QuizBack = styled.div`
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(${props => props.flip? '':'180deg'});
`;

export const QuizAnswerBtnContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const AnswerButton = styled.button`
    
`;