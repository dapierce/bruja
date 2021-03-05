import React from "react"

import * as newsletterStyles from "./styles/newsletter.module.css"

const Newsletter = ({ children }) => (
  <div className={newsletterStyles.newsletter}>
    <p>Subscribe for updates and loyalty rewards with Bruja!</p>
    <form
      name="newsletter"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="bot-field" />
      <label htmlFor="email">Email address</label>
      <br />
      <div className={newsletterStyles.newsletter__input}>
        <input
          className={newsletterStyles.email}
          type="email"
          id="email"
          name="email"
          aria-label="Email address"
          required
          minLength="4"
          size="10"
          spellCheck="false"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
        />
        <input
          type="submit"
          className={newsletterStyles.button}
          aria-label="Sign Up"
          value="Sign Up"
        />
      </div>
    </form>
  </div>
)

export default Newsletter
