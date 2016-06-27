import React from 'react';
import {Avatar, IconMenu, MenuItem, IconButton} from 'material-ui';

const NapAvatar = props => (
		<IconMenu	
			iconButtonElement={<Avatar src={props.avatarPhoto} />}
			anchorOrigin={{horizontal: 'right', vertical: 'center'}}
      		targetOrigin={{horizontal: 'right', vertical: 'top'}} 
      		onRequestChange={props.avatarMenuClick}
      		open={props.open}> 
  				<MenuItem primaryText="Help" onTouchTap={props.helpClick} />
  				<MenuItem primaryText="Sign out" onTouchTap={props.logoutClick} />
  		</IconMenu> 
	)

export default NapAvatar