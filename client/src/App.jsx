import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import { AppContainer } from "./Utils/Styles/GlobalStyles";
import { Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from './Pages/LoginPage';
import VerifyPage from "./Pages/VerifyPage";
import ProtectedRoute from './Components/ProtectedRoute';
import DashBoard from "./Pages/DashBoard";
import AddQuizPage from "./Pages/AddQuizPage";
import SearchPage from "./Pages/SearchPage";
import QuizModePage from "./Pages/QuizModePage";

function App() {
  return (
    <AppContainer>
      <SideBar />

      <Routes>
        <Route path="/" exact element={<LandingPage /> } />
        <Route path="/register" exact element={<RegisterPage /> } />
        <Route path="/login" exact element={<LoginPage />}/>
        <Route path="/user/verify-email" exact element={<VerifyPage />}/>
        <Route path="/search" exact element={<SearchPage /> } />

        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/addquiz" element={<AddQuizPage/>} />
          <Route path="/quiz/:id" element={<QuizModePage/>} />
        </Route>
      
      </Routes>
    </AppContainer>
  );
};

export default App;
