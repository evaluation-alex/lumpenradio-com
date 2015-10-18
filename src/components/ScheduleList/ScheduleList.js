import React, { PropTypes } from 'react';
import styles from './ScheduleList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import ScheduleStore from '../../stores/ScheduleStore';

@withStyles(styles)
class ScheduleList extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    errorMessage: React.PropTypes.string,
    schedule: PropTypes.array
  }

  static defaultProps = {
    title: 'Schedule',
    schedule: []
  }

  render() {
    const { schedule, errorMessage } = this.props;

    if (errorMessage) {
      return (
        <div>{errorMessage}</div>
      );
    }

    if (ScheduleStore.isLoading()) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="ScheduleList">
        <div className="ScheduleList-container">
          <div className="ScheduleList-header">
            <h1>{this.props.title}</h1>
          </div>
          <div className="ScheduleList-newsItems">
            {schedule.map((scheduleItem, i) => {
              return <div>{scheduleItem.showId}</div>;
            })}
          </div>
          <a className="ScheduleList-moreLink" href="/schedule" onClick={Link.handleClick}>Next month →</a>
        </div>
      </div>
    );
  }
}

export default ScheduleList;
