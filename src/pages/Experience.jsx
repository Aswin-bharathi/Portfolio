import PageShell from '../components/PageShell'

function Experience() {
  return (
    <PageShell
      title="Experience"
      subtitle="Internship and delivery impact"
    >
      <div className="timeline">
        <article className="timeline-item glass-card">
          <div className="timeline-head">
            <h2>Software Development Intern</h2>
            <span>May 2025 - Jun 2025</span>
          </div>
          <p>Unijac Technologies (Ayya Nadar Janaki Ammal College)</p>
          <ul className="clean-list">
            <li>
              Designed and developed an AI Notes Summarizer web application with
              Flask for PDF, TXT, and DOCX files.
            </li>
            <li>
              Integrated Google Gemini API for text summarization and an
              interactive Q&A assistant.
            </li>
            <li>
              Built preprocessing pipelines and responsive UI to improve student
              learning workflow.
            </li>
          </ul>
        </article>
      </div>
    </PageShell>
  )
}

export default Experience
