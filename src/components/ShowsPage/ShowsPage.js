import React, { PropTypes } from 'react';
import styles from './ShowsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ShowsPage extends React.Component {

  static propTypes = {
    slug: React.PropTypes.string
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Shows';
    this.context.onSetTitle(title);
    const { slug } = this.props;
    return (
      <div className="ShowsPage">
        <div className="ShowsPage-container">
          <div className="ShowsPage-header">
            <h1>{title}</h1>
          </div>
          <div className="ShowsPage-body">
            {(slug) ? slug : 'Almost showtime!'}
          </div>
        </div>
      </div>
    );
  }

}

export default ShowsPage;
