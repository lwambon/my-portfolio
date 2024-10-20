import "./Contact.css";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const emailUrl = "lwambonyaga@gmail.com";
const GithubUrl = "https://github.com/lwambon";
const LinkedinUrl = "https://www.linkedin.com/in/lucy-wambui-225965242";
const facebookUrl = "https://www.facebook.com/lucy.wambo.7169/";
const TwitterUrl = "https://x.com/LucyWam39288384";

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="title">contact me</h2>
      <p className="contact-subheading">connect with me through;</p>
      <div className="contact-container">
        <div className="contact-information">
          <Link to={emailUrl}>
            <MdEmail />
            <p>lwambonyaga@gmail.com</p>
          </Link>
          <Link to={GithubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub /> <p>https://github.com/lwambon</p>
          </Link>
          <Link to={LinkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            <p>https://www.linkedin.com/in/lucy-wambui-225965242</p>
          </Link>
          <Link to={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
            <p>https://www.facebook.com/lucy.wambo.7169/</p>
          </Link>
          <Link to={TwitterUrl} target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
            <p>https://x.com/LucyWam39288384</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
