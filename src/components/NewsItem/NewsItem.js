/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './NewsItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class NewsItem {

  render() {
    var newsItem = this.props.data;
    return (
      <div className="NewsItem">
        <div className="NewsItem-container">
          <a href={newsItem.linkHref}>{newsItem.title}</a>
        </div>
      </div>
    );
  }

}

export default NewsItem;

