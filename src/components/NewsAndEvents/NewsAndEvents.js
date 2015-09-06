/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './NewsAndEvents.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsList from '../NewsList';

let data = [
  {title: 'New Shows Added!', linkHref: "http://habd.as"},
  {title: 'WLPN is Lumpen Radio', linkHref: "http://habd.as"},
  {title: 'Lumpen Radio is Here', linkHref: "http://habd.as"},
  {title: 'News Item Number 4', linkHref: "http://habd.as"}
]

@withStyles(styles)
class NewsAndEvents {

  render() {
    return (
      <div className="NewsAndEvents">
        <div className="NewsAndEvents-container">
          <NewsList data={data} />
        </div>
      </div>
    );
  }
}

export default NewsAndEvents;

