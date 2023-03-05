import React from 'react'
// eslint-disable-next-line n/file-extension-in-import
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import {store} from './store'

import App from './components/App'

import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root')!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
