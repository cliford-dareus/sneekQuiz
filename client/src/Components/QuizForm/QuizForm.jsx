import React, { useEffect, useState } from 'react';
import { AddQuizFormContainer, Form, FormButtonContainer, InputField } from '../../Utils/Styles/AddQuizStyle';
import { useFormStateContext } from '../../Contexts/FormContexts/FormHooks';
import { FIELDS, STEPS } from '../../Helpers/constants';
import { FormButton } from '../../Utils/Styles/RegisterPageStyles';
import QuizFormError from './QuizFormError';

export const QuizForm = () => {
  const { fields, setStep, updateFields} = useFormStateContext();
  const [ error, setError ] = useState('');
  const [ data, setData ] = useState({
    question: '',
    correct_answer: '',
    wrong_answer: ''
  });

  const goBack = () => {
    setStep(STEPS.DETAILS);
  };

  const next = () => {
    if(!data.question || !data.correct_answer || !data.wrong_answer) {
      setError('All Field must be populate!');
      return
    }

    const newData = {...data, wrong_answer: data.wrong_answer.split(',')};

    updateFields(FIELDS.QUIZ, [...fields.quiz, {newData}]);
    setData({question: '', correct_answer: '', wrong_answer: ''});
    
    setStep(STEPS.REVIEW);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name] : e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(!data.question || !data.correct_answer || !data.wrong_answer) {
      setError('All Field must be populate!');
      return
    }
    const newData = {...data, wrong_answer: data.wrong_answer.split(',')};

    updateFields(FIELDS.QUIZ, [...fields.quiz, {newData}]);
    setData({question: '', correct_answer: '', wrong_answer: ''});
  }

  useEffect(()=>{
    const timeOut = setTimeout(()=> {
      setError('')
    },[3000]);

    return ()=> {
      clearTimeout(timeOut);
    };
  },[error]);

  return (
    <AddQuizFormContainer>
      <Form onSubmit={onSubmit}>
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

        <FormButtonContainer>
          <FormButton
            type='button'
            onClick={goBack}
          >
            Prev
          </FormButton>
          
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
          
        </FormButtonContainer>
      </Form>

      {error && <QuizFormError 
          error={error}
      />}
    </AddQuizFormContainer>
  );
};

