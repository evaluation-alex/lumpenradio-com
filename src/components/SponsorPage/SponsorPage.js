import React, { PropTypes } from 'react';
import styles from './SponsorPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SponsorPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Sponsor';
    this.context.onSetTitle(title);
    return (
      <div className="SponsorPage">
        <div className="SponsorPage-container">
          <div className="SponsorPage-header">
            <h1>{title}</h1>
          </div>
          <div className="SponsorPage-body">
            Become a sponsor of Lumpen Radio WLPN 105.5 FM Chicago through underwriting and on-air call-outs. Listeners can also show support for the station by donating to PMI through Public Good.
          </div>
        </div>
      </div>
    );
  }

}

export default SponsorPage;
