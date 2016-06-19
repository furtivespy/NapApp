// import Actions from '../actions';
// import {decorate, bind, datasource} from 'alt-utils/lib/decorators';

// @decorate(alt)
// class NapStore {
// 	constructor(){
// 		this.state = {
// 			user: null,
// 			menuOpen: false
// 		};
// 	}

// 	@bind(Actions.login)
// 	login(user){
// 		this.setState({user: user});
// 	}

// 	@bind(Actions.menuToggle)
// 	menuToggle(){
// 		if (this.state.user){
// 			this.setState({menuOpen: !this.state.menuOpen});
// 		}
// 	}

// 	@bind(Actions.menuClose)
// 	menuClose(){this.setState({menuOpen: false});}
// }

// export default alt.createStore(NapStore);