import {put, takeEvery} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actions'
import {initTodoList} from './actions'
import {GET} from '../../../utils/request'

function* getInitList() {
  try {
    const res = yield GET('http://mock.fridolph.wang/mock/5ae3e47ac8dc037042fbd451/example/test')
    console.log('getInitList', res)
    yield put(initTodoList(res.data.list))
  } catch (e) {
    console.error(e)
  }
}

// generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
