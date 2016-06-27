import React, {Component, PropTypes} from 'react'
import {Dialog} from 'material-ui';

const ErrorPage = props => (
	<Dialog
		title="There Has Been An Error!"
		modal={false}
		open={props.showError}
		onRequestClose={props.errorClick}
		>
		{props.children}
	</Dialog>
	)

export default ErrorPage