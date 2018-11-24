import React from 'react';

import profileStyles from "./profile.module.css";
import profilePicTisha from "../components/img/tisha-profile.jpg"

export default ({ children }) => (
  <div id="profile" className={profileStyles.profileContainer}>
    <h2 className={profileStyles.name}>Tisha</h2>
    <h3>Stylist and head bruja</h3>
    <img className={profileStyles.profileImg} src={profilePicTisha} alt="Tisha"/>
    <p>
      A musician, painter and stylist, Tisha has many creative persuits.
      In all of her work, she brings a keen eye and attention to
      detail.
      <ul style={{ gridColumnStart: `2`}}>
        <li><a className={profileStyles.button} href="/">Make an appointment</a></li>
        <li><a className={profileStyles.button} href="https://tishaturner.com">Portfolio</a></li>
      </ul>
    </p>

  </div>
)

