import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function sociallinks() {
  return <div className="sociallinks">
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://github.com/ArielChen33"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/wan-qi-chen-178147227/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <br></br>
      <br></br>
      <hr></hr>
    </div>

  </div>
}
