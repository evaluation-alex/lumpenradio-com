import alt from '../utils/alt';

class ScheduleActions {
  updateSchedule(schedule) {
    this.dispatch(schedule);
  }

  fetchSchedule() {
    this.dispatch();
  }

  scheduleFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

export default alt.createActions(ScheduleActions);
