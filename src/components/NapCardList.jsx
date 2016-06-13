import React from 'react';
import NapCard from './NapCard.jsx';
import {List, Card} from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';


class NapCardList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			messages: []
		};

		
		this.firebaseRef = Firebase.database().ref("naphistory");

		this.firebaseRef.on("value",(dataSnapshot)=> {
			var messageVal = dataSnapshot.val();
			var messages = _(messageVal)
				.keys()
				.map((messageKey)=> {
					var cloned = _.clone(messageVal[messageKey]);
					cloned.key = messageKey
					return cloned;
				})
				.value();
			this.setState({
				messages: messages
			});
		});
	}

	render(){
		var messageNodes = this.state.messages.map((message)=> {

			return (<NapCard message={message} />);
		});

		return (<Card><List>{messageNodes}</List></Card>);
	}
}

export default NapCardList;