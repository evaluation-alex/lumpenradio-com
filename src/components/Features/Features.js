/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Features.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import FeatureList from '../FeatureList';

let data = [
  {banner: 'Friday at 2PM - Shows', heroHref: 'http://placehold.it/350x350', headline: 'Catie Olson / Jabberwocky', excerpt: "Mixes from a vast array of music samples and recorded sounds are layered, modified and compiled together to portray parts of the nonsense poem by Lewis Carroll, Jabberwocky, from 1872. These recordings will be whimsical, strange and captivating, In addition Catie Olsen will create a small drawing to pair with each radio set.", linkHref: "http://habd.as"},
  {banner: 'Lumpen Magazine - V.25 Issue', heroHref: '', headline: 'Top 40 Cholos', excerpt: "Bacon ipsum dolor amet doner short loin sausage sirloin, meatball fatback chuck strip steak jowl ribeye ham hock. Tri-tip spare ribs biltong, strip steak chicken andouille prosciutto turkey hamburger kevin chuck porchetta boudin shank. Tongue kielbasa tri-tip doner. Kielbasa fatback andouille pig chuck tail shank cupim ham. Flank alcatra ball tip kielbasa spare ribs ham short loin chuck tongue andouille. Pancetta landjaeger pork chop short loin, beef salami tail meatball chuck flank strip steak. Turkey corned beef short ribs ball tip pastrami spare ribs pork chop sausage pancetta cow pork belly ham hock meatloaf.", linkHref: "http://habd.as"},
]

@withStyles(styles)
class Features {

  render() {
    return (
      <div className="Features">
        <div className="Features-container">
          <FeatureList data={data} />
        </div>
      </div>
    );
  }

}

export default Features;

