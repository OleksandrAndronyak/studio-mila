import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarToggleExternalContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/facial">
              Facial
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/body">
              Corpo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Foot">
              Pés
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/Laser">
              Depilação Laser
            </Link>
          </li>
          {/* <li className="nav-language">
            <select className="nav-link border-0 ml-1 mr-5">
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
