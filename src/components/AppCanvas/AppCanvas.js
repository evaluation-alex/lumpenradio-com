/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './AppCanvas.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsAndEvents from '../NewsAndEvents';
import Features from '../Features';
import OnAir from '../OnAir';

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
            <div className="AppCanvas-bodyContainer">
              <div className="AppCanvas-bodyNewsAndEvents">
                <NewsAndEvents />
              </div>
              <div className="AppCanvas-bodyFeatures">
                <Features />
              </div>
              <div className="AppCanvas-bodyOnAir">
                <OnAir />
              </div>
              <div className="AppCanvas-bodyNoMansLand"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default AppCanvas;

