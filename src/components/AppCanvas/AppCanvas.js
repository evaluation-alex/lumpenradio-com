/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './AppCanvas.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class AppCanvas {

  render() {
    return (
      <div className="AppCanvas">
        <div className="AppCanvas-container">
          <h1 className="AppCanvas-banner">Listen</h1>
        </div>
      </div>
    );
  }

}

export default AppCanvas;

