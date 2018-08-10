export const CHANGE_INPUT_VALUE = 'change_input_value'
export const ADD_TODO_ITEM = 'add_todo_item'
export const DELETE_TODO_ITEM = 'delete_todo_item'

export const addTodoItem = inputValue => ({
  type: ADD_TODO_ITEM
})

export const changeInputValue = inputValue => ({
  type: CHANGE_INPUT_VALUE,
  inputValue
})

export const deleteTodoItem = id => ({
  type: DELETE_TODO_ITEM,
  id
})
