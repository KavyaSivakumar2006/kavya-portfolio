import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // ========================================
  // LOAD PROJECTS FROM EXPRESS + MONGODB
  // ========================================
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
      });
  }, []);

  // ========================================
  // SCROLL REVEAL ANIMATION
  // ========================================
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // ========================================
  // FALLBACK PROJECTS
  // Used only if MongoDB has no projects yet
  // ========================================
  const fallbackProjects = [
    {
      title: "AI Traffic Signal System",
      type: "Artificial Intelligence",
      description:
        "AI-based real-time adaptive traffic signal control using YOLOv8 for traffic analysis.",
      technologies: ["Python", "YOLOv8", "Computer Vision", "AI"],
      githubUrl:
        "https://github.com/KavyaSivakumar2006/ai-traffic-signal-system",
      liveUrl: "",
    },
    {
      title: "GPS-Based Autonomous Navigation",
      type: "Robotics & Autonomous Navigation",
      description:
        "GPS-based autonomous navigation project using ROS 2, Nav2, SLAM and LiDAR.",
      technologies: ["Python", "ROS 2", "Nav2", "SLAM", "LiDAR"],
      githubUrl:
        "https://github.com/KavyaSivakumar2006/gps-based-autonomous-navigation",
      liveUrl: "",
    },
    {
      title: "AI Event Verifier",
      type: "AI & Full Stack",
      description:
        "AI-driven event quality verification project focused on detecting duplicate, suspicious, incorrect and spam event listings.",
      technologies: ["TypeScript", "AI", "Event Verification"],
      githubUrl:
        "https://github.com/KavyaSivakumar2006/AI-Event-Verifier",
      liveUrl: "",
    },
    {
      title: "ML-Powered Activity Safety Prediction System",
      type: "Machine Learning",
      description:
        "Machine learning project focused on activity safety prediction.",
      technologies: ["Python", "Machine Learning"],
      githubUrl:
        "https://github.com/KavyaSivakumar2006/ML-Powered-Activity-Safety-Prediction-System",
      liveUrl: "",
    },
  ];

  const displayedProjects =
    projects.length > 0 ? projects : fallbackProjects;

  // ========================================
  // NAVIGATION
  // ========================================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ========================================
          NAVIGATION
      ======================================== */}

      <nav>
        <div className="nav-brand">
          <i className="fas fa-brain"></i> KS
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#expertise" onClick={closeMenu}>
              Expertise
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#achievements" onClick={closeMenu}>
              Achievements
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* ========================================
          HERO
      ======================================== */}

      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Kavya S</h1>

          <p className="role">
            AI/ML Engineer & Full Stack Developer
          </p>

          <p className="tagline-highlight">
            Artificial Intelligence • Machine Learning • Full Stack Development
          </p>

          <p className="bio">
            B.Tech Information Technology student at Kumaraguru College
            of Technology, interested in building intelligent systems,
            full-stack applications and practical technology solutions
            for real-world problems.
          </p>

          <div className="hero-tags">
            <span className="tag">AI / ML</span>
            <span className="tag">Full Stack</span>
            <span className="tag">Python</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Cloud</span>
            <span className="tag">DevOps</span>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-folder-open"></i>
              Explore My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-paper-plane"></i>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ========================================
          ABOUT
      ======================================== */}

      <section className="about fade-in" id="about">
        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          A little about my journey and interests
        </p>

        <div className="about-content">
          <p className="about-text">
            Hi, I'm <strong>Kavya S</strong>. I am pursuing{" "}
            <strong>B.Tech Information Technology</strong> at{" "}
            <strong>Kumaraguru College of Technology</strong>.
          </p>

          <p className="about-text">
            I am interested in Artificial Intelligence, Machine Learning,
            Full Stack Development, Cloud and DevOps. I enjoy building
            practical projects and learning technologies by implementing
            them in real-world applications.
          </p>

          <p className="about-text">
            My current focus is developing strong software and AI/ML
            skills while building projects that demonstrate both technical
            knowledge and problem-solving ability.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>
                <i className="fas fa-graduation-cap"></i> Education
              </h3>
              <p>
                B.Tech Information Technology
                <br />
                Kumaraguru College of Technology
                <br />
                2024 – 2028
              </p>
            </div>

            <div className="highlight-card">
              <h3>
                <i className="fas fa-code"></i> Focus
              </h3>
              <p>
                AI/ML, Full Stack Development,
                Cloud and DevOps.
              </p>
            </div>

            <div className="highlight-card">
              <h3>
                <i className="fas fa-lightbulb"></i> Approach
              </h3>
              <p>
                Learn by building practical projects
                and solving real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          EXPERTISE
      ======================================== */}

      <section className="expertise fade-in" id="expertise">
        <h2 className="section-title">Expertise</h2>

        <p className="section-subtitle">
          Technologies and areas I am currently learning and working with
        </p>

        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>
              <i className="fas fa-brain"></i> AI & Machine Learning
            </h3>

            <div className="skill-list">
              <div className="skill-item">Python</div>
              <div className="skill-item">Machine Learning</div>
              <div className="skill-item">Computer Vision</div>
              <div className="skill-item">YOLOv8</div>
            </div>
          </div>

          <div className="expertise-card">
            <h3>
              <i className="fas fa-laptop-code"></i> Full Stack
            </h3>

            <div className="skill-list">
              <div className="skill-item">HTML & CSS</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Node.js & Express</div>
              <div className="skill-item">MongoDB</div>
            </div>
          </div>

          <div className="expertise-card">
            <h3>
              <i className="fas fa-cloud"></i> Cloud & DevOps
            </h3>

            <div className="skill-list">
              <div className="skill-item">AWS</div>
              <div className="skill-item">DevOps</div>
              <div className="skill-item">Git & GitHub</div>
              <div className="skill-item">Networking</div>
            </div>
          </div>

          <div className="expertise-card">
            <h3>
              <i className="fas fa-robot"></i> Robotics
            </h3>

            <div className="skill-list">
              <div className="skill-item">ROS 2</div>
              <div className="skill-item">Nav2</div>
              <div className="skill-item">SLAM</div>
              <div className="skill-item">LiDAR</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PROJECTS
      ======================================== */}

      <section className="projects fade-in" id="projects">
        <h2 className="section-title">Projects</h2>

        <p className="section-subtitle">
          Selected projects and technical work
        </p>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div className="project-card" key={project._id || project.title}>
              <div className="project-header">
                <div className="project-icon">
                  <i className="fas fa-code"></i>
                </div>

                <h3>{project.title}</h3>

                <p className="project-type">
                  {project.type || "Technical Project"}
                </p>
              </div>

              <div className="project-body">
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies?.map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-secondary"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          ACHIEVEMENTS
      ======================================== */}

      <section className="achievements fade-in" id="achievements">
        <h2 className="section-title">Achievements</h2>

        <p className="section-subtitle">
          Milestones and recognitions
        </p>

        <div className="achievements-list">
          <div className="achievement-item">
            <div className="achievement-icon">🏆</div>

            <h3>International Rover Challenge 2026</h3>

            <p>
              QBOTIX Rover from Kumaraguru College of Technology achieved
              <strong> AIR 13 among 35 teams</strong>.
            </p>
          </div>

          <div className="achievement-item">
            <div className="achievement-icon">🤖</div>

            <h3>ROS2 & AI — QBOTIX Rover</h3>

            <p>
              Worked as a ROS2 & AI member on autonomous navigation
              and cone detection for the rover.
            </p>
          </div>

          <div className="achievement-item">
            <div className="achievement-icon">💻</div>

            <h3>AI/ML Engineer — Level 1</h3>

            <p>
              Recognition from iQube – Innovation Centre,
              Kumaraguru College of Technology.
            </p>
          </div>

          <div className="achievement-item">
            <div className="achievement-icon">🚀</div>

            <h3>HackGURU 2026</h3>

            <p>
              Participated in HackGURU 2026 and worked on an
              AI Event Quality Verification Scanner.
            </p>
          </div>

          <div className="achievement-item">
            <div className="achievement-icon">⚡</div>

            <h3>Technoverse 2026</h3>

            <p>
              Participated in the Grand Finale Hackathon and worked
              on a Smart Billing & AI-Based Inventory Management System.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          EXPERIENCE
      ======================================== */}

      <section className="about fade-in" id="experience">
        <h2 className="section-title">Experience</h2>

        <p className="section-subtitle">
          Practical experience and technical involvement
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>
              <i className="fas fa-cloud"></i> DevOps Intern
            </h3>

            <p>
              <strong>Edu Tantr</strong>
              <br />
              Jun 2026 – Sep 2026
              <br />
              Worked with DevOps and AWS-related technologies.
            </p>
          </div>

          <div className="highlight-card">
            <h3>
              <i className="fas fa-robot"></i> QBOTIX Rover
            </h3>

            <p>
              <strong>ROS2 & AI Member</strong>
              <br />
              Oct 2025 – Apr 2026
              <br />
              Autonomous navigation and cone detection.
            </p>
          </div>

          <div className="highlight-card">
            <h3>
              <i className="fas fa-users"></i> QBOTIX Rover
            </h3>

            <p>
              <strong>Probationary Member</strong>
              <br />
              Sep 2025 – Oct 2025
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          STATS
      ======================================== */}

      <div className="stats fade-in">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Featured Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">AIR 13</div>
            <div className="stat-label">IRC 2026 Team Achievement</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">2028</div>
            <div className="stat-label">Graduation</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Learning</div>
          </div>
        </div>
      </div>

      {/* ========================================
          CONTACT
      ======================================== */}

      <section className="contact fade-in" id="contact">
        <h2 className="section-title">Let's Connect</h2>

        <p className="section-subtitle">
          Open to learning, collaboration and opportunities
        </p>

        <div className="contact-content">
          <p className="contact-text">
            I'm interested in AI/ML, Full Stack Development and
            technology-driven projects. You can find my work and
            professional profile through the links below.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/KavyaSivakumar2006"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kavya-s-0a513732a"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>

          <div className="email-highlight">
            <p>
              <i className="fas fa-envelope"></i> Contact
            </p>

            <p>
              Email details can be added here later.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          FOOTER
      ======================================== */}

      <footer>
        <div className="divider"></div>

        <div className="footer-content">
          <p style={{ fontSize: "1.1rem", fontWeight: "700" }}>
            Designed & Developed by Kavya S
          </p>

          <p style={{ marginTop: "0.5rem" }}>
            B.Tech Information Technology | Kumaraguru College of Technology
          </p>
        </div>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="divider"></div>

        <div className="footer-credit">
          <p>© 2026 Kavya S. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;