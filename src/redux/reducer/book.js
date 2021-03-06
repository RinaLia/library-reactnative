const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  bookData: [],
  pageInfo: [],
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GETBOOK_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GETBOOK_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case 'GETBOOK_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        bookData: action.payload.data.data,
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

export default bookReducers;
