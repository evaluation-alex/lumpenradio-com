import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';

import Firebase from 'firebase';
import LoginModal from '../LoginModal';

import {
  FlatButton,
  Dialog,
  RaisedButton,
  Snackbar,
  TextField
} from 'material-ui/lib';

const firebase = new Firebase('https://lumpenradio.firebaseio.com');

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoginButtonDisabled: false,
      snackbarMessage: ''
    };
  }

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);

    const { isLoginButtonDisabled, snackbarMessage } = this.state;

    let formChildren = (
      <form onSubmit={(evt) => {evt.preventDefault()} }>
        <TextField
          ref="emailField"
          style={{display:'block'}}
          hintText="lumpen@magazine.com"
          floatingLabelText="Email"
          type="email" />
        <TextField
          ref="passwordField"
          style={{display:'block'}}
          hintText=",mA]@x[px#L\oj9E"
          floatingLabelText="Password"
          type="password" />
      </form>
    )

    let customActions = [
      <FlatButton
        ref="cancelButton"
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleDismissModal.bind(this)} />,
      <FlatButton
        ref="loginButton"
        label="Login"
        primary={true}
        disabled={isLoginButtonDisabled}
        onTouchTap={this._handleLogin.bind(this)} />
    ];

    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <RaisedButton
            primary={true}
            onTouchTap={this._handleShowModal.bind(this)}
            label="Open Login Form" />
          <Dialog
            title="Firebase Login"
            openImmediately={false}
            actions={customActions}
            ref="loginDialog">
            Enter your Firebase login credentials.
            <LoginModal>
              {formChildren}
            </LoginModal>
          </Dialog>
          <Snackbar
            ref="snackbar"
            message={snackbarMessage || "A message"}
            autoHideDuration={3000} />
        </div>
      </div>
    );
  }

  _handleShowModal() {
    this.refs.loginDialog.show();
  }

  _handleDismissModal() {
   this.refs.loginDialog.dismiss();
  }

  _handleLogin() {
    const { loginButton, emailField, passwordField, snackbar } = this.refs;

    let email = emailField.getValue();
    let password = passwordField.getValue();

    // TODO: Validate user input

    // Disable login button while waiting for a response
    this.setState({isLoginButtonDisabled: true});

    firebase.authWithPassword({ email, password }, (error, authData) => {
      if (error) {
        this.setState({
          isLoginButtonDisabled: false,
          snackbarMessage: `Login Failed! ${error}`
        });
        snackbar.show();
        console.log("Login Failed!", error);
      } else {
        this.setState({
          isLoginButtonDisabled: false,
          snackbarMessage: 'Authenticated successfully'
        });
        snackbar.show();
        this._handleDismissModal()
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }

}

export default LoginPage;
