import React from 'react';
import { CategoryCardsContainer, CategoryCardsTitle } from '../Utils/Styles/LandingPageStyles';

const CategoryCards = ({ card }) => {
  
  return (
    <CategoryCardsContainer>
        <CategoryCardsTitle>
            { card.name}
        </CategoryCardsTitle>
    </CategoryCardsContainer>
  );
};

export default CategoryCards;