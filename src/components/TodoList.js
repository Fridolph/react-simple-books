import React, {Component} from 'react'

export default class TodoList extends Component {
  state = {
    list: [
      'react', 'vue'
    ],
    inputText: 'hello'
  }

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleSubmit = e => {
    if (this.state.inputText.trim() !== '') {
      this.setState({
        inputText: '',
        list: [...this.state.list, this.state.inputText]
      })
    }
  }

  handleDelete = (index) => {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)

    this.setState({
      list
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>提交</button>

        <ul>
          {this.state.list.map((item, i) => (
            <li key={i}>{item} <button onClick={() => this.handleDelete(i)}>-</button></li>
          ))}
        </ul>
      </div>
    )
  }
}
