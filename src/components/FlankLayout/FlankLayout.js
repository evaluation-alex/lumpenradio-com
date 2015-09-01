/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './FlankLayout.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import LeftFlank from '../LeftFlank';
import RightFlank from '../RightFlank';

@withStyles(styles)
class FlankLayout {

  render() {
    return (
      <div className="FlankLayout">
        <div className="FlankLayout-container">
          <Layout className="FlankLayout-containerLayout" type="columns">
            <Fixed>
              <LeftFlank />
            </Fixed>
            <Flex>
              <main>
                <center><h1><em>Listen</em></h1></center>
                <p>The new Lumpen Radio is an evolution of Lumpen Radio 1.0. It's a coming out party. It's flying our freak flag. It's art, music, culture, politics, freaks, magic, sex, drugs, and all that good stuff.</p>
                <p>The overall identity will evolve swiftly over the course of the next few months, but this is to get us started</p>
                <p>The rules are simple. Stick to the framework and everything else goes. Flag the left/right edges with Lumpen Radio. Stick to the typefaces and proportions provided. The background and colors can change. The imagery and illustration can change.</p>
                <p>We'll go over that in more detail later. Right now let's get the website rollin.</p>
              </main>
            </Flex>
            <Fixed>
              <RightFlank />
            </Fixed>
          </Layout>
        </div>
      </div>
    );
  }

}

export default FlankLayout;
