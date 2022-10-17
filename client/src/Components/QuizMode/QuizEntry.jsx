import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';
import { shuffle } from '../../Helpers/Shuffle';
import { QuizAnswerBtnContainer, QuizBack, QuizFront, QuizHolder, QuizStartContainer } from '../../Utils/Styles/QuizModeStyle';

const QuizEntry = () => {
  const [ page, setPage ] = useState(0);
  const [ correct_answer, setCorrectAnswer] = useState('');
  const [ answering, setAnswering ] = useState(false);
  const [ flip, setFlip ] = useState(false);
  const [ shuffleArray, setShuffleArray ] = useState([]);
  const { data, setStep, score, setScore } = useQuizStatContext();
  const [ ANSWER_ELEMENT, setANSWER_ELEMENT ] = useState(null)

  const PAGELENGTH = data.quizzes.length - 1;
  const QUIZ = data.quizzes;

  const frontEl = useRef();
  const backEl = useRef();

  const next = () => {
    ANSWER_ELEMENT.classList.remove(...ANSWER_ELEMENT.classList);
    setFlip(false);

    if(page === PAGELENGTH){
        setStep(QUIZSTEPS.REVIEWQUIZ);
    };

    setPage(page + 1);
  };

  const prev = () => {
    ANSWER_ELEMENT.classList.remove(...ANSWER_ELEMENT.classList);
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
    setFlip(true);
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

  console.log(flip)

  return (
    <QuizStartContainer>
        <QuizHolder
          // flip={flip}
          className={`${flip ? 'flip' : ''}`}
        >
          <QuizFront ref={frontEl}>
            <p>{QUIZ[page].newData.question}</p>
          </QuizFront>

          <QuizBack ref={backEl} flip={flip}>
            <p>{correct_answer}</p>
          </QuizBack>
        </QuizHolder>

        <QuizAnswerBtnContainer>
          {shuffleArray.map((answer) => (
            <button
              onClick={checkAnswer}
            >
              {answer}
            </button>
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