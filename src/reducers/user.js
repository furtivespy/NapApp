import {LOGIN_BEGIN, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT} from '../constants/actionTypes'

const initialState = {}

export default function user(state = initialState, action) {
	switch (action.type) {
		case LOGIN_COMPLETE:
			return action.user
		case LOGOUT:
		default:
			return initialState
	}
}