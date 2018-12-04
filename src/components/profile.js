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
    <div className={profileStyles.profileDesc}>
      <p>
        Tisha has been a hairstylist in Seattle for almost a decade, with
        interests in hair, art, music, nature, fashion and tech. Tisha's 
        keen eye and attention to detail along with her extensive background in
        color theory and continuing education means she brings with every
        service her passion for conjuring the best you.
      </p>
      <p>
        It's not just a glamor it's a transformation!
      </p>
      <ul className={profileStyles.buttonList}>
        <li><a className={profileStyles.button} href="/">Make an appointment</a></li>
        <li><a className={profileStyles.button} href="https://tishaturner.com">Portfolio</a></li>
      </ul>
    </div>
  </div>
  </div>
)
