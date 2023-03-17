import logo from "../images/logo_mesto.svg";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />

        <Link className="header__link" to={props.linkUrl}>{props.linkText}</Link>
      </header>
    </div>
  );
}

export default Header;
