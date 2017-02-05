import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions'
import store from '../store/store'
import Tooltip from '../components/Tooltip.jsx'
import Navbar from '../components/Navbar.jsx'
import '../scss/main.scss'

const server = `${window.location.protocol === 'https' ? 'wss' : 'ws'}://${window.location.host}`
const devServer = `${window.location.protocol === 'https' ? 'wss' : 'ws'}://${window.location.host}:9000`

class App extends Component {
  constructor(props) {
    super(props)
  }

  resize() {
    store.dispatch(Actions.setWindowSize(window.innerWidth))
  }

  componentDidMount() {
    window.onresize = this.resize
    console.log(`Connecting to ${devServer}`)
    this.ws = new WebSocket('ws://localhost:9000')
    this.ws.onmessage = data => {
      console.log("New data received", data)
      const newState = JSON.parse(data.data)
      store.dispatch(Actions.receiveState(newState))
    }
  }

  getNewData() {
    this.ws.send('message')
  }

  render() {
    return(
      <div>
        <Navbar getNewData={this.getNewData.bind(this)}/>
        {this.props.children}
        <Tooltip show={this.props.showTooltip} data={this.props.tooltipData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ tooltipData: state.tooltipData, showTooltip: state.showTooltip})

export default connect(mapStateToProps)(App)