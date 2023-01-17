import logo from "../images/logo_mesto.svg";

function Header() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
      </header>
    </div>
  );
}

export default Header;
