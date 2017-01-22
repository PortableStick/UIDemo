import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions'
import store from '../store/store'
import MainForceGraph from './MainForceGraph.jsx'

const myServer = 'ws://localhost:9000'
const mattsServer = 'ws://localhost:8009'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let ws = new WebSocket(myServer)
    ws.onmessage = data => {
      console.log(data)
      const newState = JSON.parse(data.data)
      store.dispatch(Actions.receiveState(newState))
    }
  }

  render() {
    return(<MainForceGraph width={1600} height={1200}/>)
  }
}

export default App