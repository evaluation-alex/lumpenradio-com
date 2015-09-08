/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './OnAir.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class OnAir {

  render() {
    return (
      <div className="OnAir">
        <div className="OnAir-container">
          <div className="OnAir-banner">
            <h1>On Air</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default OnAir;

