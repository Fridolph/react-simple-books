import {combineReducers} from 'redux'
import { HeaderReducer } from '../layouts/Header/redux'
import { HomeReducer } from '../pages/Home/redux'
import { LoginReducer } from '../pages/Login/redux'
import { DetailReducer } from '../pages/Detail/redux'

export default combineReducers({
  home: HomeReducer,
  login: LoginReducer,
  header: HeaderReducer,
  detail: DetailReducer
})
