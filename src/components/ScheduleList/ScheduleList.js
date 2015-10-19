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
    errorMessage: React.PropTypes.string,
    schedule: PropTypes.array
  }

  static defaultProps = {
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

    // TODO: Sort items by dateTime

    return (
      <div className="ScheduleList">
        <table className="ScheduleList-container">
          <caption>Upcoming events</caption>
          <tbody className="ScheduleList-scheduleItems">
              {schedule.filter(filterByDate).map((scheduleItem, i) => {
                return (
                  <ScheduleItem key={i} {...scheduleItem} />
                )
              })}
          </tbody>
          <thead className="ScheduleList-header">
            <tr>
              <th>{moment(now).format('MMMM')}</th>
              <th>Show</th>
              <th>Time</th>
            </tr>
          </thead>
          <tfoot className="ScheduleList-footer">
            <tr>
              <td colSpan="3">
                <a className="ScheduleList-moreLink" href="/schedule" onClick={Link.handleClick}>Next month →</a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ScheduleList;
