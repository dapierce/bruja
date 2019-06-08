import React from "react";
import { StaticQuery, graphql } from "gatsby";

import bookStyles from "./book-list.module.css";

import profilePicTisha from "../images/tisha-profile.jpg"
import profilePicHilary from "../images/hilary-profile.jpg"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            bookingLink
            hilaryBookingLink
          }
        }
      }
    `}
    render={data => (
      <div className={bookStyles.container}>
        <h2>
          Book with which Stylist?
        </h2>
        <div>
          <ul className={bookStyles.stylistList}>
              <a href={data.site.siteMetadata.bookingLink}><li className={bookStyles.stylist}>
              <img
                className={bookStyles.photo}
                src={profilePicTisha}
                alt="Tisha"
              />
          Tisha
          </li>
          </a>
              <a href={data.site.siteMetadata.hilaryBookingLink}>
                <li className={bookStyles.stylist}>
              <img
                className={bookStyles.photo}
                src={profilePicHilary}
                alt="Hilary"
              />Hilary</li></a>
          </ul>
        </div>
      </div>
    )}
  />
);
