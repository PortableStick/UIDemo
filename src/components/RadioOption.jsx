import React from 'react'

export default props =>
<fieldset key={`fieldfor-${props.index}-${props.value}`}>
  <label  htmlFor={`${props.index}-${props.value}`} key={`labelfor-${props.index}-${props.value}`}>
    {props.value}
  </label>
  <input type="radio"
      key={`inputfor-${props.index}-${props.value}`}
      name={props.index}
      checked={props.selectedOption === props.value}
      value={props.value}
      onChange={props.onChange}
      id={`${props.index}-${props.value}`}/>
</fieldset>