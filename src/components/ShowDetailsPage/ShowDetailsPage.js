import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './ShowDetailsPage.css';
import withStyles from '../../decorators/withStyles';
import NewsList from '../NewsList';

@withStyles(styles)
class ShowDetailsPage extends React.Component {

  static propTypes = {
    show: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      logoHref: PropTypes.string.isRequired,
      hosts: PropTypes.shape({
        artistId: PropTypes.string.isRequired,
        artist: PropTypes.object
      })
    }).isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  // TODO: Adjust image animation to load more smoothly on an unprimed cache
  render() {
    const { show } = this.props;
    let pageTitle = `${show.title} | WLPN`;
    this.context.onSetTitle(pageTitle);
    return (
      <div className="ShowDetailsPage">
        <section className="ShowDetailsPage-linksAndInfo">
          <NewsList title="Links/Info" />
        </section>

        <section className="ShowDetailsPage-about">
          <header className="ShowDetailsPage-aboutHeader">
            <h1>About</h1>
          </header>
          <ReactCSSTransitionGroup
            transitionName="ShowDetailsPage-aboutImage"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <img key={show.id} src={show.logoHref} className="ShowDetailsPage-aboutImage" />
          </ReactCSSTransitionGroup>
          <div className="ShowDetailsPage-aboutHeadline">
            <h2>{show.title}</h2>
          </div>
          {(show.description) ? show.description : show.id}
        </section>

        <section className="ShowDetailsPage-episodes">
          <NewsList title="Episodes" />
        </section>
      </div>
    );
  }

}

export default ShowDetailsPage;
