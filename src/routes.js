import React from 'react';
import http from './core/HttpClient';
import { Router } from 'react-routing';
import ContentPage from './components/ContentPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const App = require('./components/App');
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  // TODO: For proper Webpack code splitting verify page require
  //   for const assign doesn't need to be wrapped in the function
  //   passed back in Promise.all. See the react-routing README
  //   for example: http://is.gd/b6Jpy7.
  on('/', async () => {
    const NewsStore = require('./stores/NewsStore');
    await Promise.all([
      NewsStore.fetchNews(),
      new Promise(resolve => require.ensure(['./components/HomePage'], resolve))
    ]);
    const HomePage = require('./components/HomePage');
    return <HomePage />;
  });

  on('/contact', async () => {
    const ContactPage = require('./components/ContactPage');
    return <ContactPage />;
  });

  on('/login', async () => {
    const LoginPage = require('./components/LoginPage');
    return <LoginPage />;
  });

  on('/register', async () => {
    const RegisterPage = require('./components/RegisterPage');
    return <RegisterPage />;
  });

  // TODO: We're bootstrapping the NewsStore on the HomePage
  //   path. Verify news only fetched here if deep link to path.
  on('/news', async () => {
    const NewsStore = require('./stores/NewsStore');
    await Promise.all([
      NewsStore.fetchNews(),
      new Promise(resolve => require.ensure(['./components/NewsPage'], resolve))
    ]);
    const NewsPage = require('./components/NewsPage');
    return <NewsPage />;
  });

  on('/news/:slug', async (req) => {
    const NewsStore = require('./stores/NewsStore');
    await Promise.all([
      NewsStore.fetchNews(),
      new Promise(resolve => require.ensure(['./components/NewsPage'], resolve))
    ]);
    const NewsPage = require('./components/NewsPage');
    return <NewsPage slug={req.params.slug} />;
  });

  on('/schedule', async () => {
    const ShowsStore = require('./stores/ShowsStore');
    const ScheduleStore = require('./stores/ScheduleStore');
    await Promise.all([
      ShowsStore.fetchShows(),
      ScheduleStore.fetchSchedule(),
      new Promise(resolve => require.ensure(['./components/SchedulePage'], resolve))
    ]);
    const SchedulePage = require('./components/SchedulePage');
    return <SchedulePage />;
  });

  on('/shows', async () => {
    const ShowsPage = require('./components/ShowsPage');
    return <ShowsPage />;
  });

  on('/shows/:id', async (req) => {
    const ShowsStore = require('./stores/ShowsStore');
    const ArtistsStore = require('./stores/ArtistsStore');
    await Promise.all([
      ArtistsStore.fetchArtists(),
      ShowsStore.fetchShows(),
      new Promise(resolve => require.ensure(['./components/ShowDetailsPage'], resolve))
    ]);
    const ShowDetailsPage = require('./components/ShowDetailsPage');
    // TODO: Don't blow up. Return 404 if not found. Do alike for similar routes.)
    return <ShowDetailsPage show={ShowsStore.getShow(req.params.id)} />;
  })

  on('/events', async () => {
    const EventsPage = require('./components/EventsPage');
    return <EventsPage />;
  });

  on('/info', async () => {
    const InfoPage = require('./components/InfoPage');
    return <InfoPage />;
  });

  on('/sponsor', async () => {
    const SponsorPage = require('./components/SponsorPage');
    return <SponsorPage />;
  });

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
