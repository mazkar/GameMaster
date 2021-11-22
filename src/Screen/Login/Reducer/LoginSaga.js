import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../utils/nav';

//action
import {setTokenToLoginReducer} from './LoginAction';

function* sagaLogin(action) {
  try {
    const result = yield axios.post(
      'http://94.74.86.174:8080/login',
      action.payload,
    );
    console.log(result, 'result login');
    yield put(setTokenToLoginReducer(result.data.data.token));
    yield navigate('Home');
    if (result.status == 200) {
      ToastAndroid.showWithGravityAndOffset(
        'Registration Success,Please Login',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
    }
  } catch (error) {
    console.log(error, 'eroor login');
  }
}

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', sagaLogin);
}
