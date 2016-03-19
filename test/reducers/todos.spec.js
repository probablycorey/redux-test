import expect from 'expect'
import todos from '../../reducers/todos'

describe('todos reducer', () => {
  it('creates the initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('handles the ADD_TODO event', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        timeRemaining: 12,
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        timeRemaining: 12,
        id: 0
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          timeRemaining: 3,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux',
        timeRemaining: 1,
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        timeRemaining: 3,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        timeRemaining: 1,
        id: 1
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})
