/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Features.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Features {

  render() {
    return (
      <div className="Features">
        <div className="Features-container">
          <div className="Features-banner">
            <h1>Features</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default Features;

