import React, { PropTypes } from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick
    this.completed = props.completed
    this.text = props.text
  }

  render() {
    const onClick = event => this.onClick(event)
    const style = { textDecoration: this.completed ? 'line-through' : 'none' }
    return (
      <li onClick={onClick} style={style}>
        {this.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
