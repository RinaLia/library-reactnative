const initialState = {
  book: [],
  author: [],
  genre: [],
  isLoading: true,
  pageInfo: '',
};

const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        books: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GENRE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GENRE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        genres: action.payload.data.data,
      };
    }
    case 'AUTHOR_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'AUTHOR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        author: action.payload.data.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default fetchData;
