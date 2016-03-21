import React, { PropTypes } from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    Object.assign(this, props)
  }

  render() {
    const onClick = event => this.onClick(event)
    const style = { textDecoration: this.completed ? 'line-through' : 'none' }
    return (
      <li onClick={onClick} style={style}>
        {this.text} : {this.timeRemaining} mins
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  timeRemaining: PropTypes.number.isRequired
}

export default Todo
