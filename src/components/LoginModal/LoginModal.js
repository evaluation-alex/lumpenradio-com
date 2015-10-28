import React, { Component, PropTypes } from 'react';
import styles from './LoginModal.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import {
  FlatButton,
  TextField
} from 'material-ui/lib';

@withStyles(styles)
class LoginModal extends Component {

  render() {
    return (
      <div className="LoginModal">
        <div className="LoginModal-container">
          <form onSubmit={(evt) => {evt.preventDefault()} }>
            <TextField
              style={{display:'block'}}
              hintText="jdoe@gmail.com"
              floatingLabelText="Email"
              type="email" />
            <TextField
              style={{display:'block'}}
              hintText=",mA]@x[px#L\oj9E"
              floatingLabelText="Password"
              type="password" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginModal;
