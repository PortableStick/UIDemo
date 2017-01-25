import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import ComponentSwitch from '../switches/ComponentSwitch.jsx'

class EmptyComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const currentItem = this.props[this.props.params.index]
    const { id } = currentItem
    return(
    <div>
      <h1>Component name: { id }</h1>
      <ComponentSwitch currentItem={currentItem} />
    </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.nodes })

export default connect(mapStateToProps)(EmptyComponent)