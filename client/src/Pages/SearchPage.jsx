import React, { useEffect, useState } from 'react';
import { Form, InputField } from '../Utils/Styles/AddQuizStyle';
import { defaultCategory } from '../Helpers/constants';
import { useUserContext } from '../Contexts/UserQuizzesContext';
import axios from 'axios';
import SearchedCard from '../Components/SearchedCard';
import { DefaultCategory, DefaultCategoryItem, SearchCardContainer, SearchCardTitle, SearchPageCardContainer, SearchPageContainer, SearchPageContentContainer, SearchPageFormContainer, SearchPageTitle } from '../Utils/Styles/SearchPageStyle';

const SearchPage = () => {
    const [ quiz, setQuiz ] = useState([]);
    const [ word, setWord ] = useState('');
    const [ category, setCategory ] = useState('');

    const queryQuiz = async () => {
        if(word === '' && category === '') return
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/quiz?title=${word}&category=${category}`,
            { withCredentials: true, credentials: 'include'});
            setQuiz(data.quiz);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(()=> {
        queryQuiz();
        const timeOut = setTimeout(()=> {
            setCategory('');
            setWord('');
        }, 1000);

        return ()=> {
            clearTimeout(timeOut);
        };
    },[word, category]);

  return (
    <SearchPageContainer>
        <SearchPageTitle>Discover</SearchPageTitle>

        <SearchPageContentContainer>
            <SearchCardTitle>Search for quizzes</SearchCardTitle>

            <SearchPageFormContainer>
               <Form>
                    <InputField
                        placeholder='Search for quiz...'
                        name='search'
                        type='search'
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                </Form> 
            </SearchPageFormContainer>
            
            <SearchPageCardContainer>
                <SearchedCard quiz={quiz} title='Quizzes'/>
                <SearchedCard quiz={quiz} title='Users'/>
                <SearchCardContainer>
                    <SearchCardTitle>Category</SearchCardTitle>

                    <DefaultCategory>
                        {defaultCategory.map((category) => {
                            const { name, value } = category
                            return <DefaultCategoryItem onClick={() => setCategory(value)}>{name}</DefaultCategoryItem>
                        })}
                    </DefaultCategory>
                </SearchCardContainer>
            </SearchPageCardContainer>
        </SearchPageContentContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;