import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.props = props
    this.state = {}
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.input.value.trim() === '') {
      return
    }
    this.props.dispatch(addTodo(this.input.value))
    this.input.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.onSubmit(event)}>
          <input ref={node => this.input = node} />
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
