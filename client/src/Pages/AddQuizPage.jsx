import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { getCurrentForm } from '../Helpers/QuizPage'
import { FormFieldsContext } from '../Contexts/FormFieldsContext';
import { FormStepsContext } from '../Contexts/FormStepsContext';
import { AddQuizContainer } from '../Utils/Styles/AddQuizStyle';
import { DashBoardContainer } from '../Utils/Styles/DashBoardStyle';
import { defaultFields, STEPS } from '../Helpers/constants';
import QuizFormProgress from '../Components/QuizForm/QuizFormProgress';

const AddQuizPage = () => {
    const [ step, setStep ] = useState(STEPS.DETAILS);
    const [ fields, setFields ] = useState(defaultFields);

    const updateFields = (field, value) => {
        const newFields = {...fields};
        newFields[field] = value;
        setFields(newFields);
    }

  return (
    <DashBoardContainer>
        <NavBar />
        <FormStepsContext.Provider value={{step, setStep}}>
            <FormFieldsContext.Provider value={{fields, updateFields }}>
                <AddQuizContainer>
                    <QuizFormProgress />
                    {getCurrentForm(step)}
                </AddQuizContainer>
            </FormFieldsContext.Provider>
        </FormStepsContext.Provider>
    </DashBoardContainer>
  );
};

export default AddQuizPage;