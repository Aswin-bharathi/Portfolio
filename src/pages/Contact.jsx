import PageShell from '../components/PageShell'
import { profile } from '../data/profile'

function Contact() {
  return (
    <PageShell
      title="Contact"
      subtitle="Open to software engineering and AI-focused opportunities"
    >
      <div className="contact-grid">
        <article className="contact-card glass-card">
          <h2>Email</h2>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </article>
        <article className="contact-card glass-card">
          <h2>Phone</h2>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </article>
        <article className="contact-card glass-card">
          <h2>LinkedIn</h2>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/aswin-bharathi
          </a>
        </article>
        <article className="contact-card glass-card">
          <h2>GitHub</h2>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/Aswin-bharathi
          </a>
        </article>
      </div>
    </PageShell>
  )
}

export default Contact
