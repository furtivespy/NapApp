import {GET_HELP, TOGGLE_MENU, LOGIN_ERROR, NAPS_ERROR, ACK_ERROR} from '../constants/actionTypes'

const initialState = {
	showMainMenu: false,
	showUserMenu: false,
	showHelp: false,
	showError: false,
	errorMessage: ""
}

export default function appbar(state = initialState, action) {
	switch (action.type) {
		case GET_HELP:
			return Object.assign({}, state, {
				showHelp: !state.showHelp
			})
		case TOGGLE_MENU:
			if (action.menuName == 'MAIN') {
				return Object.assign({}, state, {
					showMainMenu: !state.showMainMenu
				})
			} else {
				return Object.assign({}, state, {
					showUserMenu: !state.showUserMenu
				})
			}
		case NAPS_ERROR:
		case LOGIN_ERROR:
			return Object.assign({}, state, {
				showError: true,
				errorMessage: action.error.message
			})
		case ACK_ERROR:
			return Object.assign({}, state, {
				showError: false
			})
		default:
			return state
	}
}