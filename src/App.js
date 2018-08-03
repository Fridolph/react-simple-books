import React, { Component } from 'react'
import TodoList from './components/TodoList'
import './style.less'
// import {CSSTransition} from 'react-transition-group'

class App extends Component {
  state = {
    toggle: true
  }

  handleToggle = () => {
    this.setState(() => ({
      toggle: !this.state.toggle
    }))
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoList />
      </div>
    )
  }
}

export default App;
