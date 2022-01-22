import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CovidPage = () => (
  <Layout>
    <Seo />
    <div className="frame_one_column">
      <h1>COVID-19 Information</h1>
      <div className="centered_p">
        <blockquote className="box_block">
          <h4>Before Your Appointment</h4>
          <p>
            Your stylist may reach out to you in advance of your appointment to
            touch base with more specific information relevant to you and your
            upcoming service.
          </p>
          <ul>
            <li>
              All clients and stylists will be required to wear a mask while at
              the salon. Your stylist may also be wearing eye protection for
              further safety precautions.
            </li>
            <li>
              Please arrive on-time for your appointment and allow an additional
              5-10 minutes for check-in.
            </li>
            <li>
              Please come to your appointment alone (no extra guests or
              children) for the time being.
            </li>
          </ul>
        </blockquote>
        <blockquote className="box_block">
          <h4>When You Arrive to the Salon</h4>
          <ul>
            <li>
              Upon arriving to the salon, we will check you in and ask that you
              wait in your car until your stylist is ready to see you.
            </li>
            <li>
              We will continue to practice social distancing of 6 feet in the
              salon (except between you and your stylist during your service).
            </li>
            <li>
              Hugging and handshaking and anything other than the required
              contact to provide your service should be avoided at this time.
            </li>
          </ul>
        </blockquote>
        <blockquote className="box_block">
          <h4>During Your Appointment</h4>
          <ul>
            <li>
              Masks will be mandatory and provided if needed. Do not remove your
              mask during your visit.
            </li>
            <li>
              Only customers receiving a service will be allowed in the salon.
            </li>
            <li>
              No more than 5 people will be allowed in the salon at any one time
            </li>
            <li>
              Each area, all tools, stations and equipment will be sanitized
              and/or disinfected between each client.
            </li>
            <li>
              All stylists have updated certification on Sanitation protocols
              via Barbacide and OSHA.gov
            </li>
            <li>
              Please understand if you are getting a color retouch, you may have
              an up-charge for your color because of the need to use more color
              than usual ($25).
            </li>
            <li>
              Stylists are following strict sanitation and disinfecting
              procedures all day long. These procedures include but are not
              limited to frequent hand washing, disinfecting chairs, styling
              stations, and tools, disinfecting door handles and knobs,
              restrooms, and all high touch areas. Capes and smocks are one-time
              use only, per client.
            </li>
            <li>
              All retail purchases can be made through your stylist, please
              contact your stylist before coming to the salon. They will have
              your purchase bagged and ready as you walk out.
            </li>
            <li>
              If you have an underlying health condition we ask that you wait at
              least 14 days to return to the salon. In addition, if you have
              been ill or around someone who has been ill, please wait 14 days
              to reschedule your appointment.
            </li>
            <li>
              Cancellation/no-show policy - We will not be penalizing for any
              last-minute cancellations due to being sick. However, please
              provide us with information as soon as possible so we can adjust
              our schedules accordingly. We are trying our best to get every
              client back in as soon as possible.
            </li>
            <li>
              Rest Assured, we hope to get back to a new normal and offering
              many of the added value services and extras you have come to
              enjoy.
            </li>
            <li>
              These protocols will continue to be refined and adjusted as needed
              and will keep you informed very step of the way.
            </li>
          </ul>
          <p>
            Thank you so very much for your kindness and support during this
            difficult time in history. We look forward to seeing you soon!
          </p>
        </blockquote>
      </div>
    </div>
  </Layout>
)

export default CovidPage
