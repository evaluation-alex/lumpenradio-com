import ShowsActions from '../actions/ShowsActions';
import axios from 'axios';

// let mockData = [ {
//   "description" : "Cheri Cheri Lady! What happens when our culture implodes and all that's left is a bunch of vinyl, some microphones and a delay pedal?  Oh, we have a lap-top too.  Semi-erotic semiotic surprises.",
//   "id" : "post-modern-talking",
//   "title" : "Post Modern Talking"
// }, {
//   "description" : "Experimental electronic music of all kinds.",
//   "id" : "idiot-business",
//   "title" : "Idiot Business"
// } ]


let ShowsSource = {
  fetchShows() {
    return {
      async remote() {
        const res = await axios.get('https://lumpenradio.firebaseio.com/shows.json');
        return res.data;
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: ShowsActions.updateShows,
      error: ShowsActions.showsFailed,
      loading: ShowsActions.fetchShows
    }
  }
};

export default ShowsSource;
