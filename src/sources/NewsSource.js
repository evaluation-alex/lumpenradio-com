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

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: NewsActions.updateNews,
      error: NewsActions.newsFailed,
      loading: NewsActions.fetchNews
    }
  }
};

export default NewsSource;
