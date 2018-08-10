import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  INIT_TODO_LIST
} from './actions'

const initialState = {
  inputValue: '',
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_TODO_LIST:
      return {...state, list: action.data}
    case ADD_TODO_ITEM:
      let newList = {...state}.list
      newList.push({
        id: newList.length,
        title: action.inputValue
      })
      return {...state, list: newList, inputValue: ''}
    case DELETE_TODO_ITEM:
      let {list} = {...state}
      list = list.filter(item => item.id !== action.id)
      return {...state, list, inputValue: ''}
    case CHANGE_INPUT_VALUE:
      return {...state, inputValue: action.inputValue}
    default:
      return state
  }
}
