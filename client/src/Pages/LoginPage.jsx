import React, { useState } from 'react';
import axios from 'axios';
import FormRow from '../Components/FormRow';
import { LoginPageContainer, LoginPageContentContainer } from '../Utils/Styles/LoginPageStyle';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../Contexts/GlobalContext'
import { Form, FormButton, FormContainer, LoginCTA } from '../Utils/Styles/RegisterPageStyles';
import { SearchPageTitle } from '../Utils/Styles/SearchPageStyle';

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
      
    </LoginPageContainer>
  );
};

export default LoginPage;