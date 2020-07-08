import axios from '../../helper/axios';
const REACT_APP_URL = 'http://localhost:5000/';

const getAuthor = param => {
  const url = `${REACT_APP_URL}books/author?${param}`;
  return {
    type: 'GETAUTHOR',
    payload: axios().get(url),
  };
};

export {getAuthor};
