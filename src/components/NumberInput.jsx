import React from 'react'

export default props =>
<fieldset key={props.id}>
  <label  htmlFor={`${props.id}-numberInput`}>
    Number label:
  </label>
  <input type="number"
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        value={props.value}
        id={`${props.id}-numberInput`}
        />
</fieldset>