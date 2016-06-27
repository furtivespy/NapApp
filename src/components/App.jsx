import React from 'react'
import Firebase from 'firebase'
import { Provider } from 'react-redux'
//Components
import MainViewContainer from '../containers/MainViewContainer'
import SideMenu from './SideMenu.jsx'
import {AppBar, Avatar} from 'material-ui'
import NapAvatarContainer from '../containers/NapAvatarContainer.jsx'
import NapAppBar from './NapAppBar.jsx'
//Themes
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepPurple300, deepPurple500, cyan500} from 'material-ui/styles/colors'
//Actions
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from '../stores/configureStore'


var config = {
			    apiKey: "AIzaSyD1WQzyOkvWKkkweP_3sjR6OwUO9R9PIAQ",
			    authDomain:"napapp-cfaef.firebaseapp.com",
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

class App extends React.Component {
	constructor(props){
		super(props);
		injectTapEventPlugin(); //Material UI dependancy -- http://stackoverflow.com/questions/37289942/material-ui-react-card-cannot-expand-with-expander
	}

	render (){
		
		//<SideMenu menuOpen={this.props.menuOpen} />
		return (
			<Provider store={configureStore()} >
				<MuiThemeProvider muiTheme={muiTheme}>
					<div>
						<NapAppBar
							title="Nap App!"
							avatar={<NapAvatarContainer />}
							menuToggle={() => {}} />
						<MainViewContainer />
					</div>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;