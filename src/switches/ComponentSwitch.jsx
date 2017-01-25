import React from 'react'
import Button from '../components/Button.jsx'
import DiscreteSlider from '../components/DiscreteSlider.jsx'
import NumberInput from '../components/NumberInput.jsx'
import RadioInput from '../components/RadioInput.jsx'
import SelectInput from '../components/SelectInput.jsx'
import TextInput from '../components/TextInput.jsx'
// List out needed proptypes and fill out with mock data
export default props => {
  const components = props.componentList.map((component, index) => {
    switch(component.type) {
      case "BUTTON":
        return(<Button/>)
      case "DISCRETE_SLIDER":
        return(<DiscreteSlider/>)
      case "NUMBER_INPUT":
        return(<NumberInput/>)
      case "RADIO_INPUT":
        return(<RadioInput/>)
      case "SELECT_INPUT":
        return(<SelectInput/>)
      case "TEXT_INPUT":
        return(<TextInput/>)
      default:
        return(<div>{`Component type ${component.type} not recognized`}</div>)
    }
  })
  return(
    <div>
      {components}
    </div>
  )
}