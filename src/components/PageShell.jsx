function PageShell({ title, subtitle, children }) {
  return (
    <section className="page-shell page-enter">
      <header className="page-header">
        <p className="page-kicker">Portfolio</p>
        <h1>{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  )
}

export default PageShell
