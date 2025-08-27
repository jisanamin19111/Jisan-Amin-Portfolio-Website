import { FaLinkedin, FaTwitter, FaEnvelope, FaMicrosoft } from "react-icons/fa";  

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
        <p className="lead mb-3">Hello! I'm Jisan Amin, an entry-level software developer who specializes in building and maintaining web applications. I'm currently a Senior at Ohio State
            University, majoring in Computer Science and Engineering. I enjoy learning about new technologies and figuring out how to incorporate them to 
            develop modern and efficient applications. My main experience is with frontend technologies like ReactJS, NodeJS, HTML5 and CSS3, however I also have a lot of experience with
            Java and Python, and I'm currently working on a URL shortener project using Spring Boot and mySQL with Java! 
        </p>
        <p className = "lead">
            In my free time, I enjoy playing video games, going to the gym, and watching shows and movies. I'm a Falcons fan because I grew up around Atlanta as a kid. 
            Some of my favorite movies are Christopher Nolan's Dark Knight Trilogy, and some of my favorite shows are Snowfall, Severance, and Naruto.
            While I'm a homebody at heart, I love to travel and explore new places. I've been to a few countries in Europe and Asia, and I hope to visit more in the future!
        </p>
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
        <p>Let's get in touch! You can reach me through the following platforms:</p>
        
        <div className="d-flex justify-content-center gap-4 mt-3">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jisan-amin-571609249/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#0077B5" />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/@amin_jisan65946" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={40} color="#1DA1F2" />
            </a>

            {/* Gmail */}
            <a href="mailto:jisanamin19111@gmail.com">
                <FaEnvelope size={40} color="#D14836" />
            </a>

            {/* Outlook */}
            <a href="mailto:amin.219@buckeyemail.osu.edu">
                <FaMicrosoft size={40} color="#0078D4" />
            </a>
        </div>
    </section>
);

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
);

export default App;