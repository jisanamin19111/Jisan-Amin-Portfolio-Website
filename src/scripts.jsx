// App.tsx / App.jsx
import { FaLinkedin, FaTwitter, FaEnvelope, FaMicrosoft } from "react-icons/fa";
import selfie from "./assets/selfie.png"; // <-- put selfie.png in src/assets/

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm" role="navigation" aria-label="Main navigation">
    <div className="container">
      <a className="navbar-brand fw-semibold" href="#top">Jisan Amin</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#bio">Bio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Header = () => (
  <header id="top" className="text-white text-center py-5 header-hero">
    <div className="container py-5">
      <h1 className="display-5 fw-bold mb-2">Jisan Amin</h1>
      <p className="lead opacity-90 mb-4">Software Developer • React • Java • Spring Boot</p>
      <div className="d-flex gap-3 justify-content-center">
        <a className="btn btn-light fw-semibold" href="#projects">See Projects</a>
        {/* Optional resume: place resume.pdf in /public (CRA) or root of repo (Vite public/) and link it */}
        <a className="btn btn-outline-light" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  </header>
);

const AboutMe = () => (
  <section id="bio" className="container py-5 section-spacing">
    <div className="text-center">
      <img
        src={selfie}
        className="rounded-circle mb-3 object-fit-cover"
        width="200"
        height="200"
        alt="Jisan Amin profile"
        loading="lazy"
      />
      <h2 className="mt-2">About Me</h2>
      <p className="lead mb-3">
        Hello! I'm Jisan Amin, an entry-level software developer focused on building and maintaining web applications.
        I'm a Senior at The Ohio State University (CSE). I enjoy learning new tech and applying it to create efficient,
        modern apps. I’m strongest in frontend (React, Node, HTML5/CSS3), with solid experience in Java and Python.
        Currently building a URL shortener with Spring Boot + MySQL in Java.
      </p>
      <p className="lead">
        Outside of code: gaming, gym, and films. Falcons fan (grew up around Atlanta).
        Favorite films include Nolan’s Dark Knight trilogy; favorite shows include Snowfall, Severance, and Naruto.
        I’m a homebody who still loves travel—been to parts of Europe and Asia, and counting!
      </p>
    </div>
  </section>
);

type Project = {
  title: string;
  desc: string;
  tech: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "URL Shortener",
    desc: "Spring Boot + MySQL service with redirect tracking and custom slugs.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/youruser/your-url-shortener",
  },
  {
    title: "Portfolio Site",
    desc: "This site: responsive React + Bootstrap with GitHub Pages CI.",
    tech: ["React", "Vite/CRA", "Bootstrap"],
    link: "https://github.com/youruser/your-portfolio-repo",
  },
];

const Projects = () => (
  <section id="projects" className="container py-5 section-spacing">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row g-4">
      {PROJECTS.map((p) => (
        <div className="col-12 col-md-6" key={p.title}>
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 card-title">{p.title}</h3>
              <p className="card-text">{p.desc}</p>
              <ul className="list-inline small text-muted mb-3">
                {p.tech.map((t) => (
                  <li key={t} className="list-inline-item badge bg-secondary-subtle text-secondary-emphasis me-1">{t}</li>
                ))}
              </ul>
              {p.link && (
                <a className="stretched-link" href={p.link} target="_blank" rel="noreferrer" aria-label={`${p.title} repo`}>
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container py-5 section-spacing">
    <h2 className="text-center">Contact Me</h2>
    <p className="text-center">Let’s get in touch:</p>
    <div className="d-flex justify-content-center gap-4 mt-3">
      <a href="https://www.linkedin.com/in/jisan-amin-571609249" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={40} color="#0077B5" />
      </a>
      <a href="https://twitter.com/amin_jisan65946" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
        <FaTwitter size={40} color="#1DA1F2" />
      </a>
      <a href="mailto:jisanamin19111@gmail.com" aria-label="Email Gmail">
        <FaEnvelope size={40} color="#D14836" />
      </a>
      <a href="mailto:amin.219@buckeyemail.osu.edu" aria-label="Email Outlook">
        <FaMicrosoft size={40} color="#0078D4" />
      </a>
    </div>
  </section>
);

const App = () => (
  <div className="app-root">
    <Navbar />
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
    <footer className="py-4 text-center text-muted small">
      © {new Date().getFullYear()} Jisan Amin
    </footer>
  </div>
);

export default App;