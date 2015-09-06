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
        <a className="Navigation-link Navigation-link--highlight" href="/current" onClick={Link.handleClick}>current</a>
        <a className="Navigation-link Navigation-link--highlight" href="/schedule" onClick={Link.handleClick}>schedule</a>
        <a className="Navigation-link Navigation-link--highlight" href="/shows" onClick={Link.handleClick}>shows</a>
        <a className="Navigation-link Navigation-link--highlight" href="/news" onClick={Link.handleClick}>news</a>
        <a className="Navigation-link Navigation-link--highlight" href="/events" onClick={Link.handleClick}>events</a>
        <a className="Navigation-link Navigation-link--highlight" href="/info" onClick={Link.handleClick}>info</a>
        <a className="Navigation-link Navigation-link--highlight" href="/sponsor" onClick={Link.handleClick}>sponsor</a>
        <a className="Navigation-link Navigation-link--highlight" href="/shop" onClick={Link.handleClick}>shop</a>
        <a className="Navigation-link Navigation-link--highlight" href="http://www.lumpen.com" onClick={Link.handleClick}>lumpen.com</a>
      </div>
    );
  }

}

export default Navigation;
