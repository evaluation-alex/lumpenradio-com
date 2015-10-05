import React from 'react';
import styles from './NewsList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsItem from '../NewsItem';

@withStyles(styles)
class NewsList extends React.Component {

  render() {
    var newsItems = this.props.data.map( (newsItem) => {
      return (
        <NewsItem data={newsItem} />
      )
    });
    return (
      <div className="NewsList">
        <div className="NewsList-container">
          <div className="NewsList-header">
            <h1>News</h1>
          </div>
          <div className="NewsList-newsItems">
            {newsItems}
          </div>
          <a className="NewsList-moreLink" href="/news">More News →</a>
        </div>
      </div>
    );
  }

}

export default NewsList;

