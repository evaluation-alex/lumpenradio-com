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
          <div className="AppCanvas-header">
            <h1>Listen</h1>
          </div>
          <div className="AppCanvas-body">
            <div className="AppCanvas-newsAndEvents">
            </div>
            <div className="AppCanvas-features">
            </div>
            <div className="AppCanvas-onAir">
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default AppCanvas;

