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
    isSelected: React.PropTypes.bool
  }

  render() {
    const { data, isSelected } = this.props;
    data.title = data.title.toLowerCase();

    return (
      <div className="NewsItem">
        <div className="NewsItem-container">
          <a href={`/news/${data.slug}`}
            className={ `NewsItem-link ${(isSelected) ? 'NewsItem-link--selected' : ''}` }
            onClick={Link.handleClick}>
            {data.title}
          </a>
        </div>
      </div>
    );
  }

}

export default NewsItem;

