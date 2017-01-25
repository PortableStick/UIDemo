import React from 'react'

export default props =>
<fieldset key={props.id}>
  <button type={props.buttonType || 'button'} onClick={props.onClick}>
    {props.text}
  </button>
</fieldset>