import React from 'react';

import profileStyles from "./profile.module.css";
import profilePicTisha from "../components/img/tisha-profile.jpg"

export default ({ children }) => (
  <div id="profile" className={profileStyles.profileContainer}>
    <h2>Tisha</h2>
    <h3>Stylist and head bruja</h3>
    <img className={profileStyles.profileImg} src={profilePicTisha} alt="Tisha"/>
    <p>
      A musician, painter and stylist, Tisha has many creative persuits.
      In all of her work, she brings a keen eye and attention to
      detail.
    </p>
    <ul>
      <li><a href="/">Make an appointment</a></li>
      <li><a href="https://tishaturner.com">Portfolio</a></li>
    </ul>
  </div>
)

