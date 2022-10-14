import React, { useEffect, useState } from 'react';
import { Form, InputField } from '../Utils/Styles/AddQuizStyle';
import { useUserContext } from '../Contexts/UserQuizzesContext';
import axios from 'axios';
import { SearchPageCardContainer, SearchPageContainer, SearchPageContentContainer, SearchPageFormContainer, SearchPageTitle } from '../Utils/Styles/SearchPageStyle';
import SearchedCard from '../Components/SearchedCard';

const SearchPage = () => {
    // const { allQuiz } = useUserContext();
    const [ quiz, setQuiz ] = useState([]);
    const [ word, setWord ] = useState('');
    const [ category, setCategory ] = useState('');

    const queryQuiz = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/quiz?title=${word}`,
            { withCredentials: true, credentials: 'include'});
            setQuiz(data.quiz);
        } catch (error) {
            console.log(error);
        };
    };
    
  return (
    <SearchPageContainer>
        <SearchPageTitle>Discover</SearchPageTitle>

        <SearchPageContentContainer>
            <h5>Search For quiz by name, user or category</h5>

            <SearchPageFormContainer>
               <Form onSubmit={queryQuiz}>
                    <InputField
                        name='search'
                        type='search'
                        onChange={(e) => setWord(e.target.value)}
                    />
                </Form> 
            </SearchPageFormContainer>
            
            <SearchPageCardContainer>
                <SearchedCard quiz={quiz}/>
                <SearchedCard quiz={quiz}/>
                <SearchedCard quiz={quiz}/>
            </SearchPageCardContainer>
        </SearchPageContentContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;