import axios from '../../helper/axios';
const REACT_APP_URL = 'http://localhost:5000/';

const getGenre = param => {
  const url = `${REACT_APP_URL}books/genres?${param}`;
  return {
    type: 'GETGENRE',
    payload: axios().get(url),
  };
};
export {getGenre};
