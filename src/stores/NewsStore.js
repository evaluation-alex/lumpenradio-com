import alt from '../utils/alt';
import NewsActions from '../actions/NewsActions';

class NewsStore {
  constructor() {
    this.news = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateNews: NewsActions.UPDATE_NEWS,
      handleFetchNews: NewsActions.FETCH_NEWS,
      handleNewsFailed: NewsActions.NEWS_FAILED
    });
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
}

export default alt.createStore(NewsStore, 'NewsStore');
