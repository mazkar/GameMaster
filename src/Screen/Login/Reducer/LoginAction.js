export const postLogin = payload => {
  return {
    type: 'POST_LOGIN',
    payload,
  };
};

export const setTokenToLoginReducer = payload => {
  return {
    type: 'SET_TOKEN_TO_LOGIN_REDUCER',
    payload,
  };
};
