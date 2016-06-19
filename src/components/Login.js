import React, {Component, PropTypes} from 'react'
import {Card, CardText, RaisedButton} from 'material-ui';

const Login = props => (
		<Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '70px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                Ready to rest? Please log in with your Twitter account.
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={props.loginClick}
              label="Log in with Twitter" primary={true} />
        </Card>
	)

Login.propTypes = {
	loginClick: PropTypes.func.isRequired
}

export default Login;