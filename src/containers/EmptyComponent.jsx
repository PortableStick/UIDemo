import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'

class EmptyComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(<div>
      <h1>Component name: {this.props[this.props.params.index].id}</h1>
    </div>)
  }
}

const mapStateToProps = state => ({ ...state.nodes })

export default connect(mapStateToProps)(EmptyComponent)