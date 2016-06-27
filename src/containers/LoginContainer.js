import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { loginClick } from '../actions'

class LoginContainer extends Component {
	render(){
		return(<Login 
				twitterLogin={() => this.props.loginClick('TWITTER')} 
				facebookLogin={() => this.props.loginClick('FACEBOOK')} 
				googleLogin={() => this.props.loginClick('GOOGLE')} 
			/>)
	}
}

export default connect(null, { loginClick })(LoginContainer)