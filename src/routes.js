import React from 'react';
import App from './App';
import { Route, IndexRoute } from 'react-router';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UserSurveysPage from './pages/UserSurveysPage';
import { home } from './reducers/session';
import { fetchCurrentUserRequest, fetchCurrentUserRequestSuccess, fetchCurrentUserRequestFail } from './actions/login';
import EditSurveyPage from './pages/EditSurveyPage';
import UserSurveyPage from './pages/UserSurveyPage';
import SurveyDataPage from './pages/SurveyDataPage';
import OverviewSurveyPage from './pages/OverviewSurveyPage';
import SurveyReportPage from './pages/SurveyReportPage';
import SurveyPage from './pages/SurveyPage';

const skipAuthPaths = ['/login', '/register', '/logout'];

export default function routes(store) {
    function requireAuth(nextState, replace, next) {
      const state = store.getState();
      const nextPath = nextState.location.pathname;
      console.log(nextPath);
      if (!state.session.user && skipAuthPaths.indexOf(nextPath) === -1) {
        store.dispatch(fetchCurrentUserRequest()).then(res => {
          store.dispatch(fetchCurrentUserRequestSuccess(res));
          dispatchHomePage(nextState, replace, store);
          next();
        }, err => {
          store.dispatch(fetchCurrentUserRequestFail(nextPath));
          replace('/login');
          next();
        });
      } else {
        dispatchHomePage(nextState, replace, store);
        next();
      }
    }
  
    function dispatchHomePage(nextState, replace, store) {
      const state = store.getState();
      if (state.session.user && nextState.location.pathname === '/') {
        replace({
          pathname: home(state.session.user)
        });
      }
    }
    return (
        <Route path="/" component={App} onEnter={requireAuth}>
            <Route path="register" component={RegisterPage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="logout" component={LogoutPage}/>
            <Route path="user/surveys" component={UserSurveysPage} />
            <Route path="surveys/:surveyId" component={SurveyPage}/>
            <Route path="user/surveys/:surveyId/" component={UserSurveyPage}>
              <Route path="edit" component={EditSurveyPage}/>
              <Route path="data" component={SurveyDataPage}/>
              <Route path="report" component={SurveyReportPage}/>
              <IndexRoute component={OverviewSurveyPage}/>
            </Route>
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
    },
    viewSurvey(survey) {
      return `/surveys/${survey._id}`;
    },
    survey(survey) {
      return `/user/surveys/${survey._id}/`;
    },
    editSurvey(survey) {
      return `/user/surveys/${survey._id}/edit`;
    }
};