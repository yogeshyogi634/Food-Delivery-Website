import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo1} alt="" className="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto, voluptas. Tenetur at, ipsam, minus dolore modi aliquam
            adipisci quidem dolorem error ipsum rerum tempora.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9876543210</li>
            <li>contact@swaadseva.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © SwaadSeva.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
