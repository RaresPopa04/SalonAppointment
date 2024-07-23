import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

import "../css/Footer.css";
const Footer = () => {

    const redirect = (url) => {
        console.log(url);
        window.open(url, "_blank");
    }
    return (
        <div className="footer">
            <div className="footer-text">
                <div className="footer-title">
                    Contact
                </div>
                <div className="footer-description">
                    <div className="phone">
                        <FontAwesomeIcon icon = {faPhoneAlt}></FontAwesomeIcon>  0754 035 763
                    </div>
                    <div className="email">
                        <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon>
                        <a href="mailto:emai" className="email-link">
                            flavianailtech@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                <div className="footer-title">
                    Program
                </div>
                <div className="footer-description">
                    <div className="phone">
                        <FontAwesomeIcon icon = {faClock}></FontAwesomeIcon>
                        Luni - Vineri: 09-18
                    </div>
                    <div className="email">
                        <FontAwesomeIcon icon = {faClock}></FontAwesomeIcon> 
                        Sâmbătă - Duminică: Închis
                    </div>
                </div>
            </div>
            <div className="footer-text">
                <div className="footer-title">
                    Social Media
                </div>
                <div className="footer-description">
                    <div className="email instagram" >
                        <FontAwesomeIcon icon = {faInstagram}></FontAwesomeIcon>
                        {/* open a in a new tab */}


                        <a href = "https://www.instagram.com/flavianailtech?igsh=MWltcXBjbHdkend2Zw%3D%3D&utm_source=qr" target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;