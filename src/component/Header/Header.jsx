import "./Header.css";

function Header() {
  return (
    <div className="header-files">
      <div className="header-container">
        <h3 className="header-logo">Lucy wambui</h3>
        <nav className="navigation-links">
          <a href="#">home</a>
          <a href="#">about me</a>
          <a href="#">skills</a>
          <a href="#">projects</a>
          <a href="#">contact me</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
