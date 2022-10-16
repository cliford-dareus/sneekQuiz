import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../Contexts/GlobalContext';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';

const QuizStart = () => {
  const [ quiz, setQuiz ] = useState([]);
  const { setStep, setData, setScore } = useQuizStatContext();
  const { quizzes } = useGlobalContext();
  const { pathname } = useLocation();
  const id = pathname.split('/:')[1];

  const starQuiz = () => {
    setStep(QUIZSTEPS.QUIZENTRY);
  };

  useEffect(()=> {
    const getQuiz = quizzes.filter((quiz)=>{
      if(quiz._id === id ){
        return quiz;
      };
    });

    const quiz = getQuiz[0];
    setQuiz(quiz);
    setData(quiz);
    setScore(0);
  },[]);

  return (
    <div>
      {quiz && <p>{quiz.title}</p>}
      <button onClick={starQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizStart;