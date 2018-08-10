import * as types from './actionTypes'

const initialState = {
  topicList: [],
  articleList: [],
  artPage: 1,
  artTotalPage: 1,
  hot: [],
  download: {},
  recommend: [],
  recommendPage: 1,
  recommendTotalPage: 1,
  isLoad: false,
  hasMore: true,
  showScroll: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOPIC_LIST:
      return {...state, topicList: action.data}

    case types.SET_ARTICLE_LIST:
      return {...state, articleList: action.data, artPage: 1, artTotalPage: action.data.length / 20}

    case types.SET_HOT:
      return {...state, hot: action.data}

    case types.SET_LOADING:
      return {...state, isLoad: action.isLoad}

    case types.SET_DOWNLOAD:
      return {...state, download: action.data}

    case types.SET_RECOMMEND:
      return {...state, recommend: action.data, recommendTotalPage: action.data.length / 5}

    case types.CHANGE_RECOMMEND:
      return {...state, recommendPage: action.page}

    case types.CHANGE_LOAD_MORE:
      return {...state, hasMore: action.hasMore}

    case types.GET_ARTICLE_MORE:
      return {...state, artPage: action.page}

    case types.SHOW_BACK_TOP:
      return {...state, showScroll: action.showScroll}

    default:
      return state
  }
}
