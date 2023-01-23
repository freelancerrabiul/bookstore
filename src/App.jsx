import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './app/store'
import Index from './routes'
const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App