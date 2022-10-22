import React, { useState } from 'react';
import { useFormStateContext } from '../../Contexts/FormContexts/FormHooks';

import { ProgressCircle, ProgressItem, ProgressLabel, ProgressLine, QuizFormProgressContainer, QuizProgress } from '../../Utils/Styles/AddQuizStyle';

const QuizFormProgress = () => {
  const { step } = useFormStateContext();

  return (
    <QuizFormProgressContainer>
      <QuizProgress>
        <ProgressItem>
          <ProgressCircle defaultColor={step === 'DETAILS_STEP'}>1</ProgressCircle>
        </ProgressItem>

        <ProgressLine />

        <ProgressItem>
          <ProgressCircle defaultColor={step === 'QUIZ_STEP'}>2</ProgressCircle>
        </ProgressItem>

        <ProgressLine />

        <ProgressItem>
          <ProgressCircle defaultColor={step === 'REVIEW_STEP'}>3</ProgressCircle>
        </ProgressItem>
      </QuizProgress>
    </QuizFormProgressContainer>
  );
};

export default QuizFormProgress;