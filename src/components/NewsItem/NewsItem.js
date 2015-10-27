import React from 'react';
import styles from './NewsItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class NewsItem extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      postDate: React.PropTypes.string,
      slug: React.PropTypes.string,
      title: React.PropTypes.string
    }),
    isHighlighted: React.PropTypes.bool
  }

  render() {
    const { data, isHighlighted } = this.props;

    // make text lower-case for better display in small-caps
    let title = data.title.toLowerCase();

    return (
      <div className="NewsItem">
        <div className="NewsItem-container">
          <a href={`/news/${data.slug}`}
            className={ `NewsItem-link ${(isHighlighted) ? 'NewsItem-link--highlight' : ''}` }
            onClick={Link.handleClick}>
            {title}
          </a>
        </div>
      </div>
    );
  }

}

export default NewsItem;

