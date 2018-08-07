import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actions'

const initialState = {
  inputValue: 'hi',
  list: [
    {
      id: 0,
      title: 'react'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {...state, inputValue: action.inputValue}

    case ADD_TODO_ITEM:
      let newList = {...state}.list
      newList.push({
        id: newList.length,
        title: state.inputValue
      })
      return {...state, list: newList, inputValue: ''}

    case DELETE_TODO_ITEM:
      let list = {...state}.list
      let rList = list.filter(item => item.id !== action.id)
      return {...state, list: rList}

    default:
      return state
  }
}
