import React from 'react';
import { useState } from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';

const QuizEntry = () => {
  const [ page, setPage ] = useState(0);
  const { data, setStep, score } = useQuizStatContext();

  const PAGELENGTH = data.quizzes.length - 1

  const next = () => {
    if(page === PAGELENGTH) return;
    setPage(page + 1);
  };

  const prev = () => {
    if(page === 0) return;
    setPage(page - 1);
  };

  const submitQuiz = () => {
    setStep(QUIZSTEPS.REVIEWQUIZ);
  };

  return (
    <div>
      <div> 
        <div>
          <h1>{data.quizzes[page].data.question}</h1>
          <h1>{data.quizzes[page].data.answer}</h1>
        </div>

        <div>
          {(page !== 0) && <button onClick={prev}>prev</button>}
          {(page !== PAGELENGTH) && <button onClick={next}>next</button>}
          {(page === PAGELENGTH) && <button onClick={submitQuiz}>Done</button>}
        </div>
      </div>
    </div>
  );
};

export default QuizEntry;