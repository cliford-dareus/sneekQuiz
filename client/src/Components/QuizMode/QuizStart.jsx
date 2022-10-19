import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../Contexts/GlobalContext';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';
import { QuizStartContainer } from '../../Utils/Styles/QuizModeStyle';

const QuizStart = () => {
  const [ quiz, setQuiz ] = useState([]);
  const { setStep, setData } = useQuizStatContext();
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
    setData(quiz);
    setQuiz(quiz);
  },[]);

  return (
    <QuizStartContainer>
      {quiz && <h4>{quiz.title}</h4>}
      <div>
        <p>{quiz.category}</p>
        <p>{quiz.user}</p>
      </div>
      <button onClick={starQuiz}>Start Quiz</button>
    </QuizStartContainer>
  );
};

export default QuizStart;