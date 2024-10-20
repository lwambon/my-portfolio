import "./Education.css";

function Education() {
  return (
    <div className="Education-section">
      <h2 className="title">Resume</h2>
      <div className="education-container">
        <div className="education-cards">
          <h3 className="education-subtite">august 2024 to present</h3>
          <h4 className="education-title">software engineering training</h4>
          <h4 className="place-of-education">power learn project</h4>
          <p className="education-details">
            I am currently undertaking a software engineering bootcamp offered
            by Power Learn Project, where I’m learning CSS, HTML, Node.js,
            JavaScript, database management, Flutter, and Dart. This
            comprehensive program is helping me strengthen my frontend and
            backend development skills.
          </p>
        </div>

        <div className="education-cards">
          <h3 className="education-subtite">september 2024 to present</h3>
          <h4 className="education-title">software engineering training</h4>
          <h4 className="place-of-education">teach2Give</h4>
          <p className="education-details">
            I am currently enrolled in the Teach2Give software training, where I
            have gained valuable skills in React.js, Node.js, PostgreSQL,
            tooling, version control, HTML, and CSS. This program has
            significantly advanced my knowledge in software development
            technologies.
          </p>
        </div>
        <div className="education-cards">
          <h3 className="education-subtite">September 2020 To August 2024</h3>
          <h4 className="education-title">bsc computer science</h4>
          <h4 className="place-of-education">
            muranga university of technology
          </h4>
          <p className="education-details">
            I pursued a Bachelor of Science in Computer Science at Muranga
            University, where I graduated with a Second Class Upper Division.
            This journey equipped me with essential skills in programming,
            software development, and problem-solving, preparing me for the tech
            industry.
          </p>
        </div>

        <div className="education-cards">
          <h3 className="education-subtite">feb 2016 to dec 2019</h3>
          <h4 className="education-title">K.C.S.E</h4>
          <h4 className="place-of-education">
            saint anuarite girls secondary school
          </h4>
          <p className="education-details">
            I completed my high school education in 2019, achieving a B plain
            overall and excelling in mathematics. My strong performance in math
            paved the way for me to attend Muranga University for my Computer
            Science degree.
          </p>
        </div>

        <div className="education-cards">
          <h3 className="education-subtite">2008-2015</h3>
          <h4 className="education-title">K.C.P.E</h4>
          <h4 className="place-of-education">
            flying kites leadership academy
          </h4>
          <p className="education-details">
            I completed my primary education in 2015, excelling in mathematics,
            which set a strong foundation for my academic journey. My
            performance paved the way for me to attend high school and further
            pursue my academic goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
