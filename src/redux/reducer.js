const defaultState = {
  inputValue: 'react',
  list: ['react', 'redux']
}

// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
    console.log(state, action)
      return {...state, inputValue: action.value}
    default:
      return state
  }
}
