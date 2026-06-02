"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* ============ HERO SECTION ============ */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Open to Opportunities
            </div>
            <p className="hero-greeting">{"// Hello, World! I'm"}</p>
            <h1 className="hero-name">
              <span className="gradient-text">Hariharan</span> V S
            </h1>
            <p className="hero-title">
              <strong>Full Stack Developer</strong> &{" "}
              <strong>ML Enthusiast</strong> crafting scalable web applications
              and intelligent systems.
            </p>
            <div className="hero-buttons">
              <a
                href="#projects"
                className="btn-primary"
              >
                ⚡ View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                📬 Get In Touch
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">4+</div>
                <div className="hero-stat-label">Projects Built</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">80+</div>
                <div className="hero-stat-label">LeetCode Problems</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">1000+</div>
                <div className="hero-stat-label">SkillRack Problems</div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-ring">
              <img
                src="/profile.jpg"
                alt="Hariharan V S"
                className="hero-image"
                width={312}
                height={312}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section className="section" id="about">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// Who I Am</p>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <p>
                I&apos;m a passionate Computer Science Engineering student at{" "}
                <strong>Sri Eshwar College of Engineering</strong>, currently in
                my 3rd semester with a CGPA of <strong>8.42</strong>. I love
                building full-stack web applications and exploring the
                fascinating world of machine learning.
              </p>
              <p>
                My journey spans from developing automated ML platforms to
                real-time chat applications and air-based character recognition
                systems. I thrive on solving complex problems and turning ideas
                into production-ready applications.
              </p>

              <div className="about-highlights">
                <div className="about-highlight-card">
                  <div className="about-highlight-icon">🎯</div>
                  <div className="about-highlight-title">Focus Area</div>
                  <div className="about-highlight-value">
                    Full Stack & ML
                  </div>
                </div>
                <div className="about-highlight-card">
                  <div className="about-highlight-icon">📍</div>
                  <div className="about-highlight-title">Location</div>
                  <div className="about-highlight-value">India</div>
                </div>
                <div className="about-highlight-card">
                  <div className="about-highlight-icon">🎓</div>
                  <div className="about-highlight-title">CGPA</div>
                  <div className="about-highlight-value">8.42 / 10</div>
                </div>
                <div className="about-highlight-card">
                  <div className="about-highlight-icon">🏆</div>
                  <div className="about-highlight-title">Hackathons</div>
                  <div className="about-highlight-value">
                    Winner & Top 3
                  </div>
                </div>
              </div>
            </div>

            <div className="education-timeline animate-on-scroll">
              <div className="education-item">
                <span className="education-year">2024 — 2028</span>
                <h3 className="education-degree">
                  B.E. Computer Science Engineering
                </h3>
                <p className="education-school">
                  Sri Eshwar College of Engineering
                </p>
                <p className="education-grade">CGPA: 8.42 (IIIrd Sem)</p>
              </div>
              <div className="education-item">
                <span className="education-year">2023 — 2024</span>
                <h3 className="education-degree">
                  Higher Secondary (XII)
                </h3>
                <p className="education-school">
                  Kalavani Kalvi Nilayam Matri Higher Secondary School
                </p>
                <p className="education-grade">Score: 91.5%</p>
              </div>
              <div className="education-item">
                <span className="education-year">2021 — 2022</span>
                <h3 className="education-degree">
                  Secondary School (X)
                </h3>
                <p className="education-school">
                  Kalamani Kalvi Nilayam Matri Higher Secondary School
                </p>
                <p className="education-grade">Score: 92.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS SECTION ============ */}
      <section
        className="section"
        id="projects"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// What I&apos;ve Built</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects showcasing my expertise in full-stack
              development, machine learning, and real-time systems.
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card animate-on-scroll">
              <div className="project-header">
                <span className="project-icon">🤖</span>
                <span className="project-status ongoing">
                  <span className="project-status-dot"></span>
                  Ongoing
                </span>
              </div>
              <h3 className="project-name">ForgeML</h3>
              <p className="project-description">
                Automated Machine Learning platform supporting conversational
                data analysis, automated dataset preprocessing, dynamic model
                training. Features scalable REST APIs with PyCaret and
                PandasAI, plus cloud storage for robust dataset caching and
                persistent model deployment.
              </p>
              <div className="project-tech">
                <span className="project-tech-tag">Python</span>
                <span className="project-tech-tag">FastAPI</span>
                <span className="project-tech-tag">React</span>
                <span className="project-tech-tag">PyCaret</span>
                <span className="project-tech-tag">PandasAI</span>
                <span className="project-tech-tag">Supabase</span>
                <span className="project-tech-tag">Appwrite</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hariharan" className="project-link" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card animate-on-scroll">
              <div className="project-header">
                <span className="project-icon">🎓</span>
                <span className="project-status ongoing">
                  <span className="project-status-dot"></span>
                  Ongoing
                </span>
              </div>
              <h3 className="project-name">Academix</h3>
              <p className="project-description">
                College Management API delivering scalable REST APIs for
                digitizing college administrative workflows. Implemented 40+
                endpoints with layered architecture and PostgreSQL models.
                Integrated Spring Security with JWT for authentication and
                role-based authorization.
              </p>
              <div className="project-tech">
                <span className="project-tech-tag">Java</span>
                <span className="project-tech-tag">Spring Boot</span>
                <span className="project-tech-tag">PostgreSQL</span>
                <span className="project-tech-tag">JWT</span>
                <span className="project-tech-tag">Swagger</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hariharan" className="project-link" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card animate-on-scroll">
              <div className="project-header">
                <span className="project-icon">✋</span>
                <span className="project-status completed">
                  <span className="project-status-dot"></span>
                  Dec 2025
                </span>
              </div>
              <h3 className="project-name">
                Air-Based Character Recognition
              </h3>
              <p className="project-description">
                Real-time computer vision system converting skeleton patterns
                into digital characters. Used MediaPipe for finger tracking
                and gesture trajectory detection. Trained CNN model on EMNIST
                dataset to classify letters and digits with Text-to-Speech
                integration.
              </p>
              <div className="project-tech">
                <span className="project-tech-tag">Python</span>
                <span className="project-tech-tag">OpenCV</span>
                <span className="project-tech-tag">MediaPipe</span>
                <span className="project-tech-tag">TensorFlow</span>
                <span className="project-tech-tag">CNN</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hariharan" className="project-link" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card animate-on-scroll">
              <div className="project-header">
                <span className="project-icon">💬</span>
                <span className="project-status completed">
                  <span className="project-status-dot"></span>
                  Mar 2026
                </span>
              </div>
              <h3 className="project-name">Realtime Chat Application</h3>
              <p className="project-description">
                Full-stack MERN realtime chat platform with secure
                authentication. Built REST APIs with Express and integrated
                WebSocket messaging via Socket.IO for instant communication.
                Deployed on MongoDB Atlas and Vercel for production.
              </p>
              <div className="project-tech">
                <span className="project-tech-tag">React</span>
                <span className="project-tech-tag">Node.js</span>
                <span className="project-tech-tag">Express</span>
                <span className="project-tech-tag">MongoDB</span>
                <span className="project-tech-tag">WebSocket</span>
                <span className="project-tech-tag">JWT</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hariharan" className="project-link" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
                <a href="#" className="project-link">
                  🌐 Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS SECTION ============ */}
      <section className="section" id="skills">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// What I Know</p>
            <h2 className="section-title">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="skills-categories">
            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">💻</div>
              <h3 className="skill-category-name">Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
              </div>
            </div>

            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">⚡</div>
              <h3 className="skill-category-name">Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">ReactJS</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">NextJS</span>
                <span className="skill-tag">TailwindCSS</span>
                <span className="skill-tag">Redis</span>
              </div>
            </div>

            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">🗄️</div>
              <h3 className="skill-category-name">Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>

            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">🛠️</div>
              <h3 className="skill-category-name">Tools & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Render</span>
              </div>
            </div>

            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">🧠</div>
              <h3 className="skill-category-name">Core Concepts</h3>
              <div className="skill-tags">
                <span className="skill-tag">DSA</span>
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">DBMS</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">System Design</span>
              </div>
            </div>

            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">🤖</div>
              <h3 className="skill-category-name">ML / AI</h3>
              <div className="skill-tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyCaret</span>
                <span className="skill-tag">PandasAI</span>
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">MediaPipe</span>
                <span className="skill-tag">CNN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS SECTION ============ */}
      <section
        className="section"
        id="achievements"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// Recognition</p>
            <h2 className="section-title">
              <span className="gradient-text">Achievements</span>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card animate-on-scroll">
              <div className="achievement-icon">🥉</div>
              <h3 className="achievement-title">
                3rd Place — MEDHA&apos;26 Hackathon
              </h3>
              <p className="achievement-subtitle">
                Sri Kumaraguru College of Engineering (60+ teams)
              </p>
              <span className="achievement-year">2026</span>
            </div>

            <div className="achievement-card animate-on-scroll">
              <div className="achievement-icon">🏆</div>
              <h3 className="achievement-title">Createathon Winner</h3>
              <p className="achievement-subtitle">
                College Level Hackathon Winner
              </p>
              <span className="achievement-year">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS SECTION ============ */}
      <section className="section" id="certifications">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// Credentials</p>
            <h2 className="section-title">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="certifications-grid">
            <div className="cert-card animate-on-scroll">
              <div className="cert-icon">☁️</div>
              <h3 className="cert-name">
                Salesforce Certified AI Algorithms Specialist
              </h3>
              <p className="cert-issuer">Salesforce</p>
              <span className="cert-year">2025</span>
            </div>

            <div className="cert-card animate-on-scroll">
              <div className="cert-icon">☕</div>
              <h3 className="cert-name">Java Programming</h3>
              <p className="cert-issuer">NPTEL</p>
              <span className="cert-year">2025</span>
            </div>

            <div className="cert-card animate-on-scroll">
              <div className="cert-icon">📊</div>
              <h3 className="cert-name">
                Advanced Data Structures and Algorithms Using C/C++
              </h3>
              <p className="cert-issuer">Udemy</p>
              <span className="cert-year">2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CODING PROFILES SECTION ============ */}
      <section
        className="section"
        id="profiles"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// Where I Grind</p>
            <h2 className="section-title">
              Coding <span className="gradient-text">Profiles</span>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="profiles-grid">
            <div className="profile-card animate-on-scroll">
              <div className="profile-logo">🟡</div>
              <h3 className="profile-name">LeetCode</h3>
              <div className="profile-stats">
                <div>
                  <div className="profile-stat-value">80+</div>
                  <div className="profile-stat-label">Problems Solved</div>
                </div>
                <div>
                  <div className="profile-stat-value">1316</div>
                  <div className="profile-stat-label">Global Rating</div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                }}
              >
                Max Rating: 1316 · Global Rank: 356,344
              </p>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                View Profile →
              </a>
            </div>

            <div className="profile-card animate-on-scroll">
              <div className="profile-logo">🟢</div>
              <h3 className="profile-name">SkillRack</h3>
              <div className="profile-stats">
                <div>
                  <div className="profile-stat-value">1000+</div>
                  <div className="profile-stat-label">Problems Solved</div>
                </div>
                <div>
                  <div className="profile-stat-value">24,239</div>
                  <div className="profile-stat-label">Rank</div>
                </div>
              </div>
              <a
                href="https://skillrack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                View Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="section contact-section" id="contact">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <p className="section-label">// Let&apos;s Connect</p>
            <h2 className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="contact-content animate-on-scroll">
            <p className="contact-description">
              I&apos;m always open to discussing new projects, collaboration
              opportunities, or just having a chat about technology. Feel free
              to reach out!
            </p>

            <div className="contact-grid">
              <a
                href="mailto:hariharan.vs2024anu@svu.ac.in"
                className="contact-card"
              >
                <div className="contact-card-icon">📧</div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">
                  hariharan.vs2024aiml@sece.ac.in
                </div>
              </a>

              <a href="tel:+917738916752" className="contact-card">
                <div className="contact-card-icon">📱</div>
                <div className="contact-card-label">Phone</div>
                <div className="contact-card-value">+91 7738916752</div>
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">💼</div>
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-value">Hariharan V S</div>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">🐙</div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-value">Hariharan V S</div>
              </a>
            </div>

            <a href="mailto:hariharan.vs2024aiml@sece.ac.in" className="btn-primary">
              📬 Send me an Email
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="section-container">
          <p className="footer-text">
            © 2026 <span>Hariharan V S</span>. Built with ❤️ using Next.js
          </p>
        </div>
      </footer>
    </>
  );
}
