import axios from '../../helper/axios';
const REACT_APP_URL = 'http://localhost:5000/';

const getBook = param => {
  const url = `${REACT_APP_URL}books?${param}`;
  return {
    type: 'GETBOOK',
    payload: axios().get(url),
  };
};

export {getBook};
