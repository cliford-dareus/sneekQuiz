import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormRow from '../Components/FormRow';
import { LoginPageContainer, LoginPageContentContainer } from '../Utils/Styles/LoginPageStyle';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../Contexts/GlobalContext'
import { Form, FormButton, FormContainer, LoginCTA } from '../Utils/Styles/RegisterPageStyles';
import { SearchPageTitle } from '../Utils/Styles/SearchPageStyle';
import QuizFormError from '../Components/QuizForm/QuizFormError';

const LoginPage = () => {
  const [ userInfo, setUserInfo ] = useState({ email: '', password: '' });
  const [ error, setError ] = useState('');
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
      setError(error.response.data.msg)
      console.log(error);
    };
  };

  useEffect(()=>{
    const timeOut = setTimeout(()=> {
      setError('')
    },[3000]);

    return ()=> {
      clearTimeout(timeOut);
    };
  },[error]);

  return (
    <LoginPageContainer>
      <SearchPageTitle>Login</SearchPageTitle>
      <LoginPageContentContainer>
        <FormContainer>
          <Form onSubmit={loginUser}>
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

                <FormButton type='submit'>
                  Sign In
                </FormButton>
          </Form>

          <p
            style={{color: 'var(--primary-100)'}}
          >
            Don't have an account yet?
              <LoginCTA to='/register'>
                Sign Up
              </LoginCTA>
          </p>
        </FormContainer>
      </LoginPageContentContainer>
      {error && <QuizFormError error={error}/>}
    </LoginPageContainer>
  );
};

export default LoginPage;