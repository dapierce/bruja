import React from "react"

const Newsletter = ({ children }) => (
  <div className="newsletter">
    <p>Subscribe for updates and loyalty rewards with Bruja!</p>
    <form>
      <label for="email">Email: </label>
      <br />
      <input
        type="text"
        id="email"
        name="email"
        required
        minlength="4"
        size="10"
        placeholder="Email address"
      />
    </form>
  </div>
)

export default Newsletter
