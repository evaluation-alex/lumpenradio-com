import ScheduleActions from '../actions/ScheduleActions';
import axios from 'axios';

let mockData = [ {
  "dateTime" : "2015-05-03T01:01:56-05:00",
  "showId" : "new-shows-added",
}, {
  "dateTime" : "2015-04-20T01:01:56-05:00",
  "showId" : "wlpn-is-lumpen-radio",
}, {
  "dateTime" : "2015-02-14T01:01:56-05:00",
  "showId" : "lumpen-radio-is-here",
}, {
  "dateTime" : "2015-03-15T01:01:56-05:00",
  "showId" : "bridgeports-got-beef",
}, {
  "dateTime" : "2020-02-14T01:01:56-05:00",
  "showId" : "show-from-the-future",
} ]

let ScheduleSource = {
  fetchSchedule() {
    return {
      async remote() {
        const res = await axios.get('https://lumpenradio.firebaseio.com/schedule.json');
        return mockData || res.data;
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: ScheduleActions.updateSchedule,
      error: ScheduleActions.scheduleFailed,
      loading: ScheduleActions.fetchSchedule
    }
  }
};

export default ScheduleSource;
