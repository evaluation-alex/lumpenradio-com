import React from 'react';
import styles from './NewsAndEvents.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsList from '../NewsList';
import EventList from '../EventList';

// TODO pull in Moment module and complete durations
let eventData = [
  {title: 'Oblique Strategies at Maria\'s', duration: '', linkHref: "http://habd.as"},
  {title: 'Live in the Studio with XYZ', duration: '', linkHref: "http://habd.as"},
  {title: 'In the Community of the Future', duration: '', linkHref: "http://habd.as"},
]

@withStyles(styles)
class NewsAndEvents extends React.Component {

  render() {
    let title;

    // make text lower-case for better display in small-caps
    eventData = eventData.map( (item) => {
      title = item.title.toLowerCase();
      return item;
    });
    return (
      <div className="NewsAndEvents">
        <div className="NewsAndEvents-container">
          <NewsList />
          <EventList data={eventData} />
        </div>
      </div>
    );
  }
}

export default NewsAndEvents;

