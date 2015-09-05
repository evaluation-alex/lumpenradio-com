/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')}>
        <a className="Navigation-link Navigation-link--highlight" href="/current" onClick={Link.handleClick}>Current</a>
        <a className="Navigation-link Navigation-link--highlight" href="/schedule" onClick={Link.handleClick}>Schedule</a>
        <a className="Navigation-link Navigation-link--highlight" href="/shows" onClick={Link.handleClick}>Shows</a>
        <a className="Navigation-link Navigation-link--highlight" href="/news" onClick={Link.handleClick}>News</a>
        <a className="Navigation-link Navigation-link--highlight" href="/events" onClick={Link.handleClick}>Events</a>
        <a className="Navigation-link Navigation-link--highlight" href="/info" onClick={Link.handleClick}>Info</a>
        <a className="Navigation-link Navigation-link--highlight" href="/sponsor" onClick={Link.handleClick}>Sponsor</a>
        <a className="Navigation-link Navigation-link--highlight" href="/shop" onClick={Link.handleClick}>Shop</a>
        <a className="Navigation-link Navigation-link--highlight" href="http://www.lumpen.com" onClick={Link.handleClick}>Lumpen.com</a>
      </div>
    );
  }

}

export default Navigation;
