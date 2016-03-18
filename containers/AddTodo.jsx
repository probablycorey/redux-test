import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props, ...args) {
    super(props)

    this.props = props
    this.state = {}
  }

  onSubmit(event) {
    let textInput = this.refs.todoText
    event.preventDefault()

    textInput.value.trim()
    if (textInput.value === '') {
      return
    }
    this.props.dispatch(addTodo(textInput.value))
    textInput.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.onSubmit(event)}>
          <input ref='todoText' />
          <button type='submit'>
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
