import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick, onStartClick }) => {
  const todoElements = todos.map(todo => {
    const onStart = (event) => onStartClick(todo.id)
    return <Todo key={todo.id} {...todo} onStart={onStart} />
  })

  return (
    <ul>{todoElements}</ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStartClick: PropTypes.func.isRequired
}

export default TodoList
