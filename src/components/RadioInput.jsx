import React from 'react'
import RadioOption from './RadioOption.jsx'

export default props =>
<fieldset key={props.id}>
  <label  htmlFor={`${props.id}-radioInput`}>
    Radio label:
  </label>
  {props.radioOptions.map((option, index) => <RadioOption key={`option-${option.label}-${index}`} {...props} {...option} index={index} />)}
</fieldset>