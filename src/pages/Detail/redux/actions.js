import {GET} from '../../../utils/request'
import * as types from './actionTypes'

export const changeDetail = detail => ({
  type: types.CHANGE_DETAIL,
  detail
})

// thunk
export const getDetail = id => dispatch => {
  GET(`/detail-${id}.json`).then(res => {
    console.log('detail-1', res)
    dispatch(changeDetail(res.data))
  }).catch(err => {
    console.error(err)
  })
}
