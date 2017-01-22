import * as Actions from '../constants/actions'

function stateReducer(state, action) {
  switch(action.type) {
    case Actions.RECEIVE_STATE:
    console.log(typeof action.payload)
      return { ...state, nodes: action.payload.nodes, links: action.payload.links }
    default:
      return state
  }
}

export default stateReducer