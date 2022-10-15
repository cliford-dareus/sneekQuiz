import React from 'react';
import { useGlobalContext } from '../Contexts/GlobalContext';
import { Link, useLocation } from 'react-router-dom';

const QuizModePage = () => {
  const { quizzes } = useGlobalContext();

  const { pathname } = useLocation();
  const id = pathname.split('/:')[1];

  const getQuiz = quizzes.filter((quiz)=>{
    if(quiz._id === id ){
      return quiz
    }
  });

  const quiz = getQuiz[0];
  console.log(quiz.quizzes)
  return (
    <div>
      <h3>Quiz Mode</h3>

      <div>
        <h5>{quiz.title}</h5>

        <div>
          
        </div>
        <Link to='/'>Start Quiz</Link>
      </div>
    </div>
  );
};

export default QuizModePage;