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
        artist: PropTypes.shape({
          name: PropTypes.string.isRequired,
          bio: PropTypes.string
        })
      })
    }).isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  // TODO: Adjust image animation to load more smoothly
  //   - Add cache headers to AWS
  //   - Compress and progressively load JPG images
  render() {
    const { show } = this.props;

    let pageTitle = `${show.title} | WLPN`;
    this.context.onSetTitle(pageTitle);

    // TODO: Add inflection to host header dependent on number of hosts
    return (
      <div className="ShowDetailsPage">
        <section className="ShowDetailsPage-hostInfo">
          <header className="ShowDetailsPage-hostInfo__header">
            <h1>Hosts</h1>
          </header>
          {this._renderHostInfo.call(this)}
        </section>

        <section className="ShowDetailsPage-about">
          <header className="ShowDetailsPage-about__header">
            <h1>About</h1>
          </header>
          <ReactCSSTransitionGroup
            transitionName="ShowDetailsPage-aboutImage"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <img key={show.id} src={show.logoHref} className="ShowDetailsPage-aboutImage__image" />
          </ReactCSSTransitionGroup>
          <div className="ShowDetailsPage-aboutHeadline">
            <h2>{show.title}</h2>
          </div>
          {(show.description) ? show.description : show.id}
        </section>

        {this._renderEpisodes.call(this)}
      </div>
    );
  }

  // TODO: Add Read More/Less feature for wordy bios
  _renderHostInfo() {
    const { hosts } = this.props.show;
    if (!hosts) return null;
    return (
      <div className="ShowDetailsPage-hostInfoList">
        {hosts.map((host, i) => {
          let hostName = (host.artist) ? host.artist.name : host.artistId
          return (
            <div key={i} className="ShowDetailsPage-hostInfoItem">
              <h2>{hostName}</h2>
              {(host.artist.bio) ? <div>{host.artist.bio}</div> : null}
            </div>
          );
        })}
      </div>
    );
  }

  _renderEpisodes() {
    const { episodes } = this.props.show;
    if (!episodes) return null;
    return (
      <section className="ShowDetailsPage-episodes">
        <header className="ShowDetailsPage-episodes__header">
          <h1>Episodes</h1>
        </header>
        <div className="ShowDetailsPage-episodesList">
          {episodes.map((episode, i) => {
            const { title, linkHref } = episode;
            return (
              <div key={i} className="ShowDetailsPage-episodesItem">
                {title} - <a href={linkHref} className="ShowDetailsPage-episodesItem__a">Download</a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ShowDetailsPage;
