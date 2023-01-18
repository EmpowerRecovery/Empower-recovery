import React, { Suspense, lazy } from 'react'
import Hiking from '../assets/images/FourGuysHiking.jpg';
import LogoNoText from '../assets/images/logo-no-background-no-text.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <section className="main">
      <div className="main__header">
        {/* <div className="main__header__title">
          <img src={LogoNoText} alt="Empower Recovery logo" /> 
          <h1>Empower Recovery</h1>
        </div>
        <h4>Empowering you to thrive in your continued oberity.</h4> */}
      </div>
      <div className="main__description-container">
        <img id="main-hiking" src={Hiking} alt="Four guys hiking empowering each other to finish the hike."/>
        <div className="main__description-container__description">
        <div className="main__header__title">
          <img src={LogoNoText} alt="Empower Recovery logo" /> 
          <h1>Empower Recovery</h1>
        </div>
          <h3>Empowering Each Others Soberity</h3>
            <p>Join us on your journey to recovery. We offer a community of support to men in transitional living through structure, accountability, and camaraderie. Allow us to assist you in your journey to a new way of thinking and living. </p>
              <a id="call-us" className="button" href="tel:+17205309809">
                <FontAwesomeIcon id="phone" icon={faPhone} />
                <h4>720-530-9809</h4>
              </a>
        </div>
      </div>
      <div className="main__benefits-container">
      <div className="main__benefits">
        <h3>Benefits of Transitional Sober Living</h3>
        <ul className="main__benefits--list">
          <li><span>Provides structure which can be helpful during the transition between treatment and independent living</span></li>
          <li><span>Community of like minded peers provide support and feedback</span></li>
          <li><span>Accountability of residents by requiring to stay substance free</span></li>
          <li><span>People who live in a sober environment after treatment are less likely to relapse than people who don’t</span></li>
          <li><span>Maintain momentum after discharging from rehab</span></li>
        </ul>
      </div>
      </div>
    </section>
  )
}
