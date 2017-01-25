import React from 'react'

export default props =>
<fieldset>
  <label for={`${props.id}-${props.value}`}>
    Radio input text
  </label>
  <input type="radio"
      name={prop.id}
      checked={props.selectedOption === props.value}
      value={value}
      onChange={props.onChange}
      id={`${props.id}-${props.value}`}/>
</fieldset>