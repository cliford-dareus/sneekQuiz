import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const userQuizzes = createContext();

const UserQuizzesProvider = ({ children }) => {
    const [ quizzes, setQuizzes ] = useState([]);
    const [ allQuiz, setAllQuiz ] = useState([]);
    const [ user, setUser ] = useState();

    const getUserQuizzes = async () => {
        if(!user) return 
        const { userId } = user;
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/quiz/${userId}`,
            { withCredentials: true, credentials: 'include'});
            setQuizzes(data.quiz)
        } catch (error) {
            console.log(error)
        };
    };

    const getAllQuizzes = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/quiz/all`,
            { withCredentials: true, credentials: 'include'});
            setAllQuiz(data)
        } catch (error) {
            console.log(error);
        };
    };
    
    useEffect(()=> {
        getUserQuizzes();
        getAllQuizzes();
    },[user]);

  return (
    <userQuizzes.Provider 
        value={{
            quizzes,
            setQuizzes,
            setUser,
            allQuiz
        }}
    >
        {children}
    </userQuizzes.Provider>
  );
};

export const useUserContext = () => {
    return useContext(userQuizzes);
};

export {UserQuizzesProvider};