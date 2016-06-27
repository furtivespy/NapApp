import { combineReducers } from 'redux'
import appbar from './appbar.js'
import user from './user.js'
import napData from './napData.js'

const rootReducer = combineReducers({
	appbar,
	napData,
	user
})

export default rootReducer