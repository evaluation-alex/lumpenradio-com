import React from 'react';
import styles from './ScheduleList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class ScheduleList extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array
  }

  static defaultProps = {
    title: 'Schedule',
    items: []
  }

  componentWillMount() {
    this.props.fetchSchedule();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="ScheduleList">
        <div className="ScheduleList-container">
          <div className="ScheduleList-header">
            <h1>{this.props.title}</h1>
          </div>
          <div className="ScheduleList-newsItems">
            {items.map((listItem, i) => {
              return `Item ${i}`
            })}
          </div>
          <a className="ScheduleList-moreLink" href="/schedule" onClick={Link.handleClick}>Next month →</a>
        </div>
      </div>
    );
  }
}

export default ScheduleList;
