import React from 'react';
import styles from './OnAirList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import OnAirItem from '../OnAirItem';

@withStyles(styles)
class OnAirList {

  render() {
    var items = this.props.data.map( (item) => {
      return (
        <OnAirItem data={item} />
      )
    });
    return (
      <div className="OnAirList">
        <div className="OnAirList-container">
          <div className="OnAirList-header">
            <h1>On Air</h1>
          </div>
          <div className="OnAirList-items">
            {items}
          </div>
        </div>
      </div>
    );
  }

}

export default OnAirList;

