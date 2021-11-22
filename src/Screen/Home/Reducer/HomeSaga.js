import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest, select, takeEvery} from 'redux-saga/effects';
import {navigate} from './../../../Utils/Navigation';
import {baseUrl, apiKey} from '../../../utils/url';

//action
import {
  getAllGame,
  getGenre,
  setAllGame,
  setGameByGenre,
  setGenre,
} from './HomeAction';
import {setLoading} from './../../../Store/GlobalAction';

function* sagaGetGenre(action) {
  try {
    yield put(setLoading(true));
    const res = yield axios.get(`${baseUrl}/genres`, {
      params: {key: `631e5446f52944b5a6dd4453c6f6a4b5`},
    });
    console.log(res, 'result get genre');
    yield put(setGenre(res.data.results));
  } catch (error) {
    console.log(error, 'error get genre');
  } finally {
    yield put(setLoading(false));
  }
}

function* sagaGetAllGame(action) {
  page = yield select(state => state.HomeReducer.page);
  try {
    yield put(setLoading(true));

    const res = yield axios.get(`${baseUrl}/games`, {
      params: {
        page_size: page,
        key: `631e5446f52944b5a6dd4453c6f6a4b5`,
      },
    });
    console.log(res, 'result get all movie');
    yield put(setAllGame(res.data.results));
  } catch (error) {
    console.log(error, 'error get all movie');
  } finally {
    yield put(setLoading(false));
  }
}

function* sagaGetGameByGenre(action) {
  genreName = yield select(state => state.HomeReducer.genres);
  try {
    yield put(setLoading(true));

    const res = yield axios.get(`${baseUrl}/games`, {
      params: {
        page_size: 6,
        genres: genreName.toLowerCase(),
        key: `631e5446f52944b5a6dd4453c6f6a4b5`,
      },
    });
    console.log(res, 'result get game genre movie');
    yield put(setGameByGenre(res.data.results));
  } catch (error) {
    console.log(error, 'error get all movie');
  } finally {
    yield put(setLoading(false));
  }
}

export function* SagaHomeWorker() {
  yield takeLatest('GET_GENRE', sagaGetGenre);
  yield takeLatest('GET_ALL_GAME', sagaGetAllGame);
  yield takeLatest('GET_GAME_BY_GENRE', sagaGetGameByGenre);
}
