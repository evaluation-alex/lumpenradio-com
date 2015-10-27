import ArtistsActions from '../actions/ArtistsActions';
import axios from 'axios';

let ArtistsSource = {
  fetchArtists() {
    return {
      async remote() {
        const res = await axios.get('https://lumpenradio.firebaseio.com/artists.json');
        return res.data;
      },

      local(state) {
        return state.artists.length ? state.artists : null;
      },

      success: ArtistsActions.updateArtists,
      error: ArtistsActions.artistsFailed,
      loading: ArtistsActions.fetchArtists,

      // should fetch has precedence over the value returned by local
      // in determining whether remote should be called
      shouldFetch(state) {
        // TODO: Intelligently determine if a fetch should be performed
        return true; // return cached value, firing off remote request anyway
      }
    }
  }
};

export default ArtistsSource;
