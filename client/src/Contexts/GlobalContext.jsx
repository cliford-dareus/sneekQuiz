import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const globalContext = createContext()

const AppProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ user, setUser ] = useState(null);
    const [ quizzes, setQuizzes ] = useState([]);
    const [ userStats, setUserStats ] = useState(null)

    const saveUser = (user) => {
        setUser(user);
    };

    const removeUser = () => {
        setUser(null);
    };

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/users/showMe`, { 
            withCredentials: true,
            credentials: 'include'
        });
            saveUser(data.user);
        } catch (error) {
            removeUser();
        };
        setIsLoading(false);
    };

    const getUserStat = async () => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/users/${user.userId}`, 
            axios.defaults.withCredentials = true);
            setUserStats(data)
        } catch (error) {
            console.log(error)
        };
    };

    const logoutUser = async () => {
        console.log('login out')
        try {
            await axios.delete('http://localhost:5000/api/v1/auth/logout', 
            { 
            withCredentials: true,
            credentials: 'include'
        }
        );
            removeUser();
        } catch (error) {
            console.log(error);
        };
    };

    console.log(user)

    const fetchQuizzes = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/quiz/all`, { 
            withCredentials: true,
            credentials: 'include'
        });
        setQuizzes(data.quiz);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchUser();
        fetchQuizzes();
    },[]);

  return (
    <globalContext.Provider
        value={{
            isLoading,
            saveUser,
            user,
            logoutUser,
            quizzes,
            getUserStat,
            userStats
      }}
    >
        {children}
    </globalContext.Provider>
  )
};

export const useGlobalContext = () => {
    return useContext(globalContext);
};

export { AppProvider };