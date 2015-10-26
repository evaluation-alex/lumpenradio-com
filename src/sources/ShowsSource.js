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
// }, {
//   "id" : "radio-free-bridgeport",
//   "title" : "Radio Free Bridgeport"
// }, {
//   "id" : "todd-carter",
//   "title" : "Todd Carter"
// }, {
//   "description" : "Take a trip through Latin America's vinyl past circa 1950s and on. Get ready for hard hitting cumbias, eccentric pop, garage rock and tropical sounds with a few surprises here and there. Also on deck will be themed shows, special guest selectors and spotlights of local bands that have caught the group's ears.",
//   "id" : "sonoroma",
//   "title" : "Sonoroma"
// }, {
//   "description" : "On the WLPN Bridgeport Transmissions radio program we'll spontaneously explore a vast collection of vinyl; from the earliest pressings to those of today, focusing on sincere, fearless, and thus innovative and soulful expressions that transcend eras and genres in hopes of tickling your noggin, kindlin' your heart and getting your booty rockin'.",
//   "id" : "bridgeport-transmissions",
//   "title" : "Bridgeport Transmissions"
// } ]


let ShowsSource = {
  fetchShows() {
    return {
      async remote() {
        const res = await axios.get('https://lumpenradio.firebaseio.com/shows.json');
        return res.data;
      },

      local(state) {
        return state.shows.length ? state.shows : null;
      },

      success: ShowsActions.updateShows,
      error: ShowsActions.showsFailed,
      loading: ShowsActions.fetchShows,

      // should fetch has precedence over the value returned by local
      // in determining whether remote should be called
      shouldFetch(state) {
        // TODO: Intelligently determine if a fetch should be performed
        return true; // return cached value, firing off remote request anyway
      }
    }
  }
};

export default ShowsSource;
