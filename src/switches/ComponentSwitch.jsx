import React from 'react'
import Button from '../components/Button.jsx'
import DiscreteSlider from '../components/DiscreteSlider.jsx'
import NumberInput from '../components/NumberInput.jsx'
import RadioInput from '../components/RadioInput.jsx'
import SelectInput from '../components/SelectInput.jsx'
import TextInput from '../components/TextInput.jsx'

export default props => {
  const components = props.currentItem.componentList.map((component, index) => {
    switch(component.type) {
      case "BUTTON":
        return(<Button key={`${component.id}-${index}`} onClick={props.onButtonClick} {...component}/>)
      case "DISCRETE_SLIDER":
        return(<DiscreteSlider key={`${component.id}-${index}`} onChange={props.onSliderMove} {...component} />)
      case "NUMBER_INPUT":
        return(<NumberInput key={`${component.id}-${index}`} onChange={props.onNumberChange} {...component} />)
      case "RADIO_INPUT":
        return(<RadioInput key={`${component.id}-${index}`}  onChange={props.onRadioButton} {...component} />)
      case "SELECT_INPUT":
        return(<SelectInput key={`${component.id}-${index}`} onChange={props.onSelectOption} {...component} />)
      case "TEXT_INPUT":
        return(<TextInput key={`${component.id}-${index}`} onChange={props.onTextInput} {...component} />)
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