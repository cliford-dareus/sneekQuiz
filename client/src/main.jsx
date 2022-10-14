import React from 'react';
import ReactDOM from 'react-dom/client';;
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Contexts/GlobalContext';
import { UserQuizzesProvider } from './Contexts/UserQuizzesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <UserQuizzesProvider>
          <App />
        </UserQuizzesProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
