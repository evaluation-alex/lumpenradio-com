let mockData = [
  {title: 'New Shows Added!', linkHref: "http://habd.as"},
  {title: 'WLPN is Lumpen Radio', linkHref: "http://habd.as"},
  {title: 'Lumpen Radio is Here', linkHref: "http://habd.as"},
  {title: 'News Item Number 4', linkHref: "http://habd.as"}
];

let NewsSource = {
  fetch() {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {
        // resolve with some mock data
        resolve(mockData);
      }, 250);
    });
  }
};

export default NewsSource;
