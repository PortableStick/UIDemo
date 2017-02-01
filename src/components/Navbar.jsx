import React from 'react'
import { Link } from 'react-router'
import '../scss/navbar.scss'

export default props =>
<nav className="navbar">
  {
    window.location.pathname.match(/component/g) ? <Link to="/" className="home-link">Back to map</Link> : null
  }
  {
    window.location.pathname.match(/component/g) ? null : <button type="button" onClick={props.getNewData}>Get new data</button>
  }
  <h1 className="title">Super fun graph UI thingy</h1>
</nav>