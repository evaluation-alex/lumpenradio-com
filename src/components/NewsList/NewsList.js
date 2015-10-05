import React from 'react';
import styles from './NewsList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsItem from '../NewsItem';

import AltContainer from 'alt/AltContainer';
import NewsStore from '../../stores/NewsStore';
import NewsActions from '../../actions/NewsActions';

const NOW = Date.now();

class NewsItems extends React.Component {
  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (NewsStore.isLoading()) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    // Sort news items by date for presentation
    let sortByDate = (a, b) => {
      return Date.parse(a.postDate) - Date.parse(b.postDate);
    }

    // Filter out anything post-dated in the future
    let filterByDate = (item) => {
      return Date.parse(item.postDate) < NOW;
    }

    let news = this.props.news.sort(sortByDate).filter(filterByDate);

    return (
      <div>
        {news.map((newsItem, i) => {
          return (
            <NewsItem key={i} data={newsItem} />
          )
        })}
      </div>
    );
  }
}

@withStyles(styles)
class NewsList extends React.Component {

  componentDidMount() {
    NewsStore.fetchNews()
  }

  render() {

    return (
      <div className="NewsList">
        <div className="NewsList-container">
          <div className="NewsList-header">
            <h1>News</h1>
          </div>
          <div className="NewsList-newsItems">
            <AltContainer store={NewsStore}>
              <NewsItems />
            </AltContainer>
          </div>
          <a className="NewsList-moreLink" href="/news">More News →</a>
        </div>
      </div>
    );
  }
}

export default NewsList;
