import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import HelpPage from '../components/HelpPage'
import ErrorPage from '../components/ErrorPage'
import {helpClick, errorClick} from '../actions'

class DialogContainer extends Component{
	render(){return (
		<div>
			<HelpPage 
				showHelp={this.props.showHelp} 
				helpClick={() => this.props.helpClick()} />
			<ErrorPage
				showError={this.props.showError}
				errorClick={() => this.props.errorClick()} >
				<div>{this.props.errorMessage}</div>
			</ErrorPage>
		</div>
	)}
}

const mapStateToProps = (state) => {
	const {appbar} = state
	return {
		showHelp: appbar.showHelp,
		showError: appbar.showError,
		errorMessage: appbar.errorMessage
	}
}

export default connect(mapStateToProps, {helpClick, errorClick})(DialogContainer)