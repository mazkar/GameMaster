const initialState = {
  username: '',
  password: '',
  access_token: '',
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN_TO_LOGIN_REDUCER':
      return {
        ...state,
        access_token: action.payload,
      };

    default:
      return state;
  }
};
