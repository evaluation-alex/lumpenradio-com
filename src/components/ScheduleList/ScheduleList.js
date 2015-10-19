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

    // Sort schedule items by date for presentation
    let sortByDate = (a, b) => {
      return moment(b).subtract(moment(a));
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
          <table className="ScheduleList-table">
            <caption className="u-isHiddenVisually">Upcoming events</caption>
            <tbody className="ScheduleList-tableBody">
                {schedule.sort(sortByDate).filter(filterByDate).map((scheduleItem, i) => {
                  return <ScheduleItem key={i} {...scheduleItem} />;
                })}
            </tbody>
            <thead className="ScheduleList-tableHeader">
              <tr>
                <th>{moment(now).format('MMMM')}</th>
                <th>Show</th>
                <th>Time</th>
              </tr>
            </thead>
            <tfoot className="ScheduleList-tableFooter">
              <tr>
                <td colSpan="3">
                  <a className="ScheduleList-moreLink" href="/schedule" onClick={Link.handleClick}>
                    {moment(now).add(1, 'M').format('MMMM')} Shows →
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default ScheduleList;
