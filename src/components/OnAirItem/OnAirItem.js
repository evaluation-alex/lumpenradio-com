import React from 'react';
import styles from './OnAirItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class OnAirItem extends React.Component {

  render() {
    var { data } = this.props;
    return (
      <div className="OnAirItem">
        <div className="OnAirItem-banner">{data.startTime} - {data.endTime}</div>
        <div className="OnAirItem-content">
          <div className="OnAirItem-headline">
            <h1 className="OnAirItem-headlineHeader">
              <a className="OnAirItem-headlineLink" href={data.linkHref}>
                {data.headline}
              </a>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default OnAirItem;

