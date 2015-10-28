import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';

import Modal from 'react-modal';
import LoginModal from '../LoginModal';

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isModalOpen: false
    }
  }

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);

    const { isModalOpen } = this.state;

    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <button onClick={this._openModal.bind(this)}>Open Modal</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={this._closeModal.bind(this)}>
            <LoginModal onClickCloseBtn={this._closeModal.bind(this)} />
          </Modal>
        </div>
      </div>
    );
  }

  _openModal() {
    this.setState({isModalOpen: true});
  }

  _closeModal() {
    this.setState({isModalOpen: false})
  }

}

export default LoginPage;
