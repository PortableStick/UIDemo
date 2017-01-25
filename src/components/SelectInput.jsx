import React from 'react'

export default props =>
<fieldset key={props.id}>
  <label  htmlFor={`${props.id}-selectInput`}>
    Select label:
  </label>
  <select id={`${props.id}-selectInput`}
          onChange={props.onChange}>
          {props.selectOptions.map((option, index) => <option key={`selectOption-${option}-${index}`} value={option}>{option}</option>)}
  </select>
</fieldset>