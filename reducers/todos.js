const todo = (todo, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        timeRemaining: action.timeRemaining,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (todo.id !== action.id) {
        return todo
      }

      return Object.assign({}, todo, {
        completed: !todo.completed
      })
    default:
      return todo
  }
}

const todos = (todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return todos.map(t => todo(t, action) )
    default:
      return todos || []
  }
}

export default todos
