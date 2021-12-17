import "./MyNav.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const MyNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-center">
        <a className="navbar-brand" href="/home.html">
          <img
            src="netflix_logo.png"
            className="nav-logo-img"
            alt="netflix logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link nav-link-active" href="/home.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Recently Added
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>

          <i className="fas fa-search"></i>
          <a className="nav-link" href="/back-office.html?id=">
            Admin
          </a>
          <i className="fas fa-bell"></i>
          <img src="avatar.png" className="nav-avatar" alt="nav-avatar" />
          <i className="fas fa-caret-down"></i>
        </div>
      </nav>

      <header className="header">
        <div
          className="banner"
          style={{ backgroundImage: `url("squid-game.jpg")` }}
        >
          <div className="banner-info">
            <h1 className="banner-title">SQUID GAMES</h1>
            <div className="banner-icons">
              <button className="banner-btn">Play</button>
              <button className="banner-btn">My List</button>
            </div>
            <div className="banner-description">
              Hundreds of cash-strapped players accept a strange invitation to
              compete in children's games. Inside, a tempting prize awaits —
              with deadly high stakes.
            </div>
          </div>
          <div className="banner-fade"></div>
        </div>
      </header>
    </>
  );
};
export default MyNav;
