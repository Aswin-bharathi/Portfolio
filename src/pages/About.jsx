import PageShell from '../components/PageShell'
import { certifications } from '../data/profile'

function About() {
  return (
    <PageShell
      title="About Me"
      subtitle="I build practical software that blends engineering discipline with intelligent automation."
    >
      <div className="content-grid">
        <article className="glass-card">
          <h2>Professional Summary</h2>
          <p>
            I am a software developer with a strong base in Python and full-stack
            web development. I enjoy turning messy real-world workflows into
            clean applications that people can rely on.
          </p>
          <p>
            My recent work focuses on AI integration, REST APIs, and responsive
            interfaces. I care about product clarity, speed, and maintainability.
          </p>
        </article>

        <article className="glass-card">
          <h2>Education</h2>
          <ul className="clean-list">
            <li>BSc Computer Science - Ayya Nadar Janaki Ammal College</li>
            <li>2023 - 2026 | 84.2% (up to semester 5)</li>
            <li>HSC - GS Hindu Hr Sec School | 82.1%</li>
          </ul>
        </article>

        <article className="glass-card full-width">
          <h2>Certifications</h2>
          <div className="badge-grid">
            {certifications.map((certification) => (
              <span className="badge-chip" key={certification}>
                {certification}
              </span>
            ))}
          </div>
        </article>
      </div>
    </PageShell>
  )
}

export default About
