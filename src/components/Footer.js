import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-container">
          <p className="pantiket">Pantiket</p>
          <div className="footer-logo-container">
            <div className="phone-div">
              <a href="tel:+2348123456789">
                <img src="/image/Icon/phone-call.svg.svg" alt="phone" />
              </a>
              <a href="tel:+2348123456789" className="contact-text">
                +234 812 345 6789
              </a>
            </div>
            <div className="mail-div">
              <a href="mailto:hello@pantiket.ng">
                <img src="/image/Icon/mail.svg.svg" alt="mail" />
              </a>
              <a href="mailto:hello@pantiket.ng" className="contact-text">
                hello@pantiket.ng
              </a>
            </div>
            <div className="footer-socials">
              <img
                src="/image/Icon/bxl-linkedin-square.svg.svg"
                alt="linkedin"
              />
              <img
                src="/image/Icon/bxl-whatsapp-square.svg.svg"
                alt="whatsapp"
              />
              <img src="/image/Icon/bxl-facebook-square.svg.svg" alt="fb" />
              <img
                src="/image/Icon/bxl-instagram-alt.svg.svg"
                alt="instagram"
              />
              <img src="/image/Icon/bxl-twitter.svg.svg" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-small">
        <small className="footer-text">
          2019 © All rights reserved by BoyePanthera.com
        </small>
        <small className="footer-text">Design with ❤️ by BlaqMac Design</small>
      </div>
    </footer>
  );
}

export default Footer;
