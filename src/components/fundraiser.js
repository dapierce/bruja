import React from 'react';

import fundraiserStyles from "./fundraiser.module.css";

export default ({ children }) => (
  <div id="fundraiser" className={fundraiserStyles.container}>
    <h2 className={fundraiserStyles.header}>Bruja Salon Fundraiser</h2>
    <p className={fundraiserStyles.copy}>I need your help to make this salon come to life! More details to follow...</p>
  </div>
)