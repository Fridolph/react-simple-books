import * as types from './actionTypes'

const initialState = {
  title: '标题',
  info: {
    name: '作者',
    publishTime: '1970-01-01 00:00:00',
    words: '0',
    readed: '0',
    comment: '0',
    like: '0',
    rewards: '0'
  },
  content: '暂无内容'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_DETAIL:
      return {
        ...state,
        title: action.detail.title,
        info: action.detail.info,
        content: action.detail.content
      }
    default:
      return state
  }
}
