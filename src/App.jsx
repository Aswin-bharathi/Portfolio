import NavBar from './components/NavBar'
import { certifications, profile, projects, skills } from './data/profile'
import './App.css'

function App() {
  const skillGroups = [
    {
      title: 'Programming',
      items: ['Python', 'Java', 'C', 'Object-Oriented Programming'],
    },
    {
      title: 'Web & API',
      items: ['Flask', 'JavaScript', 'HTML/CSS', 'REST API Development'],
    },
    {
      title: 'Data & Tools',
      items: ['MySQL', 'Oracle', 'Git/GitHub', 'Tailwind CSS'],
    },
    {
      title: 'AI & Product',
      items: ['Gemini API Integration', 'Automation Workflows', 'UI/UX Thinking'],
    },
  ]

  

  const services = [
    {
      title: 'AI Feature Integration',
      text: 'Integrate Gemini-based summarization, Q&A, and smart assistants into existing workflows.',
    },
    {
      title: 'Full Stack Web Development',
      text: 'Build Flask-driven products with secure authentication, API layers, and responsive interfaces.',
    },
    {
      title: 'Automation Engineering',
      text: 'Create automation utilities for repetitive desktop or operational tasks with usability in mind.',
    },
    {
      title: 'UI and Product Polishing',
      text: 'Design clear interfaces that reduce confusion, improve completion rates, and support cross-device usage.',
    },
  ]

  const caseStudies = [
    {
      name: 'DEXA Agentic Assistant',
      challenge:
        'Desktop workflows required multiple manual steps for launching apps, creating files, and preparing content.',
      approach:
        'Implemented a voice and text assistant architecture with specialized sub-agents for command execution and presentation creation.',
      result:
        'Enabled hands-free interactions and faster execution for repetitive actions using a secure paired control model.',
      stack: 'Python, Gemini API, speech_recognition, pyautogui, python-pptx, customtkinter',
    },
    {
      name: 'Quiz Management Platform',
      challenge:
        'Managing quizzes and departmental results manually consumed staff time and increased coordination overhead.',
      approach:
        'Designed a Flask + MySQL platform with role-based workflows, dashboard visibility, and automated communication features.',
      result:
        'Supported 100+ users with a centralized process that reduced admin effort and improved result access speed.',
      stack: 'Flask, MySQL, Tailwind CSS, PDF export, email automation',
    },
    {
      name: 'AI Notes Summarizer',
      challenge:
        'Students spent too much time manually reviewing long notes and lacked interactive revision support.',
      approach:
        'Built multi-format ingestion and preprocessing with Gemini-powered summarization plus an interactive Q&A assistant.',
      result:
        'Produced faster revision cycles with structured summaries and easier concept recall for study sessions.',
      stack: 'Flask, Gemini API, PDF/TXT/DOCX processing, responsive UI',
    },
  ]

  const contributionAreas = [
    'Translate rough ideas into production-ready web features',
    'Build clean backend APIs and maintainable service logic',
    'Integrate AI capabilities while preserving UX clarity',
    'Design dashboards for educational and workflow-heavy products',
    'Collaborate effectively in agile, iterative delivery cycles',
    'Ship responsive interfaces with accessibility-focused structure',
  ]

  return (
    <div className="app-bg">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <div className="app-shell">
        <NavBar />
        <main className="scroll-page">
          <section id="home" className="page-shell page-enter">
            <header className="page-header">
              <p className="page-kicker">Portfolio</p>
              <h1>{profile.name}</h1>
              <p className="page-subtitle">
                Full Stack Web Developer | AI Integration | Automation Systems
              </p>
            </header>

            <div className="hero-grid">
              <article className="glass-card pulse-border">
                <span className="section-pill">Intro</span>
                <br></br><br></br>
                <h2>{profile.title}</h2>
                <p>{profile.tagline}</p>
                <div className="hero-actions">
                  <a href={`mailto:${profile.email}`} className="btn btn-primary">
                    Hire Me
                  </a>
                  <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </article>

              <article className="glass-card tilt-card">
                <span className="section-pill">Snapshot</span>
                <br></br><br></br>
                <h3>Quick Profile</h3>
                <ul className="clean-list">
                  <li>Final-year BSc Computer Science student (2023-2026)</li>
                  <li>84.2% aggregate up to 5th semester</li>
                  <li>{profile.location}</li>
                  <li>Focused on scalable AI-powered software</li>
                </ul>
              </article>
            </div>

            <div className="skill-ribbon" aria-label="Core skills">
              {skills.concat(skills).map((skill, index) => (
                <span key={`${skill}-${index}`}>{skill}</span>
              ))}
            </div>

            
          </section>

          <section id="about" className="page-shell">
            <header className="section-head">
              <span className="section-pill">About Section</span>
              <h2>About Me</h2>
            </header>
            <div className="content-grid">
              <article className="glass-card">
                <h3>Professional Summary</h3>
                <p>
                  I build practical software that blends engineering discipline
                  with intelligent automation. My work combines Python, Flask,
                  APIs, and modern UI design to solve real user problems.
                </p>
              </article>
              <article className="glass-card">
                <h3>Education</h3>
                <ul className="clean-list">
                  <li>BSc Computer Science - Ayya Nadar Janaki Ammal College</li>
                  <li>2023 - 2026 | 84.2% (up to semester 5)</li>
                  <li>HSC - GS Hindu Hr Sec School | 82.1%</li>
                </ul>
              </article>
              <article className="glass-card full-width">
                <h3>Certifications</h3>
                <div className="badge-grid">
                  {certifications.map((certification) => (
                    <span className="badge-chip" key={certification}>
                      {certification}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section id="skills" className="page-shell">
            <header className="section-head">
              <span className="section-pill">Skills Section</span>
              <h2>Technical Depth</h2>
            </header>
            <div className="skill-groups-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="glass-card">
                  <h3>{group.title}</h3>
                  <ul className="clean-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="services" className="page-shell">
            <header className="section-head">
              <span className="section-pill">Services Section</span>
              <h2>What I Can Deliver</h2>
            </header>
            <div className="workflow-grid">
              {services.map((item) => (
                <article key={item.title} className="glass-card workflow-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="page-shell">
            <header className="section-head">
              <span className="section-pill">Projects Section</span>
              <h2>Projects</h2>
            </header>
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card color-shift">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span>{project.period}</span>
                  </div>
                  <p>{project.summary}</p>
                  <ul className="clean-list">
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="page-shell">
            <header className="section-head">
              <span className="section-pill">Case Study Section</span>
              <h2>Project Deep Dives</h2>
            </header>
            <div className="case-study-grid">
              {caseStudies.map((item) => (
                <article key={item.name} className="glass-card case-study-card">
                  <h3>{item.name}</h3>
                  <p>
                    <strong>Challenge:</strong> {item.challenge}
                  </p>
                  <p>
                    <strong>Approach:</strong> {item.approach}
                  </p>
                  <p>
                    <strong>Result:</strong> {item.result}
                  </p>
                  <p className="stack-line">
                    <strong>Stack:</strong> {item.stack}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="page-shell">
            <header className="section-head">
              <span className="section-pill">Experience Section</span>
              <h2>Experience</h2>
            </header>
            <div className="timeline">
              <article className="timeline-item glass-card">
                <div className="timeline-head">
                  <h3>Software Development Intern</h3>
                  <span>May 2025 - Jun 2025</span>
                </div>
                <p>Unijac Technologies (Ayya Nadar Janaki Ammal College)</p>
                <ul className="clean-list">
                  <li>
                    Designed and developed an AI Notes Summarizer web app with
                    Flask for PDF, TXT, and DOCX.
                  </li>
                  <li>
                    Integrated Gemini API for summarization and interactive Q&A.
                  </li>
                  <li>
                    Built preprocessing workflows and responsive student-facing
                    UI.
                  </li>
                </ul>
              </article>

              <article className="timeline-item glass-card">
                <div className="timeline-head">
                  <h3>Learning & Certification Track</h3>
                  <span>2023 - 2025</span>
                </div>
                <p>Continuous upskilling in AI, cloud, Java, analytics, and UI/UX.</p>
                <ul className="clean-list">
                  {certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section id="contact" className="page-shell">
            <header className="section-head">
              <span className="section-pill">Contact Section</span>
              <h2>Contact</h2>
            </header>
            <div className="contact-grid">
              <article className="contact-card glass-card">
                <h3>Email</h3>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </article>
              <article className="contact-card glass-card">
                <h3>Phone</h3>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </article>
              <article className="contact-card glass-card">
                <h3>LinkedIn</h3>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/aswin-bharathi
                </a>
              </article>
              <article className="contact-card glass-card">
                <h3>GitHub</h3>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/Aswin-bharathi
                </a>
              </article>
            </div>
            <article className="glass-card final-cta">
              <span className="section-pill">Open To Work</span>
              <h3>Looking for Software Developer and AI Product Roles</h3>
              <p>
                I am open to internships and full-time opportunities where I can
                contribute to real products with strong engineering quality.
              </p>
              <div className="hero-actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  Start a Conversation
                </a>
                <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
