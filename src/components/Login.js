import React, {Component, PropTypes} from 'react'
import {Card, CardText, RaisedButton, FontIcon} from 'material-ui'

const Login = props => (
		<Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                Ready to rest? Please log in with an existing account.
              </CardText>
              <RaisedButton 
                onClick={props.twitterLogin}
                label="Sign in with Twitter" 
                style={{margin: 5}}
                secondary={true}
                icon={<i className="fa fa-twitter" />}
                />
              <RaisedButton 
                onClick={props.facebookLogin}
                label="Sign in with Facebook" 
                style={{'margin': 5}}
                secondary={true}
                icon={<i className="fa fa-facebook" />}
                />
              <RaisedButton 
                onClick={props.googleLogin}
                label="Sign in with Google" 
                style={{margin: 5}}
                secondary={true}
                icon={<i className="fa fa-google" />}
                />
        </Card>
	)

Login.propTypes = {
  twitterLogin: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired,
	googleLogin: PropTypes.func.isRequired
}

export default Login;