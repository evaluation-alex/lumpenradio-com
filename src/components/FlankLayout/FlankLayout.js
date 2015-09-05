/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './FlankLayout.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import LeftFlank from '../LeftFlank';
import RightFlank from '../RightFlank';
import AppCanvas from '../AppCanvas';

@withStyles(styles)
class FlankLayout {

  render() {
    return (
      <div className="FlankLayout">
        <div className="FlankLayout-container">
          <div className="FlankLayout-appCanvas">
            <main>
              <AppCanvas />
            </main>
          </div>
          <div className="FlankLayout-leftFlank">
            <nav>
              <LeftFlank />
            </nav>
          </div>
          <div className="FlankLayout-rightFlank">
            <nav>
              <RightFlank />
            </nav>
          </div>
        </div>
      </div>
    );
  }

}

export default FlankLayout;
