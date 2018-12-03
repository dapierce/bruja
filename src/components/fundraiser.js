import React from 'react';

import fundraiserStyles from "./fundraiser.module.css";
import layoutStyles from "./layout.module.css";

export default ({ children }) => (
  <div>
    <div id="fundraiser" className={layoutStyles.anchor}></div>
    <div className={fundraiserStyles.container}>
    <h2 className={fundraiserStyles.header}>Bruja Salon Fundraiser</h2>
    <p className={fundraiserStyles.copy}>I need your help to make this salon come to life!</p>
    <h3 className={fundraiserStyles.header}>More details to follow...</h3>
  </div>
  </div>
)