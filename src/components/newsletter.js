import React from "react"

import styles from "./newsletter.module.css"

const Newsletter = ({ children }) => (
  <div className={styles.newsletter}>
    <p>Subscribe for updates and loyalty rewards with Bruja!</p>
    <form
      name="newsletter"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label for="email">Email address</label>
      <br />
      <div className={styles.newsletter__input}>
        <input
          type="email"
          id="email"
          name="email"
          required
          minlength="4"
          size="10"
          spellCheck="false"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
        />
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </div>
)

export default Newsletter
