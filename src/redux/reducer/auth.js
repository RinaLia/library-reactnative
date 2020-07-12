import {Alert} from 'react-native';

const initialState = {
  isError: false,
  isLoading: false,
  errorMsg: '',
  successMsg: '',
  token: null,
  dataLogin: [],
  isLogin: false,
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
      //console.log('token_rejected=>', action.payload.data);
      Alert.alert('Please check again!');

      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case 'LOGIN_FULFILLED': {
      console.log('token=>', action.payload.data);
      Alert.alert('Success');

      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        token: action.payload.data.data.token,

        dataLogin: action.payload.data,
      };
    }
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.data.message,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
        token: null,
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
