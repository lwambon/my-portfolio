import "./Skills.css";
import { FaReact } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaNode } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="title">my skills</h2>
      <div className="skills-container">
        <ul className="skills-list">
          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">react js</h2>
              <FaReact style={{ color: "blue" }} />
            </div>
            <p className="skills-details">
              I am a skilled React.js developer, adept at building dynamic and
              responsive user interfaces using modern web technologies. My
              expertise includes component-based architecture, state management,
              and seamless integration of APIs
            </p>
          </li>

          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">javascript</h2>
              <FaJsSquare style={{ color: "yellow" }} />
            </div>
            <p className="skills-details">
              I am proficient in JavaScript, with expertise in writing clean,
              efficient code to build dynamic, interactive web applications. My
              skills include DOM manipulation, asynchronous programming, and
              working with APIs.
            </p>
          </li>
          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">HTML</h2>
              <FaHtml5 style={{ color: "blue" }} />
            </div>
            <p className="skills-details">
              I am highly skilled in HTML5, crafting well-structured, semantic
              webpages with a focus on accessibility and responsive design. My
              expertise ensures seamless integration of multimedia elements and
              modern web standards.
            </p>
          </li>
          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">CSS</h2>
              <FaCss3Alt style={{ color: "blue" }} />
            </div>
            <p className="skills-details">
              I am proficient in CSS, designing visually appealing and
              responsive layouts that enhance user experience across devices. My
              skills include using modern techniques like Flexbox, Grid, and
              animations effectively.
            </p>
          </li>
          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">git</h2>
              <FaGitAlt style={{ color: "crimson" }} />
            </div>
            <p className="skills-details">
              I am skilled in Git and version control, managing code efficiently
              through branching, merging, and collaboration. I ensure seamless
              teamwork and maintain clean project histories across various
              development environments.
            </p>
          </li>
          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">python</h2>
              <FaPython style={{ color: "blue" }} />
            </div>
            <p className="skills-details">
              I am proficient in Python, using it to develop robust applications
              and automate tasks. My expertise includes working with libraries
              like NumPy, pandas, and Flask to create efficient solutions.
            </p>
          </li>

          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle"> SQL , PostgreSQL</h2>
              <DiPostgresql style={{ color: "yellow" }} />
            </div>
            <p className="skills-details">
              I am skilled in SQL and PostgreSQL, proficient in writing complex
              queries to manage databases efficiently. I utilize PostgreSQL to
              design and optimize database structures for scalable applications.
            </p>
          </li>
          <li className="skill-item">
            <div className="icon">
              <h2 className="subtitle">node js</h2>
              <FaNode style={{ color: "blue" }} />
            </div>
            <p className="skills-details">
              I am proficient in Node.js, building robust server-side
              applications with seamless performance. I create scalable
              backends, integrating APIs and databases to power dynamic,
              full-stack applications efficiently.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
