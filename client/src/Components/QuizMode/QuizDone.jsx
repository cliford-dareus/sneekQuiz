import React from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { useUserContext } from '../../Contexts/UserQuizzesContext';
import { QUIZSTEPS } from '../../Helpers/constants';

const QuizDone = () => {
  const { data, setStep, score } = useQuizStatContext();
  const { getUserQuizzes } = useQuizStatContext();

  return (
    <div>QuizDone</div>
  )
}

export default QuizDone