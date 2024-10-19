import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-files">
      <div className="header-container">
        <h3 className="header-logo">Lucy wambui</h3>
        <nav className="navigation-links">
          <Link to="/">home</Link>
          <Link to="/about">about me</Link>
          <Link to="/skills">skills</Link>
          <Link to="projects">projects</Link>
          <Link to="contact">contact me</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
