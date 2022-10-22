import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../Contexts/GlobalContext';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { QUIZSTEPS } from '../../Helpers/constants';
import { QuizStartContainer } from '../../Utils/Styles/QuizModeStyle';
import { FormButton } from '../../Utils/Styles/RegisterPageStyles';

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
        <p>{quiz && quiz.category}</p>
        <p>{quiz && quiz.user}</p>
      </div>
      <FormButton onClick={starQuiz}>Start Quiz</FormButton>
    </QuizStartContainer>
  );
};

export default QuizStart;