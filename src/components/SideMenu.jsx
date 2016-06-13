import React from 'react';
import {Drawer, MenuItem} from 'material-ui';
import Actions from '../actions';

class SideMenu extends React.Component{
	constructor(props){
		super(props);
	}

	
	render(){
		return( 
			<Drawer
				docked={false}
				open={this.props.menuOpen}
				onRequestChange={(menuOpen) => this.setState({menuOpen})}
				>
				<MenuItem onTouchTap={Actions.menuToggle}>Recent Naps</MenuItem>
				<MenuItem onTouchTap={Actions.menuToggle}>Nearby Naps</MenuItem>
				<MenuItem onTouchTap={Actions.menuToggle}>Record A Nap</MenuItem>
			</Drawer>);
	}
}

export default SideMenu;