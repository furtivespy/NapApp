import React, {Component, PropTypes} from 'react'
import {Dialog} from 'material-ui';

const HelpPage = props => (
	<Dialog
		title="Nap App Help"
		modal={false}
		open={props.showHelp}
		onRequestClose={props.helpClick}
		>
		I'm sorry, but I can't help you. :(
	</Dialog>
	)

export default HelpPage