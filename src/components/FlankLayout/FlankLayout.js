import React, { PropTypes, Component } from 'react';
import styles from './FlankLayout.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import LeftFlank from '../LeftFlank';
import RightFlank from '../RightFlank';
import Navigation from '../Navigation';

@withContext
@withStyles(styles)
class FlankLayout extends Component {

  render() {
    return (
      <div className="FlankLayout">
        <div className="FlankLayout-container">
          <div className="FlankLayout-appCanvas">
            <main>
              {this.props.children}
            </main>
          </div>
          <div className="FlankLayout-leftFlank">
            <header>
              <LeftFlank />
            </header>
          </div>
          <div className="FlankLayout-navigation">
            <nav>
              <Navigation />
            </nav>
          </div>
          <div className="FlankLayout-rightFlank">
            <footer>
              <RightFlank />
            </footer>
          </div>
        </div>
      </div>
    );
  }

}

export default FlankLayout;
