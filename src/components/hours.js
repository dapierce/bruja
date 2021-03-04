import React from "react"

import styles from "./styles/footer.module.css"

const Hours = () => {
  const today = new Date().getDay()

  return (
    <div className={styles.hours}>
      <span className={styles.title}>Hours</span>
      <table>
        <tbody>
          <tr style={today === 1 ? { fontWeight: 600 } : {}}>
            <td>Monday</td>
            <td>Closed</td>
          </tr>
          <tr style={today === 2 ? { fontWeight: 600 } : {}}>
            <td>Tuesday</td>
            <td>11:00 AM - 2:00 PM</td>
          </tr>
          <tr style={today === 3 ? { fontWeight: 600 } : {}}>
            <td>Wednesday</td>
            <td>12:30 PM - 8:00 PM</td>
          </tr>
          <tr style={today === 4 ? { fontWeight: 600 } : {}}>
            <td>Thursday</td>
            <td>Closed</td>
          </tr>
          <tr style={today === 5 ? { fontWeight: 600 } : {}}>
            <td>Friday</td>
            <td>10:30 AM - 6:00 PM</td>
          </tr>
          <tr style={today === 6 ? { fontWeight: 600 } : {}}>
            <td>Saturday</td>
            <td>10:30 AM - 6:00 PM</td>
          </tr>
          <tr style={today === 0 ? { fontWeight: 600 } : {}}>
            <td>Sunday</td>
            <td>10:30 AM - 6:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Hours
