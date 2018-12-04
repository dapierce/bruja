import React from 'react';

import fundraiserStyles from "./fundraiser.module.css";
import layoutStyles from "./layout.module.css";

export default ({ children }) => (
  <div>
    <div id="fundraiser" className={layoutStyles.anchor}></div>
    <div className={fundraiserStyles.container}>
    <div className={fundraiserStyles.header}>
      <h2>
        Bruja Salon Fundraiser<br/>
        <span className={layoutStyles.swirlDecor}>~</span><br/>
        <span className={layoutStyles.goldType}>Art Auction</span>
      </h2>
    </div>
    <p className={fundraiserStyles.copy}>
      I need your help to make this salon
      come to life! I am putting my artwork up for auction, check back soon for
      details!
    </p>
  </div>
  </div>
)