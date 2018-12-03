import React from 'react';

import profileStyles from "./profile.module.css";
import layoutStyles from "./layout.module.css";
import profilePicTisha from "../components/img/tisha-profile.jpg"

export default ({ children }) => (
  <div>
    <div id="profile" className={layoutStyles.anchor}></div>
    <div className={profileStyles.profileContainer}>
    <h2 className={profileStyles.name}>Tisha</h2>
    <h3 className={profileStyles.profileTitle}>Stylist and head bruja</h3>
    <img className={profileStyles.profileImg} src={profilePicTisha} alt="Tisha"/>
    <p className={profileStyles.profileDesc}>
      A musician, painter and stylist, Tisha has many creative persuits.
      In all of her work, she brings a keen eye and attention to detail. 
      She is mindful of her community and gives back through volunteering and 
      fundraising.
    </p>
    <ul className={profileStyles.buttonList}>
      <li><a className={profileStyles.button} href="/">Make an appointment</a></li>
      <li><a className={profileStyles.button} href="https://tishaturner.com">Portfolio</a></li>
    </ul>
  </div>
  </div>
)
