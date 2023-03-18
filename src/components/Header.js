import logo from "../images/logo_mesto.svg";
import {MyInfoContext} from "../contexts/MyInfoContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

export default function Header(props) {
  const myInfo = useContext(MyInfoContext);

  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />

        <span style={{color: 'white'}}>{myInfo?.email}</span>
        <Link to={props.linkUrl || '#'} className="header__link" onClick={props.onLinkClick}>{props.linkText}</Link>
      </header>
    </div>
  );
}
