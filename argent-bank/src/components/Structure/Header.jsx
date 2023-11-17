import { Link } from "react-router-dom";
import LogoArgentBank from "../../assets/argentBankLogo.png"
import "../../styles/Header/Header.css"

function Header() {
  return (
    <header>
    <nav className="main-nav">
    <Link to = "/" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={LogoArgentBank}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
      </Link>
    <div>
      <Link to = "/Sign-In" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
  </header>
  );
}

export default Header;