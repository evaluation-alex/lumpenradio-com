import NewsActions from '../actions/NewsActions';
import axios from 'axios';

// let mockData = [ {
//   "postDate" : "2015-05-03T01:01:56-05:00",
//   "slug" : "new-shows-added",
//   "title" : "New Shows Added!"
// }, {
//   "postDate" : "2015-04-20T01:01:56-05:00",
//   "slug" : "wlpn-is-lumpen-radio",
//   "title" : "WLPN is Lumpen Radio"
// }, {
//   "postDate" : "2015-02-14T01:01:56-05:00",
//   "slug" : "lumpen-radio-is-here",
//   "title" : "Lumpen Radio is Here"
// }, {
//   "postDate" : "2015-03-15T01:01:56-05:00",
//   "slug" : "bridgeports-got-beef",
//   "title" : "Bridgeport's got beef"
// }, {
//   "postDate" : "2020-02-14T01:01:56-05:00",
//   "slug" : "news-from-the-future",
//   "title" : "News from the future"
// } ]

let NewsSource = {
  fetchNews() {
    return {
      async remote() {
        const res = await axios.get('https://lumpenradio.firebaseio.com/news.json');
        return res.data;
      },

      local(state) {
        return state.news.length ? state.news : null;
      },

      loading: NewsActions.fetchNews, // (optional)
      success: NewsActions.updateNews, // (required)
      error: NewsActions.newsFailed, // (required)

      // should fetch has precedence over the value returned by local
      // in determining whether remote should be called
      shouldFetch(state) {
        // TODO: Intelligently determine if a fetch should be performed
        return true; // return cached value, firing off remote request anyway
      }
    }
  }
};

export default NewsSource;
