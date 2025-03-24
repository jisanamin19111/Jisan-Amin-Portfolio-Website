const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Jisan Amin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#bio">Bio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">Resume</a>
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
    <header className="text-white text-center py-5">
        <h1>Jisan Amin</h1>
        <p>Software Developer</p>
    </header>
);

const AboutMe = () => (
    <section id="bio" className="container py-5 text-center">
        <img src="selfie.png" className="img-fluid rounded-circle mb-3" width="200" height="200" alt="Profile" />
        <h2 className="mt-4">About Me</h2>
        <p className="lead">Hello! I'm Jisan Amin, an entry-level software developer who specializes in building and maintaining web applications. I'm currently a Senior at Ohio State
            University, majoring in Computer Science and Engineering. I enjoy learning about new technologies and figuring out how to incorporate them to 
            develop modern and efficient applications. My main experience is with frontend technologies like ReactJS, NodeJS, HTML5 and CSS3, however I also have a lot of experience with
            Java and Python, and I'm currently working on a URL shortener project using Spring Boot and mySQL with Java! </p>
        
    </section>
);

const Resume = () => (
    <section id="resume" className="container py-5 text-center">
        <h2>Resume</h2>
        <p>My work experience, skills, and education go here.</p>
    </section>
);

const Projects = () => (
    <section id="projects" className="container py-5 text-center">
        <h2>Projects</h2>
        <p>My personal and professional projects will be listed here.</p>
    </section>
);

const Contact = () => (
    <section id="contact" className="container py-5 text-center">
        <h2>Contact Me</h2>
        <p>Let's get in touch! You can reach me at...</p>
    </section>
);

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
    </div>
);

export default App;