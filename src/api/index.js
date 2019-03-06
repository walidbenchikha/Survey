import axios from 'axios';
import decode from 'jwt-decode';

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.session
  }
});

export const createUser = (params) => {
  return fetcher.post("/users", params).then(res => res.data);
};

export const login = (email, password) => {
  return fetcher.post("/login", {
    email,
    password
  }).then(res => {
    localStorage.session = res.data.auth;
    fetcher.defaults.headers.common['Authorization'] = res.data.auth;
    return decode(res.data.auth);
  });
};

export const fetchCurrentUser = () => {
  return fetcher.get("/users/me").then(res => {
    return res.data;
  });
};
