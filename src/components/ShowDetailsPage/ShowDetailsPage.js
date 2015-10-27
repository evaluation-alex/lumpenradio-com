import React, { PropTypes } from 'react';
import styles from './ShowDetailsPage.css';
import withStyles from '../../decorators/withStyles';
import NewsList from '../NewsList';

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
    let title = show.title;
    this.context.onSetTitle(title);
    return (
      <div className="ShowDetailsPage">
        <div className="ShowDetailsPage-container">
          <div className="ShowDetailsPage-header">
            <h1>{title}</h1>
          </div>
          <div className="ShowDetailsPage-body">
            <section className="ShowDetailsPage-linksAndInfo">
              <NewsList title="Links/Info" />
            </section>
            <section className="ShowDetailsPage-about">
              <div className="ShowDetailsPage-header">
                <h1>About</h1>
              </div>
              {(show.description) ? show.description : show.id}
            </section>
            <section className="ShowDetailsPage-episodes">
              <NewsList title="Episodes" />
            </section>
          </div>
        </div>
      </div>
    );
  }

}

export default ShowDetailsPage;
