import alt from '../alt';
import Firebase from 'firebase'

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