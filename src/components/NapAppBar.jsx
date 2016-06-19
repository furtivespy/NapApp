import React, {Component, PropTypes} from 'react'
import {AppBar} from 'material-ui'

export default class NapAppBar extends Component {
	render () {
		const { title, avatar, menuToggle } = this.props

		return (
			<AppBar 
						title={title}
						iconClassNameLeft="fa fa-bed" 
						iconElementRight={avatar} 
						onLeftIconButtonTouchTap={menuToggle}
						/>
			)
	}
}

NapAppBar.propTypes = {
	title: PropTypes.string.isRequired,
	avatar: PropTypes.node.isRequired,
	menuToggle: PropTypes.func.isRequired
}