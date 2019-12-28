import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App/App.jsx'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers/rootReducer'
import './global.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
