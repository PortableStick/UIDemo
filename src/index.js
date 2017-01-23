import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RootRouter from './RootRouter'
import store from './store/store'

window.onload = () => {
  render(
    <Provider store={store}>
      <RootRouter />
    </Provider>, document.getElementById('app'))
}