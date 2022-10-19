import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';
import { shuffle } from '../../Helpers/Shuffle';
import { AnswerButton, QuizAnswerBtnContainer, QuizBack, QuizFront, QuizHolder, QuizHolderContainer, QuizStartContainer } from '../../Utils/Styles/QuizModeStyle';

const QuizEntry = () => {
  const [ page, setPage ] = useState(0);
  const [ correct_answer, setCorrectAnswer] = useState('');
  const [ answered, setAnswered ] = useState(false);
  const [ flip, setFlip ] = useState(false);
  const [ shuffleArray, setShuffleArray ] = useState([]);
  const { data, setStep, score, setScore } = useQuizStatContext();
  const [ ANSWER_ELEMENT, setANSWER_ELEMENT ] = useState(null)

  const PAGELENGTH = data.quizzes.length - 1;
  const QUIZ = data.quizzes;

  const next = () => {
    if(ANSWER_ELEMENT){
      ANSWER_ELEMENT.classList.remove(...ANSWER_ELEMENT.classList);
    };
    
    if(!answered)return;

    setFlip(!flip);
    setAnswered(false)

    if(page === PAGELENGTH){
        setStep(QUIZSTEPS.REVIEWQUIZ);
    };

    setPage(page + 1);
  };

  const prev = () => {
    if(ANSWER_ELEMENT){
      ANSWER_ELEMENT.classList.remove(...ANSWER_ELEMENT.classList);
    };

    if(page === 0) return;
    setPage(page - 1);
  };

  const getSuffleAnswers = () => {
    const arrToShuffle = [QUIZ[page].newData.correct_answer, ...QUIZ[page].newData.wrong_answer];
    const shuffe = shuffle(arrToShuffle);
    setShuffleArray(shuffe);
  };

  const checkAnswer = (e) => {
    e.preventDefault();

    setANSWER_ELEMENT(e.target);
    const choice = e.target.innerText;
    setFlip(!flip);
    setAnswered(true);
    setScore([...score, choice])

    if(choice === correct_answer){
      e.target.classList.add('green');
    }else{
      e.target.classList.add('red');
    }
  };

  useEffect(() => {
    setCorrectAnswer(QUIZ[page].newData.correct_answer);
    getSuffleAnswers();
  }, [page]);

  return (
    <QuizStartContainer>
      <QuizHolderContainer>
        <QuizHolder
          className={`${flip ? 'flip' : ''}`}
        >
          <QuizFront>
            {QUIZ[page].newData.question}
          </QuizFront>

          <QuizBack>
            {correct_answer}
          </QuizBack>
        </QuizHolder>
      </QuizHolderContainer>
        

        <QuizAnswerBtnContainer>
          {shuffleArray.map((answer) => (
            <AnswerButton
              onClick={checkAnswer}
              disabled={answered}
              style={{height: '2.5em', marginTop: '.5em'}}
            >
              {answer}
            </AnswerButton>
          ))}
        </QuizAnswerBtnContainer>

        <div>
          {(page !== 0) && <button onClick={prev}>prev</button>}
          {<button onClick={next}>next</button>}
        </div>
    </QuizStartContainer>
  );
};

export default QuizEntry;