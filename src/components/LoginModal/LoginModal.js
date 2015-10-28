import React, { Component, PropTypes } from 'react';
import styles from './LoginModal.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class LoginModal extends Component {

  static propTypes = {
    onClickCloseBtn: PropTypes.func.isRequired
  };

  render() {
    const { onClickCloseBtn } = this.props;

    return (
      <div className="LoginModal">
        <div className="LoginModal-container">
          <h2>Hello</h2>
          <button onClick={onClickCloseBtn.bind(this)}>close</button>
          <div>I am a modal</div>
          <form onSubmit={(evt) => {evt.preventDefault()} }>
            <input />
            <input />
            <button>tab navigation</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginModal;
