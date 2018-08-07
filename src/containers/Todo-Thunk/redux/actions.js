import {GET} from '../../../utils/request'

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const INIT_TODO_LIST = 'INIT_TODO_LIST'

export const initTodoList = data => ({
  type: INIT_TODO_LIST,
  data
})

export const addTodoItem = inputValue => ({
  type: ADD_TODO_ITEM,
  inputValue
})

export const deleteTodoItem = id => ({
  type: DELETE_TODO_ITEM,
  id
})

export const changeInputValue = inputValue => ({
  type: CHANGE_INPUT_VALUE,
  inputValue
})

// thunk
export const getTodoList = () => dispatch => {
  GET('http://mock.fridolph.wang/mock/5ae3e47ac8dc037042fbd451/example/test').then(res => {
    const data = res.data
    console.log('data', data.list)
    const action =initTodoList(data.list)
    dispatch(action)
  })
}
