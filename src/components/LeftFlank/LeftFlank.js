/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LeftFlank.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class LeftFlank {

  render() {
    return (
      <div className="LeftFlank">
        <div className="LeftFlank-container">
          <h1 className="LeftFlank-banner">L<wbr />u<wbr />m<wbr />p<wbr />e<wbr />n<wbr /> R<wbr />a<wbr />d<wbr />i<wbr />o</h1>
        </div>
      </div>
    );
  }

}

export default LeftFlank;

