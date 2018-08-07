import React, { Fragment } from 'react'
// import store from './redux/store'
import {Input, Button, List} from 'antd'
import {connect} from 'react-redux'
import {changeInputValue, addTodoItem, deleteTodoItem} from './redux/actions'

const Todo = props => {
  const {list, inputValue, changeValue, addItem, deleteItem} = props

  return (
    <Fragment>
      <h1>TodoList</h1>
      <Input
        style={{width: 300}}
        value={inputValue}
        onChange={changeValue}
      />
      <Button onClick={addItem}>add</Button>
      <List
        style={{width: 300}}
        bordered
        dataSource={list}
        renderItem={item => (<List.Item key={item.id}
          actions={[<a onClick={() => deleteItem(item.id)}>del</a>]}>{item.title}</List.Item>)}
      />
    </Fragment>
  )
}

const mapState = state => ({
  inputValue: state.inputValue,
  list: state.list
})
const mapDispatch = dispatch => ({
  changeValue(e) {
    // console.log(e.target.value)
    dispatch(changeInputValue(e.target.value))
  },
  addItem() {
    dispatch(addTodoItem())
  },
  deleteItem(id) {
    dispatch(deleteTodoItem(id))
  }
})

// list 本身是一个UI组件，当用connect后 把业务逻辑、状态相结合，最终得到容器组件
export default connect(mapState, mapDispatch)(Todo)
