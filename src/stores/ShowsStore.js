import alt from '../utils/alt';
import makeHot from 'alt/utils/makeHot';

import ShowsActions from '../actions/ShowsActions';
import ShowsSource from '../sources/ShowsSource';

import ArtistsActions from '../actions/ArtistsActions';
import ArtistsStore from './ArtistsStore';

class ShowsStore {
  constructor() {
    this.shows = [];
    this.errorMessage = null;

    this.bindListeners({
      onUpdateShows: ShowsActions.UPDATE_SHOWS,
      onFetchShows: ShowsActions.FETCH_SHOWS,
      onShowsFailed: ShowsActions.SHOWS_FAILED,
      onHostsUpdated: ArtistsActions.UPDATE_ARTISTS
    });

    this.exportPublicMethods({
      getShow: this.getShow
    });

    this.exportAsync(ShowsSource);
  }

  onUpdateShows(shows) {
    this.shows = shows;
    this.error = null;
    this.setHostsInfo();
    // optionally return false to suppress the store change event
  }

  onFetchShows() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.shows = [];
  }

  onShowsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  onHostsUpdated() {
    this.waitFor(ArtistsStore);
    this.setHostsInfo();
  }

  resetAllHostsInfo() {
    this.shows.forEach((show) => {
      let { hosts } = show;
      if (hosts) {
        hosts.forEach((host) => {
          delete host.artist;
        });
      }
    });
  }

  setHostsInfo() {
    let { artists } = ArtistsStore.getState();

    this.resetAllHostsInfo();

    // set hosts info for each show
    this.shows.forEach((show) => {
      let { hosts } = show;
      if (hosts) {
        hosts.forEach((host) => {
          artists.forEach((artist) => {
            if (host.artistId === artist.id) {
              host.artist = artist;
            }
          });
        });
      };
    });
  }

  getShow(showId) {
    let { shows } = this.getState();
    for (let i = 0; i < shows.length; i++) {
      if (shows[i].id === showId) {
        return shows[i];
      }
    }

    return null;
  }
}

export default makeHot(alt, ShowsStore);
