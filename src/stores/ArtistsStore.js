import alt from '../utils/alt';
import makeHot from 'alt/utils/makeHot';

import ArtistsActions from '../actions/ArtistsActions';
import ArtistsSource from '../sources/ArtistsSource';

class ArtistsStore {
  constructor() {
    this.artists = [];
    this.errorMessage = null;

    this.bindListeners({
      onUpdateArtists: ArtistsActions.UPDATE_ARTISTS,
      onFetchArtists: ArtistsActions.FETCH_ARTISTS,
      onArtistsFailed: ArtistsActions.ARTISTS_FAILED
    });

    this.exportAsync(ArtistsSource);
  }

  onUpdateArtists(artists) {
    this.artists = artists;
    this.error = null;
    // optionally return false to suppress the store change event
  }

  onFetchArtists() {
    // reset the array while we're fetching so React can be
    // smart and render a spinner for us since the data is empty.
    this.artists = [];
  }

  onArtistsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default makeHot(alt, ArtistsStore);
