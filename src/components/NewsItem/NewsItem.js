import React from 'react';
import styles from './NewsItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class NewsItem {

  render() {
    let newsItem = this.props.data;
    newsItem.title = newsItem.title.toLowerCase();
    return (
      <div className="NewsItem">
        <div className="NewsItem-container">
          <a className="NewsItem-link" href={newsItem.linkHref}>{newsItem.title}</a>
        </div>
      </div>
    );
  }

}

export default NewsItem;

