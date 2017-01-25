import React from 'react'

export default props =>
<fieldset key={props.id}>
  <button type={props.buttonType} onClick={props.onClick}>
    Button text
  </button>
</fieldset>