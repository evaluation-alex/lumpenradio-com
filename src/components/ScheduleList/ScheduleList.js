import React, { PropTypes } from 'react';
import styles from './ScheduleList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import ScheduleItem from '../ScheduleItem';

import AltContainer from 'alt/AltContainer';
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
      now: moment()
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
            <h1>{moment(now).format('MMMM')} {this.props.title}</h1>
          </div>
          <div className="ScheduleList-scheduleItems">
            {schedule.filter(filterByDate).map((scheduleItem, i) => {
              return <ScheduleItem key={i} {...scheduleItem} />
            })}
          </div>
          <a className="ScheduleList-moreLink" href="/schedule" onClick={Link.handleClick}>Next month →</a>
        </div>
      </div>
    );
  }
}

export default ScheduleList;
