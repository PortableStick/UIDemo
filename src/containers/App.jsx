import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions'
import store from '../store/store'
import Tooltip from '../components/Tooltip.jsx'
import Navbar from '../components/Navbar.jsx'
import '../scss/main.scss'

const myServer = 'ws://localhost:9000'
const mattsServer = 'ws://localhost:8009'
const gomix = `wss://${window.location.host}`

class App extends Component {
  constructor(props) {
    super(props)
  }

  resize() {
    store.dispatch(Actions.setWindowSize(window.innerWidth))
  }

  componentDidMount() {
    window.onresize = this.resize
    this.ws = new WebSocket(gomix)
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