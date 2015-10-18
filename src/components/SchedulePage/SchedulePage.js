import React, { PropTypes } from 'react';
import styles from './SchedulePage.css';
import withStyles from '../../decorators/withStyles';
import ScheduleList from '../ScheduleList';

import AltContainer from 'alt/AltContainer';
import ScheduleStore from '../../stores/ScheduleStore';
import ScheduleActions from '../../actions/ScheduleActions';

@withStyles(styles)
class SchedulePage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Schedule';
    this.context.onSetTitle(title);

    return (
      <div className="SchedulePage">
        <div className="SchedulePage-container">
          <div className="SchedulePage-header">
            <h1>{title}</h1>
          </div>
          <div className="SchedulePage-body">
            <AltContainer
              store={ScheduleStore}
              actions={ScheduleActions}>
              <ScheduleList />
            </AltContainer>
          </div>
        </div>
      </div>
    );
  }

}

export default SchedulePage;
