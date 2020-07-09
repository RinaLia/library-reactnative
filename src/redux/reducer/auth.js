const initialState = {
  isError: false,
  isLoading: false,
  errorMsg: '',
  token: null,
  dataLogin: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        token: action.payload.data.token,
        dataLogin: action.payload.data,
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        errorMsg: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
