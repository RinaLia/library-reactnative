import axios from '../../helper/axios';
const REACT_APP_URL = 'http://localhost:5000/';
import qs from 'querystring';

const login = dataSubmit => {
  return {
    type: 'LOGIN',
    payload: axios().post(`${REACT_APP_URL}books/auth/login`, dataSubmit),
  };
};

export {login};
