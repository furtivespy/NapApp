import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import NapCardList from '../components/NapCardList.jsx';
import LoginContainer from './LoginContainer';

class mainViewContainer extends Component {
	render(){
		const { user } = this.props
		var view =  <NapCardList />
		if (user.isAnonymous === undefined || user.isAnonymous == true){
			view = <LoginContainer />
		}
		return(view)
	}
}

const mapStateToProps = (state) => {
	const {user} = state
	return {
		user
	}
}

export default connect(mapStateToProps, null)(mainViewContainer)

