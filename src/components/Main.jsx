import React, { Suspense, lazy } from 'react'
import Hiking from '../assets/images/FourGuysHiking.jpg';
import LogoNoText from '../assets/images/logo-no-background-no-text.png'

export default function Main() {
  return (
    <section className="main">
      <div className="main__header">
        <div className="main__header__title">
          <img src={LogoNoText} alt="Empower Recovery logo" /> 
          <h1>Empower Recovery</h1>
        </div>
        <h4>One of the Denver Metro's premiere tranistional sober living facilities.</h4>
        <hr/>
        <hr/>
      </div>
      <div className="main__description-container">
        <img id="main-hiking" src={Hiking} alt="Four guys hiking empowering each other to finish the hike."/>
        <div className="main__description-container__description">
            <h2>Empowering Each Others Soberity</h2>
            <p>Join us on your journey to recovery. We offer a community of support to men in transitional living through structure, accountability, and camaraderie. Allow us to assist you in your journey to a new way of thinking and living. </p>
        </div>
      </div>
      <div className="main__benefits">
        <h2>Benefits of Transitional Sober Living</h2>
        <ul className="main__benefits--list">
          <li>Provides structure which can be helpful during the transition between treatment and independent living</li>
          <li>Community of like minded peers provide support and feedback</li>
          <li>Accountability of residents by requiring to stay substance free</li>
          <li>People who live in a sober environment after treatment are less likely to relapse than people who don’t</li>
          <li>Maintain momentum after discharging from rehab</li>
        </ul>
      </div>
    </section>
  )
}
