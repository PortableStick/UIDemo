import React from 'react'

export default props =>
<fieldset key={props.id}>
  <label for={`${props.id}-selectInput`}>
    Select label:
  </label>
  <select id={`${props.id}-selectInput`}
          onChange={props.onChange}>
          {props.options.map(option => <option value={option}>{option}</option>)}
  </select>
</fieldset>