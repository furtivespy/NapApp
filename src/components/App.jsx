import React from 'react';
import Firebase from 'firebase';

//Components
import NapCardList from './NapCardList.jsx';
import Login from './Login.jsx';
import SideMenu from './SideMenu.jsx';
import {AppBar, Avatar} from 'material-ui';
import NapAvatar from './NapAvatar.jsx';
//Themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepPurple300, deepPurple500, cyan500} from 'material-ui/styles/colors';
//Actions
import injectTapEventPlugin from 'react-tap-event-plugin';
import connectToStores from 'alt-utils/lib/connectToStores';
import NapStore from '../stores/NapStore';
import Actions from '../actions';


var config = {
			    apiKey: "PRIVATE_KEY",
			    authDomain: "napapp-cfaef.firebaseapp.com",
			    databaseURL: "https://napapp-cfaef.firebaseio.com",
			    storageBucket: "napapp-cfaef.appspot.com",
			};
Firebase.initializeApp(config);

var muiTheme = getMuiTheme({
	palette: {
			primary1Color: deepPurple300,
			primary2Color: deepPurple500,
			accent1Color: cyan500
		}
});

@connectToStores
class App extends React.Component {
	constructor(){
		super();
		injectTapEventPlugin(); //Material UI dependancy -- http://stackoverflow.com/questions/37289942/material-ui-react-card-cannot-expand-with-expander
	}

	static getStores(){
		return [NapStore];
	}

	static getPropsFromStores(){
		return NapStore.getState();
	}

	render (){
		var view = <Login />;
		if (this.props.user){
			view = <NapCardList />;
		}
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar 
						title="Nap App!" 
						iconClassNameLeft="fa fa-bed" 
						iconElementRight={<NapAvatar user={this.props.user} />} 
						onLeftIconButtonTouchTap={Actions.menuToggle}
						/>
					<SideMenu menuOpen={this.props.menuOpen} />
					{view}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;