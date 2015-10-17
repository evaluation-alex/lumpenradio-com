import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Location from '../../core/Location';

const INTERNAL_LINKS = [
  {body: 'Home', href: '/'},
  {body: 'Schedule', href: '/schedule'},
  {body: 'Shows', href: '/shows'},
  {body: 'News', href: '/news'},
  {body: 'Events', href: '/events'},
  {body: 'Info', href: '/info'},
  {body: 'Sponsor', href: '/sponsor'}
]

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      location: {}
    }
  }

  componentDidMount() {
    this._unlisten = Location.listen((location) => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this._unlisten();
  }

  render() {
    let { location } = this.state;
    let className;
    return (
      <div className={classNames(this.props.className, 'Navigation')}>
        {INTERNAL_LINKS.map((link, i) => {
          let { pathname } = location;

          // make text lower-case for better display in small-caps
          (typeof link.body === 'string')
            ? link.body = link.body.toLowerCase()
            : null;

          // set class names, highlighting the selected link by location
          className = classNames({
            'Navigation-link': true,
            "Navigation-link--highlight": () => {
              if (!pathname) return;
              if (link.href === '/') {
                return link.href === pathname;
              } else {
                return pathname.startsWith(link.href);
              }
            }()
          })
          return (
            <a key={i} className={className} href={link.href} onClick={Link.handleClick}>{link.body}</a>
          )
        })}
        <a className="Navigation-link" href="http://underthecounterculture.bigcartel.com" target="_blank">shop</a>
        <a className="Navigation-link" href="http://www.lumpen.com" target="_blank">lumpen.com</a>
      </div>
    );
  }

}

export default Navigation;
