import alt from '../utils/alt';

class ShowsActions {
  updateShows(shows) {
    this.dispatch(shows);
  }

  fetchShows() {
    this.dispatch();
  }

  showsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

export default alt.createActions(ShowsActions);
