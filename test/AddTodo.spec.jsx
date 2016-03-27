import expect from 'expect'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils'

import AddTodo from '../containers/AddTodo.jsx'
import todoApp from '../reducers'

describe('AddTodo', () => {
  let store
  let component

  beforeEach( () => {
    store = createStore(todoApp)
    const componentWrapper = TestUtils.renderIntoDocument(<AddTodo store={store}/>)
    component = componentWrapper.getWrappedInstance() // redux-react wraps the component
  })

  it('adds a task', () => {
    const element = ReactDOM.findDOMNode(component)
    const button = element.querySelector('button')
    expect(button).toExist()

    component.refs.text.value = 'wow'
    component.refs.timeRemaining.value = '2'
    TestUtils.Simulate.submit(button)

    const todos = store.getState().todos
    expect(todos.length).toEqual(1)
    expect(todos[0].text).toEqual('wow')
    expect(todos[0].timeRemaining).toEqual(2)
    expect(todos[0].completed).toEqual(false)
  })
})
