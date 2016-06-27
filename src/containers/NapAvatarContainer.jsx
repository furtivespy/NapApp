import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {Avatar} from 'material-ui'
import NapAvatar from '../components/NapAvatar.jsx'
import {helpClick, logoutClick, toggleMenu } from '../actions'

class NapAvatarContainer extends Component {
	render(){
		const { user, appbar } = this.props

		if (user.isAnonymous === undefined || user.isAnonymous == true){
			return(<Avatar />)
		}
		else {
			return(
				<NapAvatar 
					avatarPhoto={user.photoURL}
					helpClick={() => this.props.helpClick()}
					logoutClick={() => this.props.logoutClick()} 
					avatarMenuClick={() => this.props.toggleMenu('AVATAR_MENU')}
					open={appbar.showUserMenu} />
			)
		}
	}
}

const mapStateToProps = (state) => {
	const {user, appbar} = state
	return {
		user, 
		appbar
	}
}

export default connect(
	mapStateToProps,
	{ helpClick, logoutClick, toggleMenu}
)(NapAvatarContainer)