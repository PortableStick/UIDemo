import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import ComponentSwitch from '../switches/ComponentSwitch.jsx'

class EmptyComponent extends Component {
  constructor(props) {
    super(props)
    this.currentItem = this.props[this.props.params.index]
  }

  onButtonClick(event) {
    console.log("Button clicked!", event.target.value)
  }

  onSliderMove(event) {
    console.log("Slider moved!", event.target.value)
  }

  onSelectOption(event) {
    console.log("Option selected!", event.target.value)
  }

  onRadioButton(event) {
    console.log("Radio button pressed!", event.target.value)
  }

  onTextInput(event) {
    console.log("Text!", event.target.value)
  }

  onNumberChange(event) {
    console.log("That's Numberwang!", event.target.value)
  }

  render() {
    return(
    <form key={`Emtpy-Component`}>
      <ComponentSwitch
        currentItem={this.currentItem}
        onButtonClick={this.onButtonClick.bind(this)}
        onSliderMove={this.onSliderMove.bind(this)}
        onSelectOption={this.onSelectOption.bind(this)}
        onRadioButton={this.onRadioButton.bind(this)}
        onTextInput={this.onTextInput.bind(this)}
        onNumberChange={this.onNumberChange.bind(this)}
        />
    </form>
    )
  }
}

const mapStateToProps = state => ({ ...state.nodes })

export default connect(mapStateToProps)(EmptyComponent)