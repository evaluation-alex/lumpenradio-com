import React from 'react';
import styles from './NewsStory.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import NewsStore from '../../stores/NewsStore';

import showdown from 'showdown';
const converter = new showdown.Converter();

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

    if (slug) {

      // Get news item from store and generate markup. Assumes the
      // story is written in markdown. But it could be any trusted
      // library. Watch out for XSS vulnerabilities here.
      let newsItem = NewsStore.getNewsItem(slug);
      let markup = { __html: converter.makeHtml(newsItem.story) };

      return (
        <div className="NewsStory">
          <div className="NewsStory-container">
            <div dangerouslySetInnerHTML={markup} />
          </div>
        </div>
      );
    } else return <div />;
  }
}

export default NewsStory;

