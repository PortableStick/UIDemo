import * as Actions from '../constants/actions'

export const getState = () => ({ type: Actions.GET_STATE })
export const receiveState = state => ({ type: Actions.RECEIVE_STATE, payload: state })
export const setWindowSize = size => ({ type: Actions.SET_WINDOW_SIZE, payload: size })
export const showTooltip = () => ({ type: Actions.SHOW_TOOLTIP })
export const hideTooltip = () => ({ type: Actions.HIDE_TOOLTIP })
export const setToolttipData = data => ({ type: Actions.SET_TOOLTIP_DATA, payload: data })