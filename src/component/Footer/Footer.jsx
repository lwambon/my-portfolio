import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const GithubUrl = "https://github.com/lwambon";
const LinkedinUrl = "https://www.linkedin.com/in/lucy-wambui-225965242";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <p className="footer-details">
          &copy; All rights reserved. Lucy Wambui
        </p>
        <div className="links">
          <div className="footer-link-items">
            <Link to={GithubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to={LinkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
