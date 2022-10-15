import React, { useState } from 'react';
import { DashBoardCardContainer } from '../Utils/Styles/DashBoardStyle';
import QuizModal from './QuizModal';

const DashBoardCard = ({ quiz }) => {
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <DashBoardCardContainer
      onDoubleClick={() => setOpenModal(true)}
      >
        {quiz.title}
      </DashBoardCardContainer>

      { openModal && <QuizModal quiz={quiz} setOpenModal={setOpenModal}/>}
    </>
  );
};

export default DashBoardCard;