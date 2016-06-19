import Firebase from 'firebase'
import * as types from '../constants/actionTypes'

export function toggleMenu(menuName){
	return {
		type: types.TOGGLE_MENU,
		menuName
	}
}

export function helpClick() {
	return {
		type: types.GET_HELP
	}
} 

export function loginClick() {
	return dispatch => {
		dispatch({ type: types.LOGIN_BEGIN })
		return firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).then( results =>
			dispatch({ 
				type: types.LOGIN_COMPLETE,
				user: results.user
			})
		).catch(error =>
			dispatch({
				type: types.LOGIN_ERROR,
				error
			})
		)
	} 
}
/*

class Actions {
	constructor(){
		this.generateActions(
			'menuToggle',
			'menuClose'
		);
	}
	login(args){
		return (dispatch) => {
			Firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((result)=> {
				dispatch(result.user);
			});
		}
	}
}

export default alt.createActions(Actions);
*/