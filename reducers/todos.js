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
      return Object.assign({}, todo, {
        completed: !todo.completed
      })
    case 'START_TODO':
      return Object.assign({}, todo, {
        timeRemaining: 0,
        completed: true
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
    case 'START_TODO':
      return todos.map((t) => {
        return t.id === action.id ? todo(t, action) : t
      })
    default:
      return todos || []
  }
}

export default todos
