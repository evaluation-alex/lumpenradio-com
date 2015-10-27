import alt from '../utils/alt';

class ArtistsActions {
  updateArtists(artists) {
    this.dispatch(artists);
  }

  fetchArtists() {
    this.dispatch();
  }

  artistsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

export default alt.createActions(ArtistsActions);
