import axios from 'axios';

export const getBook = param => {
  return {
    type: 'GET_BOOK',
    payload: axios.get(),
  };
};
