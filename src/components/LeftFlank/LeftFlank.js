/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LeftFlank.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class LeftFlank extends React.Component {

  render() {
    return (
      <div className="LeftFlank">
        <div className="LeftFlank-container">
          <div className="LeftFlank-banner">
            <h1 className="LeftFlank-banner__h1">
              Lumpen Radio
            </h1>
          </div>
        </div>
      </div>
    );
  }

}

export default LeftFlank;

