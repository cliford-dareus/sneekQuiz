import React, { useState } from 'react';
import { QuizStepContext } from '../Contexts/QuizModeContext/QuizStepsContext';
import { getCurrentQuiz } from '../Helpers/QuizPage';
import { QUIZSTEPS } from '../Helpers/constants';
import { QuizModecontainer } from '../Utils/Styles/QuizModeStyle';

const QuizModePage = () => {
  const [ step, setStep ] = useState(QUIZSTEPS.STARTQUIZ);
  const [ data, setData ] = useState()
  const [ score, setScore ] = useState([])

  return (
    <QuizModecontainer>
      <h3>Quiz Mode</h3>
        <QuizStepContext.Provider 
          value={{ 
            step, 
            setStep, 
            data, 
            setData, 
            score, 
            setScore 
          }
        }>
          {getCurrentQuiz(step)}
        </QuizStepContext.Provider>
    </QuizModecontainer>
  );
};

export default QuizModePage;