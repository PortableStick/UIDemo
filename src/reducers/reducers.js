import * as Actions from '../constants/actions'

function getLinks(node) {
    console.log("Node is", node)
    return {
        target: node.target,
        source: node.id
    }
}

function stateReducer(state, action) {
    switch (action.type) {
        case Actions.RECEIVE_STATE:
            return {...state, nodes: [...state.nodes, ...action.payload], links: [...state.links, ...action.payload.filter(node => node.target !== "").map(getLinks)] }
        case Actions.SET_WINDOW_SIZE:
            return {...state, windowSize: action.payload }
        case Actions.SHOW_TOOLTIP:
            return {...state, showTooltip: true }
        case Actions.HIDE_TOOLTIP:
            return {...state, showTooltip: false }
        case Actions.SET_TOOLTIP_DATA:
            return {...state, tooltipData: action.payload }
        case Actions.UPDATE_COMPONENT:
            const updatedNodeList = [...state.nodes.slice(0, action.payload.nodeIndex > 0 ? action.payload.nodeIndex : 0), action.payload.updatedNode, ...state.nodes.slice(action.payload.nodeIndex + 1)]
            return {...state, nodes: updatedNodeList }
        default:
            return state
    }
}

export default stateReducer