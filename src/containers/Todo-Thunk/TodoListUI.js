import React, {Fragment} from 'react'
import {Input, Button, List} from 'antd'

const TodoListUI = props => {
  const {inputValue, list} = props
  return (
    <Fragment>
      <h1>TodoList</h1>
      <Input value={inputValue} onChange={props.inputChange} style={{width: '300px'}}/>
      <Button type="primary" onClick={props.addItem}>add</Button>
      <List
        style={{marginTop: '10px', width: '360px'}}
        bordered
        dataSource={list}
        renderItem={item => (<List.Item key={item.id} actions={[<a onClick={() => props.deleteItem(item.id)}>del</a>]}>{item.title}</List.Item>)}
      />
    </Fragment>
  )
}

export default TodoListUI
