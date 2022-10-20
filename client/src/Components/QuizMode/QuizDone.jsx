import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuizStatContext } from '../../Contexts/QuizModeContext/QuizHook';
import { useUserContext } from '../../Contexts/UserQuizzesContext';
import { useGlobalContext } from '../../Contexts/GlobalContext';
import { QUIZSTEPS } from '../../Helpers/constants';
import { QuizStartContainer } from '../../Utils/Styles/QuizModeStyle';
import QuizCard from './QuizCard';
import { FormButton } from '../../Utils/Styles/RegisterPageStyles';

const QuizDone = () => {
  const { data, setStep, score } = useQuizStatContext();
  const [ done, setDone ] = useState(false);
  const { getUserStat } = useGlobalContext();
  const { getUserQuizzes } = useQuizStatContext();

  const finishQuiz = async() => {
    try {
      await axios.patch(`http://localhost:5000/api/v1/quiz/${data._id}?completedQuiz=true`, 
      axios.defaults.withCredentials = true);
      await axios.patch(`http://localhost:5000/api/v1/users/showMe?completedQuiz=true`, 
      axios.defaults.withCredentials = true);
      setDone(!done);
      setStep(QUIZSTEPS.REVIEWQUIZ);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    getUserStat()
  }, [done]);
  
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
      <FormButton 
        onClick={()=> finishQuiz()}
      >
        Finish
      </FormButton>
    </QuizStartContainer>
  );
};

export default QuizDone;