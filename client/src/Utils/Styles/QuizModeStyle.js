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
    color: white;
`;

export const QuizHolderContainer = styled.div`
    width: 50%;
    height: 50%;
    transform: perspective(1000px)
`;

export const QuizHolder = styled.div`
    color: black;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: .5em;
    word-wrap: break-word;
    overflow: hidden;
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: .8s;
    transform: rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0));
    &:hover{
        --translate-y: -2px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);
    }
`;

export const QuizFront = styled.div`
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
    position: absolute;
    left: 0;
    padding: 1em;
    transform: rotateY(0deg);
`;

export const QuizBack = styled.div`
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
    transform-style: preserve-3d;
    position: absolute;
    -webkit-transform:rotateY(180deg); 
    // transform: rotateY(${props => props.flip? '':'180deg'});
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