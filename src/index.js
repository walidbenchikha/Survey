import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore(hashHistory);

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes(store)} history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);