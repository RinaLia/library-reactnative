const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  authorData: [],
  pageInfo: [],
};

const authorReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GETAUTHOR_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GETAUTHOR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case 'GETAUTHOR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        authorData: action.payload.data.data,
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

export default authorReducers;
