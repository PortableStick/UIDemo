import React from 'react'

export default props =>
<fieldset key={`props.id`}>
  <label  htmlFor={`${props.id}-textInput`}>
  Text label:
  </label>
  <input type="text"
      onChange={props.onChange}
      value={props.value}
      id={`${props.id}-textInput`}
      />
</fieldset>