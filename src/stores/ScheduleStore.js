import alt from '../utils/alt';
import makeHot from 'alt/utils/makeHot';

import ScheduleActions from '../actions/ScheduleActions';
import ScheduleSource from '../sources/ScheduleSource';

class ScheduleStore {
  constructor() {
    this.schedule = [];
    this.errorMessage = null;

    this.bindListeners({
      onUpdateSchedule: ScheduleActions.UPDATE_SCHEDULE,
      onFetchSchedule: ScheduleActions.FETCH_SCHEDULE,
      onScheduleFailed: ScheduleActions.SCHEDULE_FAILED
    });

    this.exportAsync(ScheduleSource);
  }

  onUpdateSchedule(schedule) {
    this.schedule = schedule;
    this.error = null;
    // optionally return false to suppress the store change event
  }

  onFetchSchedule() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.schedule = [];
  }

  onScheduleFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default makeHot(alt, ScheduleStore);
