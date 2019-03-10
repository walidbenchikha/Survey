import axios from 'axios';
import decode from 'jwt-decode';

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  headers: {
    common: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.session
    }
  }
});

export const createUser = (params) => {
  return fetcher.post("/auth/sUp", params).then(res => res.data);
};

export const login = (email, password) => {
  return fetcher.post("/auth/logIn", {
    email,
    password
  }).then(res => {
    localStorage.session = res.data.data;
    fetcher.defaults.headers.common['Authorization'] = 'Token ' + res.data.data;
    return decode(res.data.data);
  });
};

export const fetchCurrentUser = () => {
  return fetcher.get("/api/user").then(res => {
    return res.data;
  });
};

export const logout = () => {
  delete localStorage.session;
  return Promise.resolve();
};

export const fetchUserSurveys = (user) => {
  return fetcher.get(`/user/surveys`).then(res => res.data);
};

export const createSurvey = (userId, initSurvey) => {
  return fetcher.post(`/user/surveys`, initSurvey).then(res => res.data);
};

export const fetchSurvey = (surveyId) => {
  return fetcher.get(`/surveys/${surveyId}`).then(res => res.data);
};

export const updateSurvey = (survey) => {
  return fetcher.put(`/surveys/${survey.id}`, survey).then(res => res.data);
};

export const deleteSurvey = surveyId => {};

export const fetchResults = (surveyId) => {
  return fetcher.get(`/surveys/${surveyId}/results`).then(res => res.data);
};

export const saveResult = (surveyId, result) => {
  return fetcher.post(`/surveys/${surveyId}/results`, result);
};

export const deleteResults = (surveyId, results) => {
  return Promise.all(results.map(result => fetcher.delete(`/surveys/${surveyId}/results/${result.id}`)));
};
