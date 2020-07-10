import axios from '../../helper/axios';
const REACT_APP_URL = 'http://localhost:5000/';
import qs from 'querystring';

const login = dataSubmit => {
  return {
    type: 'LOGIN',
    payload: axios().post(`${REACT_APP_URL}books/auth/login`, dataSubmit),
  };
};

const register = dataSubmit => {
  return {
    type: 'REGISTER',
    payload: axios().post(`${REACT_APP_URL}books/auth/register`, dataSubmit),
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

const clear = () => {
  return {
    type: 'CLEAR',
  };
};
export {login, register, logout, clear};
