/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './RightFlank.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class RightFlank extends React.Component {

  render() {
    return (
      <div className="RightFlank">
        <div className="RightFlank-container">
          <div className="RightFlank-banner">
            <h1 className="RightFlank-banner__h1">
              WLPN 105.5 FM
            </h1>
          </div>
        </div>
      </div>
    );
  }

}

export default RightFlank;

