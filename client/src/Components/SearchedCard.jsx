import React from 'react';
import { SearchCardContainer, SearchCardTitle } from '../Utils/Styles/SearchPageStyle';

const SearchedCard = ({ quiz }) => {
  return (
    <SearchCardContainer>
      <SearchCardTitle>Card Title</SearchCardTitle>
      {quiz.map((item)=> {
        return (
          <>
            <p>{item.title}</p>
          </>
        )
      })}
    </SearchCardContainer>
  );
};

export default SearchedCard;