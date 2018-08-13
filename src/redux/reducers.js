import {combineReducers} from 'redux'
import { HeaderReducer } from '../layouts/Header/redux'
import { HomeReducer } from '../pages/Home/redux'
import { DetailReducer } from '../pages/Detail/redux'

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer
})
