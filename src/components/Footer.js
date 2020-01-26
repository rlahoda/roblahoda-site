import React from "react";
import SvgEmail from "./svg/Email";
import SvgTwitter from "./svg/Twitter";
import SvgGithub from "./svg/Github";
import SvgCodepen from "./svg/Codepen";
import SvgLinkedIn from "./svg/LinkedIn";
import SvgDrupal from "./svg/Drupal";

function Footer() {
  return (
    <footer>
      <div className="footerLinks__container">
        <h4 className="">Say Hi!</h4>
        <ul className="noList noListBlock footerLinks__list">
          <li className="footerLinks__list--item">
            <a
              className="footerLinks__link"
              href="mailto:rob@roblahoda.com"
              // onClick="trackOutboundLink('rob@roblahoda.com'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgEmail className="footerLinks__link--icon" />
              <p className="">Email</p>
            </a>
          </li>
          <li className="footerLinks__list--item">
            <a
              className="footerLinks__link"
              href="https://twitter.com/rlahoda"
              // onClick="trackOutboundLink('https://twitter.com/rlahoda'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgTwitter className="footerLinks__link--icon" />
              <p className="">Twitter</p>
            </a>
          </li>
          <li className="footerLinks__list--item">
            <a
              className="footerLinks__link"
              href="https://github.com/rlahoda"
              // onClick="trackOutboundLink('https://github.com/rlahoda'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgGithub className="icons footerLinks__link--icon" />
              <p className="">Github</p>
            </a>
          </li>
          <li className="footerLinks__list--item">
            <a
              className="footerLinks__link"
              href="https://codepen.io/rlahoda/"
              // onClick="trackOutboundLink('https://codepen.io/rlahoda/'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgCodepen className="icons footerLinks__link--icon" />
              <p className="">Codepen</p>
            </a>
          </li>
          <li className="footerLinks__list--item">
            <a
              className="footerLinks__link"
              href="https://www.drupal.org/u/rlahoda/"
              // onClick="trackOutboundLink('https://www.drupal.org/u/rlahoda/'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgDrupal className="icons footerLinks__link--icon" />
              <p className="">Drupal.org</p>
            </a>
          </li>
          <li className="footerLinks__list--item">
            <a
              className="footerLinks__link"
              href="https://www.linkedin.com/in/robert-lahoda/"
              // onClick="trackOutboundLink('https://www.linkedin.com/in/robert-lahoda/'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgLinkedIn className="icons footerLinks__link--icon" />
              <p className="">Linkedin</p>
            </a>
          </li>
        </ul>
        <p className="smallText">
          Copyright ©2020 Rob Lahoda - Logos are property of their respective
          owners.
        </p>
      </div>
      <script src="/vendor/prism/prism.js"></script>
    </footer>
  );
}

export default Footer;
