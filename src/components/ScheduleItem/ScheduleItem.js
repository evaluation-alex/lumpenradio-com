import React from 'react';
import classNames from 'classnames';
import styles from './ScheduleItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import moment from 'moment';

@withStyles(styles)
class ScheduleItem extends React.Component {

  static propTypes = {
    dateTime: React.PropTypes.string.isRequired,
    showId: React.PropTypes.string.isRequired,
    isTentative: React.PropTypes.bool,
    show: React.PropTypes.object
  }

  render() {
    const { dateTime, showId, show } = this.props;

    let displayDate = moment(dateTime).format('dddd MM/DD/YY');

    // TODO: Convert to a time duration and format accordingly
    let displayTime = moment(dateTime).format('h:mmA')

    // terminate early if schedule not hydrated with show info
    if (!show) return <div key={showId}>{showId}</div>;

    // make text lower-case for better display in small-caps
    show.title = show.title.toLowerCase();

    let itemClassName = classNames({
      "ScheduleItem": true,
      "ScheduleItem--muted": this.props.isTentative
    });

    return (
      <tr className={itemClassName}>
        <td className="ScheduleItem-date">
           {displayDate}
        </td>
        <td className="ScheduleItem-show">
           <a href={`/shows/${show.id}`} onClick={Link.handleClick}>{show.title}</a>
        </td>
        <td className="ScheduleItem-time">
           {displayTime}
        </td>
      </tr>
    );
  }

}

export default ScheduleItem;

