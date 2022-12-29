import React from 'react'
import LogoOrgangeNoBack from '../assets/images/logo-no-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

let Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <img src={ LogoOrgangeNoBack } alt="Empowere Recovery Logo in Orange" />
                <div className='footer__contact'>
                    <h4>Contact Us</h4>
                    <p>(720)530-9809</p>
                    <p>chris@empowerrecoveryhomes.com</p>
                </div>
                <div className='footer__socials'>
                    <h4>Empower Recovery</h4>
                    <div className='footer__socials--logos'>
                        <a href="https://google.com"><FontAwesomeIcon icon={ faFacebook } /></a>
                        <a href="https://google.com"><FontAwesomeIcon icon={ faInstagram } /></a>
                        <a href="https://google.com"><FontAwesomeIcon icon={ faTwitter } /></a>
                    </div>
                </div>
            </div>
            <p>Copyright © Empower Recovery Homes, LLC 2023 </p>
        </footer>
    )
}

export default Footer;