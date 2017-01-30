import React, { Component } from 'react'
import store from '../store/store'
import Button from '../components/Button.jsx'
import DiscreteSlider from '../components/DiscreteSlider.jsx'
import NumberInput from '../components/NumberInput.jsx'
import RadioInput from '../components/RadioInput.jsx'
import SelectInput from '../components/SelectInput.jsx'
import TextInput from '../components/TextInput.jsx'
import * as Actions from '../actions/actions'

export default class ComponentSwitch extends Component {
  constructor(props) {
    super(props)
  }

  updateComponent(currentNodeIndex, currentComponentIndex, updatedValue) {
    const newItem = {...this.props.currentItem}
    newItem.componentList[currentComponentIndex].value = updatedValue
    store.dispatch(Actions.updateComponent(currentNodeIndex, newItem))
  }

  onButtonClick(index, event) {
    event.preventDefault()
    console.log("Button clicked!", event.target.value)
    this.updateComponent(this.props.currentNodeIndex, index, event.target.value)
  }

  onSliderMove(index, event) {
    console.log("Slider moved!", event.target.value)
    this.updateComponent(this.props.currentNodeIndex, index, event.target.value)
  }

  onSelectOption(index, event) {
    console.log("Option selected!", event.target.value)
    this.updateComponent(this.props.currentNodeIndex, index, event.target.value)
  }

  onRadioButton(index, event) {
    console.log("Radio button pressed!", event.target.value)
    this.updateComponent(this.props.currentNodeIndex, index, event.target.value)
  }

  onTextInput(index, event) {
    console.log("Text!", event.target.value)
    this.updateComponent(this.props.currentNodeIndex, index, event.target.value)
  }

  onNumberChange(index, event) {
    console.log("That's Numberwang!", event.target.value)
    this.updateComponent(this.props.currentNodeIndex, index, event.target.value)
  }

  render() {
    const components = this.props.currentItem.componentList.map((component, index) => {
      switch(component.type) {
        case "BUTTON":
          return(<Button key={`${component.id}-${index}`} onClick={this.onButtonClick.bind(this, index)} {...component}/>)
        case "DISCRETE_SLIDER":
          return(<DiscreteSlider key={`${component.id}-${index}`} onChange={this.onSliderMove.bind(this, index)} {...component} />)
        case "NUMBER_INPUT":
          return(<NumberInput key={`${component.id}-${index}`} onChange={this.onNumberChange.bind(this, index)} {...component} />)
        case "RADIO_INPUT":
          return(<RadioInput key={`${component.id}-${index}`}  onChange={this.onRadioButton.bind(this, index)} {...component} />)
        case "SELECT_INPUT":
          return(<SelectInput key={`${component.id}-${index}`} onChange={this.onSelectOption.bind(this, index)} {...component} />)
        case "TEXT_INPUT":
          return(<TextInput key={`${component.id}-${index}`} onChange={this.onTextInput.bind(this, index)} {...component} />)
        default:
          return(<div key={`missing-${index}`}>{`Component type ${component.type || 'null'} not recognized`}</div>)
      }
    })
    return(
      <div>
        {components}
      </div>
    )
  }
}