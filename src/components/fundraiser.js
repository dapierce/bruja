import React from 'react';

import fundraiserStyles from "./fundraiser.module.css";
import layoutStyles from "./layout.module.css";

export default ({ children }) => (
  <div>
    <a id="fundraiser" className={layoutStyles.anchor}></a>
    <div className={fundraiserStyles.container}>
    <h2 className={fundraiserStyles.header}>Bruja Salon Fundraiser</h2>
    <p className={fundraiserStyles.copy}>I need your help to make this salon come to life!</p>
    <h3 className={fundraiserStyles.header}>Holiday Truffle Fundraiser</h3>
    <p className={fundraiserStyles.copy}>Buy an amazing box of chocolates hand made by Margot and help bring the project off the ground.<br/>
      $35 for a box, with $30 of proceeds going directly to start the salon.<br/>
      <ul className={fundraiserStyles.buttonList}>
        <li><a className={fundraiserStyles.button} href="https://docs.google.com/forms/d/e/1FAIpQLScTAwNHuWkb2eLFTNQznBJ7L3DJvbYk3RQK0fpeLCq_zuOYtw/viewform">Order truffles!</a></li>
      </ul>
    </p>
    <h3 className={fundraiserStyles.header}>Kiev Fundraiser</h3>
    <p className={fundraiserStyles.copy}>Contribute to a loan for remodeling costs through Keiv.<br/>
      Details on the way...
    </p>
  </div>
  </div>
)