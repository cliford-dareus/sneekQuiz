import React from 'react';
import { DashBoardCardContainer } from '../Utils/Styles/DashBoardStyle';

const DashBoardCard = ({quiz}) => {
  return (
    <DashBoardCardContainer>
        {quiz.title}
    </DashBoardCardContainer>
  );
};

export default DashBoardCard;