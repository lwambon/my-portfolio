import "./About.css";
import AboutImage from "./../../assets/img1.png";
function About() {
  return (
    <div className="about-container">
      <h2 className="title">about me</h2>
      <div className="about-information">
        <div className="about-image">
          <img src={AboutImage} alt="about image" />
        </div>
        <div className="about-info-details">
          <p>
            Hello! I am Lucy Wambui, a passionate software engineer with
            expertise in both frontend and backend development. I specialize in
            technologies such as React, Node.js, JavaScript, HTML, and CSS,
            creating responsive and user-friendly applications. I am dedicated
            to continuous learning and problem-solving, having worked on diverse
            projects including web development, backend systems, and AI-powered
            applications. I hold a degree in Computer Science and have hands-on
            experience through professional and personal projects. My goal is to
            leverage technology to create innovative solutions that make a
            positive impact in various industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
