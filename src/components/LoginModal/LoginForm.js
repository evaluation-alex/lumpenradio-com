import React, { Component, PropTypes } from 'react';
import styles from './LoginForm.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import {
  FlatButton,
  TextField
} from 'material-ui/lib';

@withStyles(styles)
class LoginForm extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="LoginForm">
        <div className="LoginForm-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default LoginForm;
