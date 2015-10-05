import NewsActions from '../actions/NewsActions';
import axios from 'axios';

// let mockData = [
//   {title: 'New Shows Added!', linkHref: "http://habd.as"},
//   {title: 'WLPN is Lumpen Radio', linkHref: "http://habd.as"},
//   {title: 'Lumpen Radio is Here', linkHref: "http://habd.as"},
//   {title: 'News Item Number 4', linkHref: "http://habd.as"}
// ];

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
