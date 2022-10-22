import React from 'react';
import { DefaultCategory, SearchCardContainer, SearchCardTitle, SearchResultContainer } from '../Utils/Styles/SearchPageStyle';

const SearchedCard = ({ quiz, title }) => {
  
  return (
    <SearchCardContainer>
      <SearchCardTitle>{title}</SearchCardTitle>
      <DefaultCategory>
        {quiz.length !== 0?
        quiz.map((item)=> {
        return (
          <SearchResultContainer
            to={`/quiz/:${item._id}`}
          >
            <p>{item.title}</p>
            <p>{item.quizzes.length}</p>
          </SearchResultContainer>
        )
      }): 'Search for a Quiz'}
      </DefaultCategory>
    </SearchCardContainer>
  );
};

export default SearchedCard;