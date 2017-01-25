import React from 'react'
import RadioOption from './RadioOption.jsx'

export default props =>
<fieldset key={props.id}>
  <label for={`${props.id}-radioInput`}>
    Radio label:
  </label>
  {props.radioValues.map((value, idx) => <RadioOption {...props} value={value} idx={idx} />)}
</fieldset>