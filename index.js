import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/App'
import todoApp from './reducers'
import { remoteState, remoteMiddleware} from './middleware/remote_store'

const middleware = applyMiddleware(remoteMiddleware)
const store = createStore(todoApp, remoteState(), middleware)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
