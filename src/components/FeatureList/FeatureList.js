import React from 'react';
import styles from './FeatureList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import FeatureItem from '../FeatureItem';

@withStyles(styles)
class FeatureList extends React.Component {

  render() {
    var items = this.props.data.map( (item) => {
      return (
        <FeatureItem data={item} />
      )
    });
    return (
      <div className="FeatureList">
        <div className="FeatureList-container">
          <div className="FeatureList-header">
            <h1>Features</h1>
          </div>
          <div className="FeatureList-items">
            {items}
          </div>
          <a className="FeatureList-moreLink" href="/news">Previous Features →</a>
        </div>
      </div>
    );
  }

}

export default FeatureList;

