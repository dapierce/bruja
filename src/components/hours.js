import React from "react"

import * as footerStyles from "./styles/footer.module.css"

const Hours = () => {
  const today = new Date().getDay()

  return (
    <div className={footerStyles.hours}>
      <span className={footerStyles.title}>Hours</span>
      <table
        vocab="https://schema.org/"
        property="openingHoursSpecification"
        typeof="OpeningHoursSpecification"
      >
        <tbody>
          <tr
            style={today === 1 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Monday"
          >
            <td>Monday</td>
            <td>
              <time property="opens" content="12:00:00">
                12:00 PM
              </time>{" "}
              -{" "}
              <time property="closes" content="19:00:00">
                7:00 PM
              </time>
            </td>
          </tr>
          <tr
            style={today === 2 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Tuesday"
          >
            <td>Tuesday</td>
            <td>
              <time property="opens" content="11:00:00">
                11:00 AM
              </time>{" "}
              -{" "}
              <time property="closes" content="14:00:00">
                2:00 PM
              </time>
            </td>
          </tr>
          <tr
            style={today === 3 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Wednesday"
          >
            <td>Wednesday</td>
            <td>
              <time property="opens" content="12:30:00">
                12:30 PM
              </time>{" "}
              -{" "}
              <time property="closes" content="20:00:00">
                8:00 PM
              </time>
            </td>
          </tr>
          <tr
            style={today === 4 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Thursday"
          >
            <td>Thursday</td>
            <td>
              <time property="opens" content="12:00:00">
                12:00 PM
              </time>{" "}
              -{" "}
              <time property="closes" content="19:00:00">
                7:00 PM
              </time>
            </td>
          </tr>
          <tr
            style={today === 5 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Friday"
          >
            <td>Friday</td>
            <td>
              <time property="opens" content="10:30:00">
                10:30 AM
              </time>{" "}
              -{" "}
              <time property="closes" content="18:00:00">
                6:00 PM
              </time>
            </td>
          </tr>
          <tr
            style={today === 6 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Saturday"
          >
            <td>Saturday</td>
            <td>
              <time property="opens" content="10:30:00">
                10:30 AM
              </time>{" "}
              -{" "}
              <time property="closes" content="18:00:00">
                6:00 PM
              </time>
            </td>
          </tr>
          <tr
            style={today === 0 ? { fontWeight: 600 } : {}}
            property="dayOfWeek"
            href="https://schema.org/Sunday"
          >
            <td>Sunday</td>
            <td>
              <time property="opens" content="10:30:00">
                10:30 AM
              </time>{" "}
              -{" "}
              <time property="closes" content="18:00:00">
                6:00 PM
              </time>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Hours
