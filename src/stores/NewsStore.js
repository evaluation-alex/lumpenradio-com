import alt from '../utils/alt';
import NewsActions from '../actions/NewsActions';
import NewsSource from '../sources/NewsSource';

class NewsStore {
  constructor() {
    this.news = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateNews: NewsActions.UPDATE_NEWS,
      handleFetchNews: NewsActions.FETCH_NEWS,
      handleNewsFailed: NewsActions.NEWS_FAILED
    });

    this.exportPublicMethods({
      getNews: this.getNewsItem
    });

    this.exportAsync(NewsSource);
  }

  handleUpdateNews(news) {
    this.news = news;
    this.error = null;
    // optionally return false to suppress the store change event
  }

  handleFetchNews() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.news = [];
  }

  handleNewsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  getNewsItem(id) {
    let { news } = this.getState();
    for (let i = 0; i < news.length; i++) {
      if (news[i].id  === id) {
        return news[i];
      }
    }

    return null;
  }
}

export default alt.createStore(NewsStore, 'NewsStore');
