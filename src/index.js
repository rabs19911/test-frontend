import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './components/App'
import store from './stores/stores'
import 'semantic-ui-css/semantic.min.css'
import './styles/main.scss'

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))
