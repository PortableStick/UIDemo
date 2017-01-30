import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App.jsx'
import MainForceGraph from './containers/MainForceGraph.jsx'
import NodeDetails from './components/NodeDetails.jsx'

export default props =>
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={MainForceGraph} />
    <Route path="component/:index" component={NodeDetails} />
  </Route>
</Router>