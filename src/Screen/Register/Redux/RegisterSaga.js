import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {navigate} from './../../../utils/nav';

import {setSuccessRegister} from './RegisterAction';

import {ToastAndroid} from 'react-native';

function* sagaRegister(action) {
  try {
    const result = yield axios.post(
      'http://94.74.86.174:8080/register',
      action.payload,
    );
    console.log(result, 'result register');
    if (result.status === 200) {
      yield put(setSuccessRegister());
      yield navigate('Login');
      ToastAndroid.showWithGravityAndOffset(
        'Registration Success,Please Login',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
    }
  } catch (error) {
    console.log(error, 'error register');
    ToastAndroid.showWithGravityAndOffset(
      'Registration failed',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
  }
}

export function* SagaRegisterWorker() {
  yield takeLatest('POST_REGISTER', sagaRegister);
}
