import React from "react"

// TODO: make forms work for netlify: https://www.netlify.com/docs/form-handling/#javascript-rendered-forms

const Newsletter = ({ children }) => (
  <div className="newsletter">
    <p>Subscribe for updates and loyalty rewards with Bruja!</p>
    <form method="POST" netlify>
      <label for="email">Email address</label>
      <br />
      <div className="newsletter__input">
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
