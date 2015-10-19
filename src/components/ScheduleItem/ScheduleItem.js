import React from 'react';
import styles from './ScheduleItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class ScheduleItem extends React.Component {

  static propTypes = {
    dateTime: React.PropTypes.string.isRequired,
    showId: React.PropTypes.string.isRequired,
    show: React.PropTypes.object
  }

  render() {
    const { dateTime, showId, show } = this.props;

    // terminate early if schedule not hydrated with show info
    if (!show) return <div key={i}>{scheduleItem.showId}</div>;

    // make text lower-case for better display in small-caps
    // item.title = item.title.toLowerCase();

    return (
      <div className="ScheduleItem">
        <div className="ScheduleItem-container">
           <a href={`/shows/${show.id}`} onClick={Link.handleClick}>{show.title}</a>
        </div>
      </div>
    );
  }

}

export default ScheduleItem;

