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

  static propTypes = {
    slug: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    news: React.PropTypes.array
  }

  static defaultProps = {
    news: []
  }

  render() {
    const { slug, news, errorMessage } = this.props;

    if (errorMessage) {
      return (
        <div>{errorMessage}</div>
      );
    }

    if (NewsStore.isLoading()) {
      return (
        <div>
          Loading...
        </div>
      );
    }


    const { parse } = Date;

    // Sort news items by date for presentation
    let sortByDate = (a, b) => {
      return parse(a.postDate) - parse(b.postDate);
    }

    // Filter out anything post-dated in the future
    let filterByDate = (item) => {
      return parse(item.postDate) < NOW;
    }

    return (
      <div>
        {news.sort(sortByDate).filter(filterByDate).map((newsItem, i) => {
          if (newsItem.slug === slug) {
            return <NewsItem key={i} data={newsItem} isSelected={true} />;
          } else {
            return <NewsItem key={i} data={newsItem} />;
          }
        })}
      </div>
    );
  }
}

@withStyles(styles)
class NewsList extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    slug: React.PropTypes.string
  }

  static defaultProps = {
    title: 'News'
  }

  render() {
    const { slug } = this.props;

    return (
      <div className="NewsList">
        <div className="NewsList-container">
          <div className="NewsList-header">
            <h1>{this.props.title}</h1>
          </div>
          <div className="NewsList-newsItems">
            <AltContainer store={NewsStore}>
              <NewsItems slug={slug} />
            </AltContainer>
          </div>
          <a className="NewsList-moreLink" href="/news" onClick={Link.handleClick}>More News →</a>
        </div>
      </div>
    );
  }
}

export default NewsList;
