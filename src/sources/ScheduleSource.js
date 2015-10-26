import ScheduleActions from '../actions/ScheduleActions';
import axios from 'axios';

// let mockData = [ {
//   "dateTime" : "2015-10-19T20:00:00-05:00",
//   "showId" : "post-modern-talking"
// }, {
//   "dateTime" : "2015-10-19T22:00:00-05:00",
//   "showId" : "idiot-business"
// }, {
//   "dateTime" : "2015-10-20T16:00:00-05:00",
//   "showId" : "radio-free-bridgeport"
// }, {
//   "dateTime" : "2015-10-20T18:00:00-05:00",
//   "showId" : "todd-carter"
// }, {
//   "dateTime" : "2015-10-20T20:00:00-05:00",
//   "showId" : "sonoroma"
// }, {
//   "dateTime" : "2015-10-20T22:00:00-05:00",
//   "showId" : "bridgeport-transmissions"
// }, {
//   "dateTime" : "2020-10-20T22:00:00-05:00",
//   "showId" : "future-beats"
// } ]

let ScheduleSource = {
  fetchSchedule() {
    return {
      async remote() {
        const res = await axios.get('https://lumpenradio.firebaseio.com/schedule.json');
        return res.data;
      },

      local(state) {
        return state.schedule.length ? state.schedule : null;
      },

      success: ScheduleActions.updateSchedule,
      error: ScheduleActions.scheduleFailed,
      loading: ScheduleActions.fetchSchedule,

      // should fetch has precedence over the value returned by local
      // in determining whether remote should be called
      shouldFetch(state) {
        // TODO: Intelligently determine if a fetch should be performed
        return true; // return cached value, firing off remote request anyway
      }
    }
  }
};

export default ScheduleSource;
