/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './RightFlank.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class RightFlank {

  render() {
    return (
      <div className="RightFlank">
        <div className="RightFlank-container">
          <h1 className="LeftFlank-banner">L<wbr />u<wbr />m<wbr />p<wbr />e<wbr />n<wbr /> R<wbr />a<wbr />d<wbr />i<wbr />o</h1>
          <h1 className="RightFlank-banner">
            <p><strong>W<wbr />L<wbr />P<wbr />N</strong></p>
            <p className="RightFlank-bannerFrequency">1<wbr />0<wbr />5<wbr />.<wbr />5</p>
            <p>F<wbr />M</p>
          </h1>
        </div>
      </div>
    );
  }

}

export default RightFlank;

