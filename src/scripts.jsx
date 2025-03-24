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

const Resume = () => (
    <section id="resume" className="container py-5 text-center">
        <h2>Resume</h2>
        <p>Jisan Amin
US Citizen | amin.219@osu.edu | jisanamin1911@gmail.com | 470-218-9481 | LinkedIn: jisan-amin | Github: jisanamin19111
EDUCATION
The Ohio State University Columbus, Ohio
Bachelor’s of Science in Computer Science and Engineering Expected Graduation May 2025
● Specialization: Software Engineering | GPA: 3.5
● Relevant Coursework: Object-Oriented Programming, Applied Statistics, Discrete Mathematics,
Computer Systems, Databases, Artificial Intelligence, Data Structures & Algorithms, Networks
EXPERIENCE
Public Utilities Commission of Ohio (PUCO) Columbus, Ohio
Information Technology Intern May 2023 - current
● Enhanced Salesforce CRM to improve user experience with the PUCO Community to improve
clarity for 100+ reports or transactions
● Used Apex programming language to create and redesign email and page layouts to improve several
email transactions
● Implemented Lightning Web Components/Pages to design PUCO Community websites used by a
multitude of businesses
PROJECTS
PUCO Community Web Revamp Columbus, Ohio
Developer May 2023 - current
● Developing Apex and JavaScript solutions to streamline 100+interactions on PUCO Community
website, improving accessibility and functionality.
Personal Interactive Portfolio Website Columbus, Ohio
Personal Creator December 2024 - current
● Building a dynamic personal portfolio using React, JavaScript, CSS, and HTML, integrating
interactive design elements and responsive layouts with Bootstrap.
URL Shortener Columbus, Ohio
Personal Creator current
● Building an interactive URL shortener based on Sprint Boot
SKILLS
Programming Languages: Python, Java, Javascript, HTML, CSS, mySQL, C, Apex
Frameworks/Libraries: Numpy, nodeJS, Bootstrap, Salesforce, Lightning Web Components
Technical: Data Structures & Algorithms, Microsoft Office 365 (Docs, Excel, Powerpoint, Teams), Salesforce
Platforms: Windows, Linux</p>
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