import React from 'react'

export default props =>
<fieldset key={props.id}>
  <label  htmlFor={`${props.id}-discreteSliderInput`}>
    {props.text}
  </label>
  <input type="range"
        id={`${props.id}-discreteSliderInput`}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step || 1}
        onChange={props.onChange}/>
</fieldset>