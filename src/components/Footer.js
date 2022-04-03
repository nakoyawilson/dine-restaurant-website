import Logo from "./Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <address>Marthwaite, Sedbergh Cumbria +00 44 123 4567</address>
      <h2>Open Times</h2>
      <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
      <span>Sat - Sun: 09:00 AM - 11:30 PM</span>
    </footer>
  );
};

export default Footer;
