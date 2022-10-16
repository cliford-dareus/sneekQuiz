import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../Contexts/UserQuizzesContext';

const QuizModal = ({ setOpenModal, quiz}) => {
    const { getUserQuizzes } = useUserContext();
    const deleteQuiz = async () => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/v1/quiz/${quiz._id}`,
            { withCredentials: true, credentials: 'include'});
            getUserQuizzes()
            setOpenModal(false)
        } catch (error) {
            console.log(error);
        };
    };

  return(
    <QuizModalContainer>
        <p>{quiz.title}</p>
      <button>edit</button>
      <button onClick={deleteQuiz}>delete</button>
      <button onClick={() => setOpenModal(false)}>close</button>
      <Link
        to={`/quiz/:${quiz._id}`}
      >
        start Quiz
      </Link>
    </QuizModalContainer>
  );
};

export default QuizModal;

const QuizModalContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: .5em;
    bottom: 0;
    left: 0;
    tranform: translate(-50%, -50%);
    background: red;
    z-index: 2222;
`;