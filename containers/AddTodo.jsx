import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.props = props
    this.state = {}
  }

  componentDidMount() {
    this.refs.text.focus()
  }

  onSubmit(event) {
    event.preventDefault()

    let textInput = this.refs.text
    let timeRemaining = this.refs.timeRemaining

    textInput.value.trim()
    timeRemaining.value.trim()
    if (textInput.value === '' || timeRemaining.value === '') {
      return
    }

    const action = addTodo({
      text: textInput.value,
      timeRemaining: parseInt(timeRemaining.value)
    })

    this.props.dispatch(action)
    textInput.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.onSubmit(event)}>
          <input ref='text' placeholder='task' />
          <input ref='timeRemaining' defaultValue='20' />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}

// The `withRef` option is only needed for tests
AddTodo = connect(null, null, null, {withRef: true})(AddTodo)

export default AddTodo
