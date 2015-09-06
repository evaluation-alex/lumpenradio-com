/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './NewsList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsItem from '../NewsItem';

@withStyles(styles)
class NewsList {

  render() {
    var newsItems = this.props.data.map( (newsItem) => {
      return (
        <NewsItem data={newsItem} />
      )
    });
    return (
      <div className="NewsList">
        <div className="NewsList-container">
          {newsItems}
        </div>
      </div>
    );
  }

}

export default NewsList;

