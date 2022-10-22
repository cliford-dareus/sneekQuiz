import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import FormRow from '../Components/FormRow';
import { Form, FormButton, FormContainer, LoginCTA, RegisterPageContainer, RegisterPageContenContainer } from '../Utils/Styles/RegisterPageStyles';
import { SearchPageTitle } from '../Utils/Styles/SearchPageStyle';
import QuizFormError from '../Components/QuizForm/QuizFormError';

const RegisterPage = () => {
  const [ userInfo, setUserInfo ] = useState({
    name: '',
    email: '',
    password: '',
    ocupation: ''
  });
  const [ error, setError ] = useState('');

  const handleChange = (event) =>{
    setUserInfo({...userInfo, [event.target.name] : event.target.value});
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, ocupation } = userInfo;
    const registerNewUser = { name, email, password, ocupation };

    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/auth/register', registerNewUser, { 
        withCredentials: true,
        credentials: 'include'});
      console.log(registerNewUser)
      setUserInfo({ name: '', email: '', password: '', ocupation: ''})
    } catch (error) {
      setError(error.response.data.msg)
      console.log(error)
    }
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
    <RegisterPageContainer>
      <SearchPageTitle>Create an Account</SearchPageTitle>

      <RegisterPageContenContainer>
          <FormContainer>
          <Form onSubmit={registerUser}>
            <FormRow 
              name='name' 
              type='name'
              handleChange={handleChange}
              value={userInfo.name}
            />

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

            <FormRow 
              name='ocupation' 
              type='ocupation'
              handleChange={handleChange}
              value={userInfo.ocupation}
            />

            <FormButton type='submit'>
              Sign Up
            </FormButton>
          </Form>

          <p
            style={{color: 'var(--primary-100)'}}
          >
            Already a have an account?
              <LoginCTA to='/login'>
                Log In
              </LoginCTA>
          </p>
        </FormContainer>
      </RegisterPageContenContainer>
      {error && <QuizFormError error={error}/>}
    </RegisterPageContainer>
  );
};

export default RegisterPage;