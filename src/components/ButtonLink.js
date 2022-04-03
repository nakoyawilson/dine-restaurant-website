import { Link } from "react-router-dom";

const ButtonLink = ({ route, linkClasses, textContent }) => {
  return (
    <Link to={route} className={linkClasses}>
      {textContent}
    </Link>
  );
};

export default ButtonLink;
