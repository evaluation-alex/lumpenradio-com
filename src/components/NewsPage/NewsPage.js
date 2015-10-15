import React, { PropTypes } from 'react';
import styles from './NewsPage.css';
import withStyles from '../../decorators/withStyles';
import NewsList from '../NewsList';
import NewsStory from '../NewsStory';

import AltContainer from 'alt/AltContainer';
import NewsStore from '../../stores/NewsStore';

@withStyles(styles)
class NewsPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static propTypes = {
    slug: React.PropTypes.string
  };

  render() {
    let title = 'News';
    this.context.onSetTitle(title);
    return (
      <div className="NewsPage">
        <div className="NewsPage-container">
          <div className="NewsPage-header">
            <h1>{title}</h1>
          </div>
          <div className="NewsPage-body">
            <div className="NewsPage-recentNews">
              <NewsList
                {...this.props}
                title="Recent News" />
            </div>
            <div className="NewsPage-newsStory">
              <AltContainer store={NewsStore}>
                <NewsStory {...this.props} />
              </AltContainer>
            </div>
            <div className="NewsPage-socialMedia">
              <div className="NewsPage-twitter">Twitter</div>
              <div className="NewsPage-instagram">Instagram</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default NewsPage;
