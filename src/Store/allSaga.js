import {all} from 'redux-saga/effects';
import {SagaLoginWorker} from '../Screen/Login/Reducer/LoginSaga';
import {SagaRegisterWorker} from '../Screen/Register/Redux/RegisterSaga';
import {SagaHomeWorker} from '../Screen/Home/Reducer/HomeSaga';

export function* allSaga() {
  yield all([SagaLoginWorker(), SagaRegisterWorker(), SagaHomeWorker()]);
}
