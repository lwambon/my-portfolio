import { Link } from "react-router-dom";
import "./Hero.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import HeroImage from "./../../assets/lucy-wambo.jpg";
import myCv from "./../../assets/LWW.pdf";

const GithubUrl = "https://github.com/lwambon";
const LinkedinUrl = "https://www.linkedin.com/in/lucy-wambui-225965242";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <p className="header-hero">Hello..</p>
        <p className="hero-content">
          I Am <span>lucy wambui</span>{" "}
        </p>
        <p className="hero-content">
          a <span>software engineer,</span>
        </p>
        <p className="hero-content">welcome to my website</p>
        <div className="hero-links">
          <Link to={myCv} download="LucyWambui_Resume.pdf">
            <button>download resume</button>
          </Link>
          <div className="link-items">
            <Link to={GithubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
          </div>
          <div className="link-items">
            <Link to={LinkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Lucy Wambui" />
      </div>
    </div>
  );
}

export default Hero;
