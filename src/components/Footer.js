import Logo from "./Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <address className="container">
        <span className="footer-detail">Marthwaite, Sedbergh</span>
        <span className="footer-detail">Cumbria</span>
        <span className="footer-detail">+00 44 123 4567</span>
      </address>
      <h2 className="subheading footer-detail">Open Times</h2>
      <span className="footer-detail container">
        Mon - Fri: 09:00 AM - 10:00 PM
      </span>
      <span className="footer-detail container">
        Sat - Sun: 09:00 AM - 11:30 PM
      </span>
    </footer>
  );
};

export default Footer;
