import React from 'react';
import styles from './NewsStory.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import NewsStore from '../../stores/NewsStore';

import showdown from 'showdown';
import xssFilter from 'showdown-xss-filter';

const CONVERTER = new showdown.Converter({extensions: [xssFilter]});

@withStyles(styles)
class NewsStory extends React.Component {

  static propTypes = {
    slug: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  };

  render() {
    const { slug, errorMessage } = this.props;

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

    // Get news item from store and generate markup. Assumes the
    // story is written in markdown. But it could be any trusted
    // library. Watch out for XSS vulnerabilities here.
    let newsItem = NewsStore.getNewsItem(slug);
    if (newsItem) {
      let markup = { __html: CONVERTER.makeHtml(newsItem.story) };
      return (
        <div className="NewsStory">
          <div className="NewsStory-container">
            <div dangerouslySetInnerHTML={markup} />
          </div>
        </div>
      );
    } else return <p>Select a story to get started.</p>;
  }
}

export default NewsStory;

