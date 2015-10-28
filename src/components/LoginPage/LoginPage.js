import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';

import LoginModal from '../LoginModal';

import {
  FlatButton,
  Dialog,
  RaisedButton,
  TextField
} from 'material-ui/lib';

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);

    let customActions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this._onTouchTapCustomDialogCancelBtn.bind(this)} />,
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this._onTouchTapCustomDialogLoginBtn.bind(this)} />
    ];

    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <RaisedButton
            primary={true}
            onTouchTap={this._onTouchTapBtn.bind(this)}
            label="Open Login Form" />
          <Dialog
            title="Firebase Login"
            openImmediately={false}
            actions={customActions}
            ref="loginDialog">
            Enter your Firebase login credentials.
            <LoginModal />
          </Dialog>
        </div>
      </div>
    );
  }

  _onTouchTapBtn() {
    this.refs.loginDialog.show();
  }

  _onTouchTapCustomDialogCancelBtn() {
   this.refs.loginDialog.dismiss();
  }

  _onTouchTapCustomDialogLoginBtn() {
   console.log('Login!')
  }

}

export default LoginPage;
