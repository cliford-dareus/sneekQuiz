import React from 'react';
import { ReviewCardContainer } from '../../Utils/Styles/AddQuizStyle';

const QuizCard = ({ quiz }) => {
    const { question, answer } = quiz.data;
  return (
    <ReviewCardContainer>
        <p>{question}</p>
        <p>{answer}</p>
    </ReviewCardContainer>
  );
};

export default QuizCard;