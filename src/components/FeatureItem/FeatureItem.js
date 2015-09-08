import React from 'react';
import styles from './FeatureItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class FeatureItem {

  render() {
    var { data } = this.props;
    return (
      <div className="FeatureItem">
        <div className="FeatureItem-banner">{data.banner}</div>
        <div className="FeatureItem-content">
          { this.renderHero() }
          <div className="FeatureItem-headline">
            <h1 className="FeatureItem-headlineHeader">
              <a className="FeatureItem-headlineLink" href={data.linkHref}>
                {data.headline}
              </a>
            </h1>
          </div>
          <div className="FeatureItem-excerpt">
            {data.excerpt}
          </div>
        </div>
      </div>
    );
  }
  renderHero() {
    var { data } = this.props;
    return (data.heroHref && data.heroHref !== '')
      ? <div className="FeatureItem-hero">
          <a className="FeatureItem-heroLink" href={data.linkHref}>
            <img className="FeatureItem-heroImage" src={data.heroHref} />
          </a>
        </div>
      : null;
  }
}

export default FeatureItem;

