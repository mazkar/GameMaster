export const getAllGame = payload => {
  return {
    type: 'GET_ALL_GAME',
    payload,
  };
};

export const setAllGame = payload => {
  return {
    type: 'SET_ALL_GAME',
    payload,
  };
};

export const getId = payload => {
  return {
    type: 'GET_ID',
    payload,
  };
};

export const getGameDetail = payload => {
  return {
    type: 'GET_GAME_DETAIL',
    payload,
  };
};

export const setGameDetail = payload => {
  return {
    type: 'SET_GAME_DETAIL',
    payload,
  };
};

export const getGenre = payload => {
  return {
    type: 'GET_GENRE',
    payload,
  };
};

export const setGenre = payload => {
  return {
    type: 'SET_GENRE',
    payload,
  };
};

export const getGameByGenre = payload => {
  return {
    type: 'GET_GAME_BY_GENRE',
    payload,
  };
};

export const setGameByGenre = payload => {
  return {
    type: 'SET_GAME_BY_GENRE',
    payload,
  };
};

export const setGenresName = payload => {
  return {
    type: 'SET_GENRES_NAME',
    payload,
  };
};

export const setPage = payload => {
  return {
    type: 'SET_PAGE',
    payload,
  };
};

export const setPageDefault = payload => {
  return {
    type: 'SET_PAGE_DEFAULT',
    payload,
  };
};

export const setId = payload => {
  return {
    type: 'SET_ID',
    payload,
  };
};
