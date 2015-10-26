import React, { PropTypes } from 'react';
import styles from './ShowDetailsPage.css';
import withStyles from '../../decorators/withStyles';

import AltContainer from 'alt/AltContainer';
import ShowsStore from '../../stores/ShowsStore';

@withStyles(styles)
class ShowDetailsPage extends React.Component {

  static propTypes = {
    show: React.PropTypes.object.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    const { show } = this.props;
    let title = `Shows - ${show.title}`;
    this.context.onSetTitle(title);
    return (
      <div className="ShowDetailsPage">
        <div className="ShowDetailsPage-container">
          <div className="ShowDetailsPage-header">
            <h1>{title}</h1>
          </div>
          <div className="ShowDetailsPage-body">
            {(show.description) ? show.description : show.id}
          </div>
        </div>
      </div>
    );
  }

}

export default ShowDetailsPage;
