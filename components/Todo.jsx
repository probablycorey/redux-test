import React, { PropTypes } from 'react'


const Todo = ({ onClick, completed, text, timeRemaining }) => {
  const style = { textDecoration: completed ? 'line-through' : 'none' }

  return (
    <li onClick={onClick} style={style}>
      {text} : {timeRemaining} mins
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  timeRemaining: PropTypes.number.isRequired
}

export default Todo
