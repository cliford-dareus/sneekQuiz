import React from 'react';
import { SearchCardContainer, SearchCardTitle } from '../Utils/Styles/SearchPageStyle';

const SearchedCard = ({ quiz, title }) => {
  return (
    <SearchCardContainer>
      <SearchCardTitle>{title}</SearchCardTitle>
      {quiz.length !== 0?
        quiz.map((item)=> {
        return (
          <>
            <p>{item.title}</p>
          </>
        )
      }): 'Search for a Quiz'}
    </SearchCardContainer>
  );
};

export default SearchedCard;