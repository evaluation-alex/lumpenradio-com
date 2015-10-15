import React, { PropTypes } from 'react';
import styles from './InfoPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class InfoPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Info';
    this.context.onSetTitle(title);
    return (
      <div className="InfoPage">
        <div className="InfoPage-container">
          <div className="InfoPage-header">
            <h1>{title}</h1>
          </div>
          <div className="InfoPage-body">
            About Lumpen Radio
          </div>
        </div>
      </div>
    );
  }

}

export default InfoPage;
