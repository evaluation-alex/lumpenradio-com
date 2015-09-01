/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import FlankLayout from '../FlankLayout';

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  // TODO: Move propTypes and content page display logic into layout
  render() {
    return !this.props.error ? (
      <div>
        <FlankLayout />
        <span style={{display:'none'}}>
          {this.props.children}
        </span>
      </div>
    ) : this.props.children;
  }

}

export default App;
