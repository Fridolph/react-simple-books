import React, {Component} from 'react'
import store from './redux/store'
import TodoListUI from './TodoListUI'
import {addTodoItem, deleteTodoItem, changeInputValue, getTodoList} from './redux/actions'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleInputChange = e => {
    let value = e.target.value
    store.dispatch(changeInputValue(value))
  }

  handleAddItem = () => {
    let inputValue = this.state.inputValue
    if (inputValue.trim() !== '') {
      store.dispatch(addTodoItem(inputValue))
    }
  }

  handleDeleteItem = id => {
    store.dispatch(deleteTodoItem(id))
  }

  render() {
    const {inputValue, list} = this.state
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        inputChange={this.handleInputChange}
        addItem={this.handleAddItem}
        deleteItem={this.handleDeleteItem}
      />
    )
  }

  componentDidMount() {
    // GET('http://mock.fridolph.wang/mock/5ae3e47ac8dc037042fbd451/example/test').then(res => {
    //   const data = res.data
    //   // console.log(data.list)
    //   store.dispatch(initTodoList(data.list))
    // })
    // const action = getTodoList()
    // console.log(action)
    store.dispatch(getTodoList())
  }
}
