import React from 'react'
import ClimbingImg from '../assets/images/SunsetClimbing.jpeg'

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero__image" src={ClimbingImg} alt="Perservering the climb of a mountain" />
    </div>
  )
}
