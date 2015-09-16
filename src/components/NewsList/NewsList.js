import React from 'react';
import styles from './NewsList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import NewsItem from '../NewsItem';

import NewsStore from '../../stores/NewsStore';
import NewsActions from '../../actions/NewsActions';

@withStyles(styles)
class NewsList {
  constructor(props) {
    this.state = NewsStore.getState();
  }

  componentDidMount() {
    NewsStore.listen(this.onChange);
    NewsActions.fetchNews();
  }

  componentWillUnmount() {
    NewsStore.unlisten(this.onChange);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.news.length) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    let newsItems = this.state.news.map( (newsItem) => {
      return (
        <NewsItem data={newsItem} />
      );
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
