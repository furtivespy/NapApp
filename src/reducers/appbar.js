import {GET_HELP, TOGGLE_MENU} from '../constants/actionTypes'

const initialState = {
	showMainMenu: false,
	showUserMenu: false,
	showHelp: false
}

export default function appbar(state = initialState, action) {
	switch (action.type) {
		case GET_HELP:
			return Object.assign({}, state, {
				showHelp: true
			})
		case TOGGLE_MENU:
			if (action.menuName = 'MAIN') {
				return Object.assign({}, state, {
					showMainMenu: !state.showMainMenu
				})
			} else {
				return Object.assign({}, state, {
					showUserMenu: !state.showUserMenu
				})
			}
		default:
			return initialState
	}
}