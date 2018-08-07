import React, { Component } from 'react'
// import TodoList from './components/TodoList'
import './style.less'
// import TodoList from './containers/TodoList'
import Todo from './containers/Todo'
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
        {/* <h1>TodoList</h1> */}
        <Todo />
      </div>
    )
  }
}

export default App;
