import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')}>
        <a className="Navigation-link Navigation-link--highlight" href="/" onClick={Link.handleClick}>home</a>
        <a className="Navigation-link" href="/schedule" onClick={Link.handleClick}>schedule</a>
        <a className="Navigation-link" href="/shows" onClick={Link.handleClick}>shows</a>
        <a className="Navigation-link" href="/news" onClick={Link.handleClick}>news</a>
        <a className="Navigation-link" href="/events" onClick={Link.handleClick}>events</a>
        <a className="Navigation-link" href="/info" onClick={Link.handleClick}>info</a>
        <a className="Navigation-link" href="/sponsor" onClick={Link.handleClick}>sponsor</a>
        <a className="Navigation-link" href="http://underthecounterculture.bigcartel.com" target="_blank">shop</a>
        <a className="Navigation-link" href="http://www.lumpen.com" target="_blank">lumpen.com</a>
      </div>
    );
  }

}

export default Navigation;
