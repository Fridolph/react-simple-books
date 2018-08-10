import {GET} from '../../../utils/request'
import * as types from './actionTypes'

const setSearchList = list => ({
  type: types.SET_SEARCH_LIST,
  list,
  totalPage: Math.ceil(list.length / 10)
})

export const handleInputFocus = () => ({
  type: types.HANDLE_INPUT_FOCUS
})

export const handleInputBlur = () => ({
  type: types.HANDLE_INPUT_BLUR
})

export const mouseEnterSearch = () => ({
  type: types.MOUSE_ENTER_SEARCH
})

export const mouseLeaveSearch = () => ({
  type: types.MOUSE_LEAVE_SEARCH
})

export const handleChangePage = currentPage => ({
  type: types.HANDLE_CHANGE_PAGE,
  page: currentPage
})

// thunk
export const getSearchList = () => dispatch => {
  GET('/searchList.json').then(res => {
    if (res.success) {
      // console.log('getSearchList', res)
      dispatch(setSearchList(res.data))
    }
  }).catch(err => {
    console.error(err)
  })
}
