import React, { useEffect, useState } from 'react'
import { AddQuizFormContainer, Form, InputContainer, InputField, SelectField } from '../../Utils/Styles/AddQuizStyle';
import { useFormStateContext } from '../../Contexts/FormContexts/FormHooks';
import { FIELDS, STEPS } from '../../Helpers/constants';
import { defaultCategory } from '../../Helpers/constants';
import QuizFormError from './QuizFormError';
import { FormButton } from '../../Utils/Styles/RegisterPageStyles';

export const QuizDetail = () => {
  const { fields, setStep, updateFields} = useFormStateContext();
  const [ error, setError ] = useState('');
  const [ data, setData ] = useState({
    title: '',
    category: ''
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name] : e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(!data.title){
      setError('Please Add a title to your quiz!');
      return
    };

    if(!data.category){
      setError('Please select a category to your quiz!');
      return
    };

    updateFields(FIELDS.DETAILS, data);
    setStep(STEPS.QUIZ);
  };

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
          <InputContainer>
            <InputField 
              name='title'
              type='text'
              placeholder='Enter Quiz Title'
              onChange={handleChange}
              value={data.title}
            />
          </InputContainer>
          <InputContainer>
            <SelectField 
              name='category' 
              onChange={handleChange}
              value={data.category}
            >
              <option>Choose a category</option>
              {defaultCategory.map((category) => {
                const { name, value } = category
                return <option value={value}>{name}</option>
              })}
            </SelectField>
          </InputContainer>
            <FormButton>
              Next
            </FormButton>
        </Form>
        {/* Add Framer Motion animation */}
        {error && <QuizFormError 
          error={error}
        />}
    </AddQuizFormContainer>
  );
};
