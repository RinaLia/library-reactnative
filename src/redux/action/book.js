import axios from 'axios';

export const getBook = param => {
  return {
    type: 'GET_BOOK',
    payload: axios.get('http://192.168.0.167:5000/books'),
  };
};
