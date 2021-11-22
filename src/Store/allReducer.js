import {combineReducers} from 'redux';
import {LoginReducer} from '../Screen/Login/Reducer/LoginReducer';
import {RegisterReducer} from '../Screen/Register/Redux/RegisterReducer';
import {HomeReducer} from '../Screen/Home/Reducer/HomeReducer';
import {GlobalReducer} from './GlobalReducer';

export const allReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  HomeReducer,
  GlobalReducer,
});
