import React from 'react'

export default props =>
<div className={`tooltip ${props.show ? '' : 'hidden'}`}
    style={props.show ? {'top': props.data.y - 25, 'left': props.data.x + 25} : null }>
  { props.data ? props.data.id : null}
</div>