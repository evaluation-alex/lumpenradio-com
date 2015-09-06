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

export default OnAir;

