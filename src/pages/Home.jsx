import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { profile, skills } from '../data/profile'

function Home() {
  return (
    <PageShell
      title={profile.name}
      subtitle="Full Stack Web Developer | AI Integration | Automation Systems"
    >
      <div className="hero-grid">
        <article className="glass-card pulse-border">
          <h2>{profile.title}</h2>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Hire Me
            </a>
            <Link to="/projects" className="btn btn-ghost">
              View Projects
            </Link>
          </div>
        </article>

        <article className="glass-card tilt-card">
          <h3>Quick Snapshot</h3>
          <ul className="clean-list">
            <li>Final-year BSc Computer Science student (2023-2026)</li>
            <li>84.2% aggregate up to 5th semester</li>
            <li>Hands-on with Flask, APIs, MySQL, and Gemini</li>
            <li>Focused on building scalable AI-powered tools</li>
          </ul>
        </article>
      </div>

      <div className="skill-ribbon" aria-label="Core skills">
        {skills.concat(skills).map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </PageShell>
  )
}

export default Home
