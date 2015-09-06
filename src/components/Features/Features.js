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
            <h1>
              <p>L<wbr />u<wbr />m<wbr />p<wbr />e<wbr />n</p>
              <p>R<wbr />a<wbr />d<wbr />i<wbr />o</p>
            </h1>
          </div>
        </div>
      </div>
    );
  }

}

export default Features;

