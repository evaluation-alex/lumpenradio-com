import React from 'react';
import styles from './EventItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class EventItem extends React.Component {

  render() {
    var eventItem = this.props.data;
    return (
      <div className="EventItem">
        <div className="EventItem-container">
          <a className="EventItem-link" href={eventItem.linkHref}>{eventItem.title}</a>
        </div>
      </div>
    );
  }

}

export default EventItem;

