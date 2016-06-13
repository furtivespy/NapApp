import React from 'react';
import {Avatar, IconMenu, MenuItem, IconButton} from 'material-ui';

class NapAvatar extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		var avt = <Avatar />
		if (this.props.user){
			avt = <IconMenu	
					iconButtonElement={<Avatar src={this.props.user.photoURL} />}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	      			targetOrigin={{horizontal: 'right', vertical: 'top'}}
      			>
      				<MenuItem primaryText="Help" />
      				<MenuItem primaryText="Sign out" />
      			 </IconMenu>
		} 
		return(avt);
	}
}

export default NapAvatar