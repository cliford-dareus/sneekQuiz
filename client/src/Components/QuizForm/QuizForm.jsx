import React, { useState } from 'react';
import { AddQuizFormContainer, InputField } from '../../Utils/Styles/AddQuizStyle';
import { useFormStateContext } from '../../Contexts/FormContexts/FormHooks';
import { FIELDS, STEPS } from '../../Helpers/constants';
import { FormButton } from '../../Utils/Styles/RegisterPageStyles';

export const QuizForm = () => {
  const { fields, setStep, updateFields} = useFormStateContext();
  const [ data, setData ] = useState({
    question: '',
    correct_answer: '',
    wrong_answer: ''
  });

  const goBack = () => {
    setStep(STEPS.DETAILS);
  };

  const next = () => {
    setStep(STEPS.REVIEW);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name] : e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {...data, wrong_answer: data.wrong_answer.split(',')};

    updateFields(FIELDS.QUIZ, [...fields.quiz, {newData}]);
    setData({question: '', correct_answer: '', wrong_answer: ''});
  }

  return (
    <AddQuizFormContainer>
      <form onSubmit={onSubmit}>
        <InputField 
          name='question'
          type="text" 
          placeholder='Type Question here'
          onChange={handleChange}
          value={data.question}
        />

        <InputField 
          name='correct_answer'
          type="text" 
          placeholder='Type the Correct Answer here'
          onChange={handleChange}
          value={data.correct_answer}
        />

        <InputField 
          name='wrong_answer'
          type="text" 
          placeholder='Type type atleast one wrong Answer here'
          onChange={handleChange}
          value={data.wrong_answer}
        />

        <div>
          <FormButton
            type='button'
            onClick={goBack}
          >
            Prev
          </FormButton>
          <div>
            <FormButton
            >
              add Question
            </FormButton>
            <FormButton
              type='button'
              onClick={next}
            >
              Next
            </FormButton>
          </div>
        </div>
      </form>
    </AddQuizFormContainer>
  );
};

