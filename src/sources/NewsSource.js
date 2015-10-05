import NewsActions from '../actions/NewsActions';

let mockData = [
  {title: 'New Shows Added!', linkHref: "http://habd.as"},
  {title: 'WLPN is Lumpen Radio', linkHref: "http://habd.as"},
  {title: 'Lumpen Radio is Here', linkHref: "http://habd.as"},
  {title: 'News Item Number 4', linkHref: "http://habd.as"}
];

let NewsSource = {
  fetchNews() {
    return {
      remote() {
        // returning a Promise because that is what fetch does.
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous action where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: NewsActions.updateNews,
      error: NewsActions.newsFailed,
      loading: NewsActions.fetchNews
    }
  }
};

export default NewsSource;
