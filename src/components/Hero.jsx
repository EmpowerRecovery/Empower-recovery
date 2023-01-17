import React from 'react'
import Header from './Header'
import ClimbingImg from '../assets/images/SunsetClimbing.jpeg'

export default function Hero() {
  return (
    <div className="hero">
      <Header />
      <img className="hero__image" src={ClimbingImg} alt="Perservering the climb of a mountain" />
      <h4>One of the Denver Metro's premiere tranistional sober living facilities.</h4>
    </div>
  )
}
