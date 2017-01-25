import React from 'react'

export default props =>
<fieldset key={props.id}>
  <label for={`${props.id}-discreteSliderInput`}>
    Discrete input label
  </label>
  <input type="range"
        id={`${props.id}-discreteSliderInput`}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step || 1}/>
</fieldset>