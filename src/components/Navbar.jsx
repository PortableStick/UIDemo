import React from 'react'
import { Link } from 'react-router'

export default props =>
<nav>
  {
    window.location.pathname.match(/component/g) ? <Link to="/">Back to map</Link> : null
  }
  <div>Super fun graph UI thingy</div>
</nav>