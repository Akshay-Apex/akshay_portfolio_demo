import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <h1>Akshay Naik</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <p className="tag">Computer Science Engineering Student</p>
        <h1>
          Akshay Karunakar Naik
        </h1>
        <p className="subtitle">
          I build software, web apps, and scientific tools using modern programming.
        </p>

        <div className="cta">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Contact Me</a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="card">
          <p>
            Computer Science Engineering student at NMAM Institute of Technology (CGPA 8.52).
            Completed Diploma in Computer Science with CGPA 9.80.
            Passionate about building efficient systems, web applications, and image analysis tools.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card hover">
            <h3>AnimeList</h3>
            <p>20,000+ anime listing app with filtering and fast search.</p>
          </div>

          <div className="card hover">
            <h3>Aarogya Healthcare</h3>
            <p>Patient management system using Java, JSP, Servlets, MySQL.</p>
          </div>

          <div className="card hover">
            <h3>Planetary Image Tool</h3>
            <p>Scientific image analysis tool using Python + OpenCV.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          {[
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "MySQL",
            "Git",
            "GitHub",
          ].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card">
          <p>📧 akshayknaik777@gmail.com</p>
          <p>📱 +91 8867314036</p>
          <p>📍 Mangalore, Karnataka</p>
        </div>
      </section>

      <footer>
        © 2026 Akshay Karunakar Naik
      </footer>
    </div>
  );
}

export default App;