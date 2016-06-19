import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { loginClick } from '../actions'

class LoginContainer extends Component {
	render(){
		return(<Login loginClick={() => this.props.loginClick()} />)
	}
}

export default connect(null, { loginClick })(LoginContainer)