import alt from '../utils/alt';

class NewsActions {
  updateNews(news) {
    this.dispatch(news);
  }

  fetchNews() {
    this.dispatch();
  }

  newsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

export default alt.createActions(NewsActions);
