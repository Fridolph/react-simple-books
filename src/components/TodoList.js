import React, { Component, Fragment } from 'react'
import {GET} from '../utils/request'
import {Input, Button, List, Avatar} from 'antd'
import store from '../redux/store'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log('store.getState()', store.getState())
    // 当组件的props或state发生变化时，render函数就会执行
    this.state = store.getState()
  }


  handleInputChange = e => {
    let value = e.target.value
    // console.log('input change -> ', value)

    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value
    }
    store.dispatch(action)
    // this.setState(() => ({
    //   inputValue: value
    // }))
  }

  handleSubmit = e => {
    const inputValue = this.state.inputValue
    if (inputValue.trim() !== '') {
      this.setState((prevState) => ({
        inputValue: '',
        list: [...prevState.list, prevState.inputValue]
      }))
    }
  }

  deleteItem = (index) => {
    console.log(index)
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input value={this.state.inputValue} onChange={this.handleInputChange} style={{width: '200px', marginRight: '6px'}}/>
          <Button type="primary" onClick={this.handleSubmit}>添加</Button>
        </div>

        <List
          style={{width: '400px', marginTop: '10px'}}
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item}</a>}
                description="This is a list item ..."
              />
            </List.Item>
          )}
        />
      </Fragment>
    )
  }

  componentDidMount() {
    // GET('http://mock.fridolph.wang/mock/5ae3e47ac8dc037042fbd451/example/test').then(res => {
    //   if (res.code === 0) {
    //     this.setState(() => ({
    //       list: [...res.data.list]
    //     }))
    //   }
    // })
  }
}
