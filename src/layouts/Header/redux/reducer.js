import * as types from './actionTypes'

const initialState = {
  isFocus: false,
  isHover: false,
  searchList: [],
  totalPage: 1,
  page: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT_FOCUS:
      return {...state, isFocus: true}

    case types.HANDLE_INPUT_BLUR:
      return {...state, isFocus: false}

    case types.SET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.list,
        totalPage: action.totalPage
      }

    case types.MOUSE_ENTER_SEARCH:
      return {...state, isHover: true}

    case types.MOUSE_LEAVE_SEARCH:
      return {...state, isHover: false}

    case types.HANDLE_CHANGE_PAGE:
      return {...state, page: action.page}

    default:
      return state
  }
}
