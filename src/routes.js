import React from 'react';
import App from './App';
import { Route } from 'react-router';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UserSurveysPage from './pages/UserSurveysPage';

export default function routes(store) {
    return (
        <Route path="/" component={App}>
            <Route path="register" component={RegisterPage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="logout" component={LogoutPage}/>
            <Route path="user/surveys" component={UserSurveysPage}/>
        </Route>
    );
  }

export const Path = {  
    login() {
      return `/login`;
    },

    logout() {
      return `/logout`;
    },
    surveyList() {
      return `/user/surveys`;
    }
};