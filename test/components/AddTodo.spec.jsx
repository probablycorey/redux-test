import expect from 'expect'
import AddTodo from '../../containers/AddTodo.jsx'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { createStore } from 'redux'
import todoApp from '../../reducers'


describe('AddTodo', () => {
  it('renders', () => {
    let store = createStore(todoApp)
    let renderer = ReactTestUtils.createRenderer()
    renderer.render(<AddTodo store={store}/>)

    let result = renderer.getRenderOutput()
    expect(result).toExist()
  })
})
