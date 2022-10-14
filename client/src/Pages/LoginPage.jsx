import React, { useState } from 'react';
import axios from 'axios';
import FormRow from '../Components/FormRow';
import { LoginPageContainer } from '../Utils/Styles/LoginPageStyle';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../Contexts/GlobalContext'

const LoginPage = () => {
  const [ userInfo, setUserInfo ] = useState({ email: '', password: '' });
  const { saveUser } = useGlobalContext();
   const Navigate = useNavigate();
 
  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name] : e.target.value})
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    const logInUser = { email, password };
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/auth/login', logInUser, { 
        withCredentials: true,
        credentials: 'include'});
      setUserInfo({ email: '', password: '' });
      saveUser(data.user);
      Navigate('/');   //Change to Dashboard later!!!!
    } catch (error) {
      console.log(error)
    };
  };

  return (
    <LoginPageContainer>
      <form onSubmit={loginUser}>
        <FormRow 
          name='email' 
          type='email'
          handleChange={handleChange}
          value={userInfo.email}
        />
        <FormRow 
          name='password' 
          type='password'
          handleChange={handleChange}
          value={userInfo.password}
        />

        <button type='submit'>
          Sign In
        </button>
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;