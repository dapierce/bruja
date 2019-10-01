import React from "react"

const Newsletter = ({ children }) => (
  <div className="newsletter">
    <p>Subscribe for updates and loyalty rewards with Bruja!</p>
    <form method="POST" netlify>
      <label for="email">Email address</label>
      <br />
      <div className="newsletter__input">
        <input
          type="text"
          id="email"
          name="email"
          required
          minlength="4"
          size="10"
          placeholder="Email address"
        />
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </div>
)

export default Newsletter
