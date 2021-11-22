export const postRegister = payload => {
  return {
    type: 'POST_REGISTER',
    payload,
  };
};

export const setSuccessRegister = payload => {
  return {
    type: 'REGISTER_SUCCESS',
    payload,
  };
};
