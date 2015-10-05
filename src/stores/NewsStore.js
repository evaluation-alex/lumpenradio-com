import alt from '../utils/alt';
import makeHot from 'alt/utils/makeHot';

import NewsActions from '../actions/NewsActions';
import NewsSource from '../sources/NewsSource';

class NewsStore {
  constructor() {
    this.news = [];
    this.errorMessage = null;

    this.bindListeners({
      onUpdateNews: NewsActions.UPDATE_NEWS,
      onFetchNews: NewsActions.FETCH_NEWS,
      onNewsFailed: NewsActions.NEWS_FAILED
    });

    this.exportPublicMethods({
      getNewsItem: this.getNewsItem
    });

    this.exportAsync(NewsSource);
  }

  onUpdateNews(news) {
    this.news = news;
    this.error = null;
    // optionally return false to suppress the store change event
  }

  onFetchNews() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.news = [];
  }

  onNewsFailed(errorMessage) {
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

export default makeHot(alt, NewsStore);
