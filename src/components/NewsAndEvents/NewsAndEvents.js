/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './NewsAndEvents.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsList from '../NewsList';
import EventData from '../EventList';

let newsData = [
  {title: 'New Shows Added!', linkHref: "http://habd.as"},
  {title: 'WLPN is Lumpen Radio', linkHref: "http://habd.as"},
  {title: 'Lumpen Radio is Here', linkHref: "http://habd.as"},
  {title: 'News Item Number 4', linkHref: "http://habd.as"}
]

// TODO pull in Moment module and complete durations
let eventData = [
  {title: 'Oblique Strategies at Maria\'s', duration: '', linkHref: "http://habd.as"},
  {title: 'Live in the Studio with XYZ', duration: '', linkHref: "http://habd.as"},
  {title: 'In the Community of the Future', duration: '', linkHref: "http://habd.as"},
]

@withStyles(styles)
class NewsAndEvents extends React.Component {

  render() {

    // make text lower-case for better display in small-caps
    newsData = newsData.map( (item) => {
      item.title = item.title.toLowerCase();
      return item;
    });
    eventData = eventData.map( (item) => {
      item.title = item.title.toLowerCase();
      return item;
    });
    return (
      <div className="NewsAndEvents">
        <div className="NewsAndEvents-container">
          <NewsList data={newsData} />
          <EventData data={eventData} />
        </div>
      </div>
    );
  }
}

export default NewsAndEvents;

