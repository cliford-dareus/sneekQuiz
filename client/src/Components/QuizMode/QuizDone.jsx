import axios from 'axios';
import React from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { useUserContext } from '../../Contexts/UserQuizzesContext';
import { QUIZSTEPS } from '../../Helpers/constants';
import { QuizStartContainer } from '../../Utils/Styles/QuizModeStyle';
import QuizCard from './QuizCard';

const QuizDone = () => {
  const { data, setStep, score } = useQuizStatContext();
  const { getUserQuizzes } = useQuizStatContext();

  const finishQuiz = async() => {
    try {
      await axios.patch(`http://localhost:5000/api/v1/quiz/${data._id}?completedQuiz=true`, 
      axios.defaults.withCredentials = true);
      setStep(QUIZSTEPS.REVIEWQUIZ);
    } catch (error) {
      console.log(error);
    }
  };

  const QData = data.quizzes;

  return (
    <QuizStartContainer>
      <div>QuizDone</div>
      <div>
        {QData.map((quiz) => (
            <QuizCard 
              quiz={quiz} 
              score={score}
            />
        ))}
        <div>{score.map((item) => (
          <p>Your Answer's {item}.</p>
        )) }</div>
      </div>
      <button 
        onClick={finishQuiz}
      >
        Finish
      </button>
    </QuizStartContainer>
  );
};

export default QuizDone;