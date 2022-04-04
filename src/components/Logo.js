import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Logo = ({ logoClasses }) => {
  return (
    <Link to="/">
      <img src={logo} alt="Dine logo" className={logoClasses} />
    </Link>
  );
};

export default Logo;
