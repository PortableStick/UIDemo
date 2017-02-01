import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import ComponentSwitch from '../switches/ComponentSwitch.jsx'
import '../scss/component.scss'

function NodeDetails(props) {
  const currentItem = props.nodes[props.params.index]
  return(
  <form key={`Empty-Component`} className="component-form">
    <ComponentSwitch currentItem={currentItem} currentNodeIndex={props.params.index}/>
  </form>
  )
}

const mapStateToProps = state => ({ nodes: [...state.nodes] })

export default connect(mapStateToProps)(NodeDetails)