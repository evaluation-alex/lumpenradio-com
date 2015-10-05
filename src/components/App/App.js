/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import FlankLayout from '../FlankLayout';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  // TODO: Move propTypes and content page display logic into layout
  render() {
    return !this.props.error ? (
      <div>
        <FlankLayout children={this.props.children} />
      </div>
    ) : this.props.children;
  }

}

export default App;
