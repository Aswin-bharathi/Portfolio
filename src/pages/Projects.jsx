import PageShell from '../components/PageShell'
import { projects } from '../data/profile'

function Projects() {
  return (
    <PageShell
      title="Projects"
      subtitle="Selected work across AI, automation, and academic platforms"
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card color-shift">
            <div className="project-header">
              <h2>{project.title}</h2>
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
    </PageShell>
  )
}

export default Projects
