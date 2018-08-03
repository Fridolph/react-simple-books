import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class TodoItem extends Component {
  handleClick = i => {
    console.log('clicked')
    this.props.deleteItem(i)
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={() => this.handleClick(this.props.index)}>-</button>
      </li>
    )
  }
}

TodoItem.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number
}

export default TodoItem
