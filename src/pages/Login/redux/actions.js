import {GET} from '../../../utils/request'
import * as types from './actionTypes'

export const changeLogin = value => ({
  type: types.CHANGE_LOGIN,
  value
})

// thunk
export const login = (account, pwd) => dispatch => {
  GET(`/login.json?account=${account}&password=${pwd}`).then(res => {
    if (res.success) {
      dispatch(changeLogin(res.data.isLogin))
    }
  }).catch(err => {
    console.error(err)
  })
}

export const logout = () => dispatch => {
  GET(`/logout.json`).then(res => {
    if (res.success) {
      dispatch(changeLogin(res.data.isLogin))
    }
  }).catch(err => {
    console.error(err)
  })
}
