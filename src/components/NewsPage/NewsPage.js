import React, { PropTypes } from 'react';
import styles from './NewsPage.css';
import withStyles from '../../decorators/withStyles';
import NewsList from '../NewsList'

@withStyles(styles)
class NewsPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
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
            <NewsList className="NewsPage-recentNews" />
            <div className="NewsPage-newsStory">Story</div>
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
