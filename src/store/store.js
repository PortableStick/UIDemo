import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '../reducers/reducers'
import reduxThunk from 'redux-thunk'

const initialState = { nodes: [], links: [], windowSize: window.innerWidth, tooltipData: {}, showTooltip: false }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(reduxThunk))

export default createStore(rootReducer, initialState, middleware)