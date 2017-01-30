import React from 'react'

export default props =>
<fieldset key={`fieldfor-${props.index}-${props.label}`}>
  <label  htmlFor={`${props.index}-${props.label}`} key={`labelfor-${props.index}-${props.label}`}>
    {props.label}
  </label>
  <input type="radio"
      key={`inputfor-${props.index}-${props.label}`}
      name={props.index}
      checked={props.value === props.label}
      value={props.label}
      onChange={props.onChange}
      id={`${props.index}-${props.label}`}/>
</fieldset>
