import React from 'react';
import { FormErrorContainer } from '../../Utils/Styles/AddQuizStyle';

const QuizFormError = ({error}) => {
  return (
    <FormErrorContainer>
        {error}
    </FormErrorContainer>
  );
};

export default QuizFormError;