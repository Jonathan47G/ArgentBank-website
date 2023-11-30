import { Link } from "react-router-dom";
import LogoArgentBank from "../../assets/argentBankLogo.webp"
import "../../styles/Header/Header.min.css"
import NavBar from "../features/NavBar";

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
    <NavBar />
    
  </nav>
  </header>
  );
}

export default Header;
