import React, { PropTypes } from 'react';
import styles from './ScheduleList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import ScheduleStore from '../../stores/ScheduleStore';

import moment from 'moment';

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

  constructor(props) {
    super(props);

    this.state = {
      now: Date()
    }
  }

  render() {
    const { schedule, errorMessage } = this.props;
    let { now } = this.state;

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

    // Filter out anything not in the current month
    let filterByDate = (item) => {
      return moment(item.dateTime).isBetween(
        moment(now).startOf('month'),
        moment(now).endOf('month')
      );
    }

    return (
      <div className="ScheduleList">
        <div className="ScheduleList-container">
          <div className="ScheduleList-header">
            <h1>{this.props.title}</h1>
            <h2>{moment(now).format('MMMM')}</h2>
          </div>
          <div className="ScheduleList-newsItems">
            {schedule.filter(filterByDate).map((scheduleItem, i) => {
              let { show } = scheduleItem;
              if (show) {
                return (
                  <div>
                    <a key={i} href={`/shows/${show.id}`} onClick={Link.handleClick}>{show.title}</a>
                  </div>
                );
              } else {
                return <div key={i}>{scheduleItem.showId}</div>;
              }
            })}
          </div>
          <a className="ScheduleList-moreLink" href="/schedule" onClick={Link.handleClick}>Next month →</a>
        </div>
      </div>
    );
  }
}

export default ScheduleList;
