import * as Actions from '../constants/actions'

export const getState = () => ({ type: Actions.GET_STATE })
export const receiveState = state => ({ type: Actions.RECEIVE_STATE, payload: state })