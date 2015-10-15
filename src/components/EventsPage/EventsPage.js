import React, { PropTypes } from 'react';
import styles from './EventsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class EventsPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Events';
    this.context.onSetTitle(title);
    return (
      <div className="EventsPage">
        <div className="EventsPage-container">
          <div className="EventsPage-header">
            <h1>{title}</h1>
          </div>
          <div className="EventsPage-body">
            Comedey Butcher > *
          </div>
        </div>
      </div>
    );
  }

}

export default EventsPage;
