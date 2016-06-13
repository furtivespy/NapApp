import React from 'react';
import {Card, ListItem, CardActions, CardHeader, CardText, FontIcon} from 'material-ui';

class NapCard extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		var iconStyle = {
			fontSize: ".9em",
		};
		return (
			<ListItem>
				<Card>
					<CardHeader 
						title={this.props.message.author}
						avatar={this.props.message.profilePic}
						subtitle={<div><FontIcon className="fa fa-map-marker" style={iconStyle} /> {this.props.message.location}</div>}
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardText expandable={true}>
						{this.props.message.details}
					</CardText>
				</Card>
			</ListItem>);
	}
}

export default NapCard;