import React, { PropTypes } from 'react'


const Todo = ({ onStart, completed, text, timeRemaining }) => {
  const style = { textDecoration: completed ? 'line-through' : 'none' }

  return (
    <li style={style}>
      <button onClick={onStart} className="start">start</button>
      {text} : {timeRemaining} mins
    </li>
  )
}

Todo.propTypes = {
  onStart: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  timeRemaining: PropTypes.number.isRequired
}

export default Todo
