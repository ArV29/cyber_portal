import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="complaint">
        <div className="helpHeading">Need Help?</div>
        Call on   <a href="tel:+911903" className="phoneNumber">1903</a> or
        File a complaint at
        <a href="https://cybercrime.gov.in/Accept.aspx" className="officialLink">cybercrime.gov.in</a>
      </div>

      <div className="contact">
        Find us at:
        <div className="contactIcons">
          <a href="https://www.facebook.com/ChandigarhCyberCrime/?ti=as"><SiFacebook className="contactIcon" size={"3rem"} /></a>
          <SiInstagram className="contactIcon" size={"3rem"} />
          <a href="https://twitter.com/ChdCyberCell">          <SiTwitter className="contactIcon" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;