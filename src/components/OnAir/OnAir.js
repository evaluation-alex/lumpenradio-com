/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './OnAir.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import OnAirList from '../OnAirList';

let data = [
  {startTime: '2:00', endTime: '4:00', headline: 'Dj\'s Rickshaw & Ledeuce / Future Past Music', linkHref: "http://habd.as"},
  {startTime: '5:00', endTime: '6:00', headline: 'Thrift Score with Joe Bryl and guests', linkHref: "http://habd.as"},
  {startTime: '6:00', endTime: '8:00', headline: 'Rudio with Gabriel Feijoo', linkHref: "http://habd.as"}
]

@withStyles(styles)
class OnAir {

  render() {
    return (
      <div className="OnAir">
        <div className="OnAir-container">
          <OnAirList data={data} />
        </div>
      </div>
    );
  }

}

export default OnAir;

