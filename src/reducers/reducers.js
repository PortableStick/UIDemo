import * as Actions from '../constants/actions'

function stateReducer(state, action) {
  switch(action.type) {
    case Actions.RECEIVE_STATE:
      return { ...state, nodes: action.payload.nodes, links: action.payload.links }
    case Actions.SET_WINDOW_SIZE:
      return { ...state, windowSize: action.payload }
    case Actions.SHOW_TOOLTIP:
      return { ...state, showTooltip: true }
    case Actions.HIDE_TOOLTIP:
      return { ...state, showTooltip: false }
    case Actions.SET_TOOLTIP_DATA:
      return { ...state, tooltipData: action.payload }
    default:
      return state
  }
}

export default stateReducer