import alt from '../utils/alt';
import NewsSource from '../sources/NewsSource';

class NewsActions {
  updateNews(news) {
    this.dispatch(news);
  }
  fetchNews() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();
    NewsSource.fetch()
      .then((news) => {
        // we can access other actions within our action through `this.actions`
        this.actions.updateNews(news);
      })
      .catch((errorMessage) => {
        this.actions.newsFailed(errorMessage);
      });
  }
  newsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(NewsActions);
