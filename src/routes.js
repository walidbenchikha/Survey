import React from 'react';
import App from './App';
import { Route } from 'react-router';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

export default function routes(store) {
    return (
        <Route path="/" component={App}>
            <Route path="register" component={RegisterPage}/>
            <Route path="login" component={LoginPage}/>
        </Route>
    );
  }

export const Path = {  
    login() {
      return `/login`;
    }
};