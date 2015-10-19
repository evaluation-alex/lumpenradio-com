import 'babel-core/polyfill';
import path from 'path';
import express from 'express';
import alt from './utils/alt';
import Iso from 'iso';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';

const server = global.server = express();
const iso = new Iso();

import NewsStore from './stores/NewsStore';
import ShowsStore from './stores/ShowsStore';
import ScheduleStore from './stores/ScheduleStore';

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    // TODO: Convert fetch operations to route handlers and hand-off
    //   bootstrapped data to the dispatcher dispatch callback below.
    await NewsStore.fetchNews();
    await ScheduleStore.fetchSchedule();
    alt.bootstrap(JSON.stringify({ /* hack */ }));

    await Router.dispatch({ path: req.path, context }, (state, component) => {
      iso.add(
        ReactDOM.renderToString(component),
        alt.flush()
      );
      data.body = iso.render();
      data.css = css.join('');
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
