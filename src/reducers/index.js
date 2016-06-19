import { combineReducers } from 'redux'
import appbar from './appbar.js'
import user from './user.js'

const rootReducer = combineReducers({
	appbar,
	user
})

export default rootReducer