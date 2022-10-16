import React from 'react';

const QuizCard = ({ quiz, score}) => {
  return (
    <div>
      <div>Question: {quiz.newData.question}?</div>
      <div>Answer: {quiz.newData.correct_answer}.</div>
    </div>
  );
};

export default QuizCard;