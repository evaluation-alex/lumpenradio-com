import React, { PropTypes } from 'react';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsAndEvents from '../NewsAndEvents';
import Features from '../Features';
import OnAir from '../OnAir';

@withStyles(styles)
class HomePage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Lumpen Radio';
    this.context.onSetTitle(title);
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <div className="HomePage-header">
            <h1>Listen</h1>
          </div>
          <div className="HomePage-body">
            <div className="HomePage-bodyContainer">
              <div className="HomePage-bodyNewsAndEvents">
                <NewsAndEvents />
              </div>
              <div className="HomePage-bodyFeatures">
                <Features />
              </div>
              <div className="HomePage-bodyOnAir">
                <OnAir />
              </div>
              <div className="HomePage-bodyNoMansLand"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;

