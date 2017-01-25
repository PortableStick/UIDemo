import React from 'react'
import RadioOption from './RadioOption.jsx'

export default props =>
<fieldset key={props.id}>
  <label  htmlFor={`${props.id}-radioInput`}>
    Radio label:
  </label>
  {props.radioValues.map((value, index) => <RadioOption key={`option-${value.value}-${index}`} {...props} {...value} index={index} />)}
</fieldset>