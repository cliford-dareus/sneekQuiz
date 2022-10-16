import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';
import { shuffle } from '../../Helpers/Shuffle';

const QuizEntry = () => {
  const [ page, setPage ] = useState(0);
  const [ correct_answer, setCorrectAnswer] = useState('');
  const [ answering, setAnswering ] = useState(false);
  const { data, setStep, score, setScore } = useQuizStatContext();

  const PAGELENGTH = data.quizzes.length - 1;
  const QUIZ = data.quizzes;

  const next = () => {
    if(page === PAGELENGTH) return;
    setPage(page + 1);
  };

  const prev = () => {
    if(page === 0) return;
    setPage(page - 1);
  };

  const getSuffleAnswers = () => {
    const arrToShuffle = [QUIZ[page].newData.correct_answer, ...QUIZ[page].newData.wrong_answer];
    const shuffleArray = shuffle(arrToShuffle);
    return shuffleArray;
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    const choice = e.target.innerText;
    setAnswering(true);
    setScore([...score, choice])

    setTimeout(()=> {
      if(choice === correct_answer){
         setAnswering(false);
         next()
      };

      if(page === PAGELENGTH){
        setStep(QUIZSTEPS.REVIEWQUIZ);
      };

      setAnswering(false)
      next()
    }, 1000);
  };

  useEffect(() => {
    setCorrectAnswer(QUIZ[page].newData.correct_answer);
  }, [page]);
  
  return (
    <div>
      <div> 
        <div>
          <h1>{QUIZ[page].newData.question}</h1>
          {!answering && getSuffleAnswers().map((answer) => (
            <button
              onClick={checkAnswer}
              // disabled={}
            >
              {answer}
            </button>
          ))}
        </div>

        <div>
          {(page !== 0) && <button onClick={prev}>prev</button>}
          {(page !== PAGELENGTH) && <button onClick={next}>next</button>}
        </div>
      </div>
    </div>
  );
};

export default QuizEntry;