import alt from '../utils/alt';
import makeHot from 'alt/utils/makeHot';

import ScheduleActions from '../actions/ScheduleActions';
import ScheduleSource from '../sources/ScheduleSource';

import ShowsActions from '../actions/ShowsActions';
import ShowsStore from './ShowsStore';

class ScheduleStore {
  constructor() {
    this.schedule = [];
    this.errorMessage = null;

    ShowsStore.fetchShows();

    this.bindListeners({
      onUpdateSchedule: ScheduleActions.UPDATE_SCHEDULE,
      onFetchSchedule: ScheduleActions.FETCH_SCHEDULE,
      onScheduleFailed: ScheduleActions.SCHEDULE_FAILED,
      onShowsUpdated: ShowsActions.UPDATE_SHOWS
    });

    this.exportAsync(ScheduleSource);
  }

  onUpdateSchedule(schedule) {
    this.schedule = schedule;
    this.error = null;
    this.setShowsInfo();
    // optionally return false to suppress the store change event
  }

  onFetchSchedule() {
    // reset the array while we're fetching so React can be
    // smart and render a spinner for us since the data is empty.
    this.schedule = [];
  }

  onScheduleFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  onShowsUpdated() {
    this.waitFor(ShowsStore);
    this.setShowsInfo();
  }

  resetAllShowInfo() {
    this.schedule.forEach((scheduleItem) => {
      return (scheduleItem.show) ? delete scheduleItem.show : null;
    });
  }

  setShowsInfo() {
    let { shows } = ShowsStore.getState();

    this.resetAllShowInfo();

    shows.forEach((show) => {
      // find each show in schedule
      for (let scheduleItem of this.schedule) {

        // set show info
        if (show.id === scheduleItem.showId) {
          scheduleItem.show = show;
          break;
        }
      }
    });
  }

}

export default makeHot(alt, ScheduleStore);
