import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '../reducers/reducers'
import reduxThunk from 'redux-thunk'

const initialState = {nodes: [{"id": "Cochepaille", "group": 1}, {"id": "Judge", "group": 1}], links: [{"source": "Cochepaille", "target": "Judge", "value": 2}]}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(reduxThunk))

export default createStore(rootReducer, initialState, middleware)