import React from 'react';
import App from './App';
import { Route } from 'react-router';

export default function routes(store) {
    return (
        <Route path="/" component={App}>
            <Route path="register" component={App}/>
            <Route path="login" component={App}/>
        </Route>
    );
  }

