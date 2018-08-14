import * as types from './actionTypes'

const initialState = {
  isLogin: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN:
      return {...state, isLogin: action.value}
    default:
      return state
  }
}
