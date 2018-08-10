import * as types from './actionTypes'
import {GET} from '../../../utils/request'

const setTopicList = data => ({
  type: types.SET_TOPIC_LIST,
  data
})

const setArticleList = data => ({
  type: types.SET_ARTICLE_LIST,
  data
})

const setHot = data => ({
  type: types.SET_HOT,
  data
})

const setDownload = data => ({
  type: types.SET_DOWNLOAD,
  data
})

const setRecommend = data => ({
  type: types.SET_RECOMMEND,
  data
})

const setLoad = isLoad => ({
  type: types.SET_LOADING,
  isLoad
})

export const changeLoadmore = hasMore => ({
  type: types.CHANGE_LOAD_MORE,
  hasMore
})

export const changeRecommend = page => ({
  type: types.CHANGE_RECOMMEND,
  page
})

export const getArticleMore = page => ({
  type: types.GET_ARTICLE_MORE,
  page
})

export const showBackTop = is => ({
  type: types.SHOW_BACK_TOP,
  showScroll: is
})

// thunk
export const getTopicList = () => dispatch => {
  GET('/topicList.json').then(res => {
    // console.log('topicList.json', res)
    if (res.success) {
      dispatch(setTopicList(res.data))
    }
  }).catch(err => {
    console.error(err)
  })
}

export const getArticleList = () => dispatch => {
  GET('/articleList.json').then(res => {
    // console.log('articleList.json', res)
    if (res.success) {
      dispatch(setArticleList(res.data))
    }
  }).catch(err => {
    console.error(err)
  })
}

export const getHot = () => dispatch => {
  GET('/hot.json').then(res => {
    if (res.success) {
      dispatch(setHot(res.data))
    }
  }).catch(err => {
    console.error(err)
  })
}

export const getDownload = () => dispatch => {
  GET('/download.json').then(res => {
    if (res.success) {
      dispatch(setDownload(res.data))
    }
  }).catch(err => {
    console.error(err)
  })
}

export const getRecommend = () => dispatch => {
  GET('/recommend.json').then(res => {
    if (res.success) {
      dispatch(setRecommend(res.data))
    }
  }).catch(err => {
    console.error(err)
  })
}

export const getMoreArticleList = (artPage, artTotalPage) => dispatch => {
  dispatch(setLoad(true))
  // console.log(artPage, artTotalPage)
  setTimeout(() => {
    dispatch(getArticleMore(artPage))
    dispatch(setLoad(false))
  }, 700)
}
