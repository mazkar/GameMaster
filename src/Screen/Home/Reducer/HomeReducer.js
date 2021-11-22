const initialState = {
  allGames: [{}],
  gameByGenre: [{}],
  gameDetail: [{}],
  genre: [{}],
  id: '',
  genres: '',
  page: 10,
  isError: false,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_GAME':
      return {
        ...state,
        allGames: action.payload,
      };
    case 'GET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_GAME_DETAIL':
      return {
        ...state,
        gameDetail: action.payload,
      };
    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload,
      };
    case 'SET_GAME_BY_GENRE':
      return {
        ...state,
        gameByGenre: action.payload,
      };
    case 'SET_GENRES_NAME':
      return {
        ...state,
        genres: action.payload,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: page + action.payload,
      };
    case 'SET_PAGE_DEFAULT':
      return {
        ...state,
        page: 10,
      };
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
