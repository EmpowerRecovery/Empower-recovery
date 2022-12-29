import React from 'react'
import LogoBlack from '../assets/images/logo-no-background-black.png'

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo--img" src={LogoBlack} alt="Empower Recovery Circular Logo" />
      </div>
    </div>
  )
}
