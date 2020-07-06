import axios from '../../helper/axios';
const REACT_APP_URL = 'https://rnlibrary.herokuapp.com/';

export const fetchBook = () => {
  const url = `${REACT_APP_URL}books`;
  return {
    type: 'GET',
    payload: axios().get(url),
  };
};
export const fetchGenre = () => {
  const url = `${REACT_APP_URL}books/genres`;
  return {
    type: 'GENRE',
    payload: axios().get(url),
  };
};
export const fetchAuthor = () => {
  const url = `${REACT_APP_URL}books/author`;
  return {
    type: 'AUTHOR',
    payload: axios().get(url),
  };
};