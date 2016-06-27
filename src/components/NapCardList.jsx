import React from 'react';
import NapCard from './NapCard.jsx';
import {List, Card} from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';


class NapCardList extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.napList);
		var messageNodes = this.props.napList.map((message)=> {
			return (<NapCard message={message} />);
		});
		return (<Card><List>{messageNodes}</List></Card>);
	}
}

export default NapCardList;