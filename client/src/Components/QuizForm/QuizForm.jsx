import React, { useState } from 'react';
import { AddQuizFormContainer, InputField } from '../../Utils/Styles/AddQuizStyle';
import { useFormStateContext } from '../../Contexts/FormHooks';
import { FIELDS, STEPS } from '../../Helpers/constants';

export const QuizForm = () => {
  const { fields, setStep, updateFields} = useFormStateContext();
  const [ data, setData ] = useState({
    question: '',
    answer: ''
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
    updateFields(FIELDS.QUIZ, [...fields.quiz, {data}]);
    setData({question: '', answer: ''});
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
          name='answer'
          type="text" 
          placeholder='Type Answer here'
          onChange={handleChange}
          value={data.answer}
        />

        <div>
          <button
            type='button'
            onClick={goBack}
          >
            Prev
          </button>
          <div>
            <button
            >
              add Question
            </button>
            <button
              type='button'
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </AddQuizFormContainer>
  );
};

