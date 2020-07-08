const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  genreData: [],
  pageInfo: [],
};

const genreReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GETGENRE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GETGENRE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case 'GETGENRE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        genreData: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default genreReducers;
