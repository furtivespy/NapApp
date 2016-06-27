import {NAPS_REQUEST, NAPS_RECEIVED, NAP_RECEIVED, NAPS_ERROR, LOGOUT } from '../constants/actionTypes'

const initialState = {
	isLoading: true,
	errorMessage: "",
	napList: []
}

export default function napData(state = initialState, action) {
	switch (action.type) {
		case NAP_RECEIVED:
			if (state.napList[action.nap.key]){
				return Object.assign({}, state, { isLoading: false })
			}
			if (!action.nap) {
				return Object.assign({}, state, { isLoading: false })
			}
			let napVal = action.nap
			napVal.key = action.key
			return Object.assign({}, state, { 
				isLoading: false,
				napList: state.napList.concat(napVal)
				 })
		case NAPS_REQUEST:
			return Object.assign({}, state, { isLoading: true })
		case LOGOUT:
			return initialState
		default:
			return state
	}
}