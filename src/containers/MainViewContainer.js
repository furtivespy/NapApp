import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import NapCardList from '../components/NapCardList.jsx'
import LoginContainer from './LoginContainer'
import DialogContainer from './DialogContainer'


class mainViewContainer extends Component {
	render(){
		const { user, napList, showHelp, helpClick } = this.props
		var view = <NapCardList napList={napList} />
		
		if (user.isAnonymous === undefined || user.isAnonymous == true){
			view = <LoginContainer />
		}
		return(
			<div>
				{view}
				<DialogContainer />
			</div>)
	}
}

const mapStateToProps = (state) => { 
	const {user, napData, appbar} = state
	return {
		user,
		napList: napData.napList
	}
}

export default connect(mapStateToProps)(mainViewContainer)

