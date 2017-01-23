import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions'
import store from '../store/store'
import Tooltip from '../components/Tooltip.jsx'

const myServer = 'ws://localhost:9000'
const mattsServer = 'ws://localhost:8009'

class App extends Component {
  constructor(props) {
    super(props)
  }

  resize() {
    store.dispatch(Actions.setWindowSize(window.innerWidth))
  }

  componentDidMount() {
    window.onresize = this.resize
    let ws = new WebSocket(myServer)
    ws.onmessage = data => {
      const newState = JSON.parse(data.data)
      store.dispatch(Actions.receiveState(newState))
    }
  }

  render() {
    return(
      <div>
        {this.props.children}
        <Tooltip show={this.props.showTooltip} data={this.props.tooltipData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ tooltipData: state.tooltipData, showTooltip: state.showTooltip})

export default connect(mapStateToProps)(App)