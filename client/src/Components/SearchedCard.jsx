import React from 'react';
import { SearchCardContainer, SearchCardTitle, SearchResultContainer } from '../Utils/Styles/SearchPageStyle';

const SearchedCard = ({ quiz, title }) => {
  console.log(quiz)
  return (
    <SearchCardContainer>
      <SearchCardTitle>{title}</SearchCardTitle>
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
    </SearchCardContainer>
  );
};

export default SearchedCard;