import Firebase from 'firebase'
import * as types from '../constants/actionTypes'
import _ from 'lodash';

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

export function errorClick() {
	return {
		type: types.ACK_ERROR
	}
} 

export function logoutClick() {
	const dbRef = Firebase.database().ref("naphistory")
	dbRef.off()
	return {
		type: types.LOGOUT
	}
}

export function loginClick(provider) {
	return dispatch =>  {
		dispatch({ type: types.LOGIN_BEGIN })
		let authProvider
		switch (provider) {
			case 'TWITTER':
			authProvider = new firebase.auth.TwitterAuthProvider()
			break
			case 'FACEBOOK':
			authProvider = new firebase.auth.FacebookAuthProvider()
			break
			case 'GOOGLE':
			authProvider = new firebase.auth.GoogleAuthProvider()
			break
		}

		firebase.auth().signInWithPopup(authProvider).then( results =>
			dispatch({ 
				type: types.LOGIN_COMPLETE,
				user: results.user
			})
		).then( () => ConnectToFirebase(dispatch)
		).catch(error =>
			dispatch({
				type: types.LOGIN_ERROR,
				error
			})
		)
	}
}

function ConnectToFirebase(dispatch) {
	//return dispatch => {
		const dbRef = Firebase.database().ref("naphistory")
		return dbRef.on("child_added", (nap) => {
			if(nap.key){
				dispatch({
					type: types.NAP_RECEIVED,
					key: nap.key,
					nap: nap.val()
				})
			}
		})
	//}
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