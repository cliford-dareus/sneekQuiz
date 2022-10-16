import React, { useState } from 'react';
import { QuizStepContext } from '../Contexts/QuizModeContext/QuizStepsContext';
import { getCurrentQuiz } from '../Helpers/QuizPage';
import { QUIZSTEPS } from '../Helpers/constants';

const QuizModePage = () => {
  const [ step, setStep ] = useState(QUIZSTEPS.STARTQUIZ);
  const [ data, setData ] = useState()
  const [ score, setScore ] = useState([])

  return (
    <div>
      <h3>Quiz Mode</h3>
      <div>
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
          <div>
             {getCurrentQuiz(step)}
          </div>
        </QuizStepContext.Provider>
      </div>
    </div>
  );
};

export default QuizModePage;