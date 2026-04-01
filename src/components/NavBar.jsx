import { useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { to: '#home', label: 'Home', mini: '01' },
  { to: '#about', label: 'About', mini: '02' },
  { to: '#skills', label: 'Skills', mini: '03' },
  { to: '#services', label: 'Services', mini: '04' },
  { to: '#projects', label: 'Projects', mini: '05' },
  { to: '#experience', label: 'Experience', mini: '06' },
  { to: '#contact', label: 'Contact', mini: '07' },
]

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
      <a href="#home" className="brand">
        <span className="brand-mark">AB</span>
        <span className="brand-text">Aswin Bharathi</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((item) => (
          <a key={item.to} href={item.to} className="nav-link" onClick={handleNavClick}>
            <span className="nav-link-glow" />
            <span className="nav-label">{item.label}</span>
            <span className="nav-mini">{item.mini}</span>
          </a>
        ))}
      </div>

      <a className={`nav-cta ${menuOpen ? 'open' : ''}`} href={`mailto:${profile.email}`} onClick={handleNavClick}>
        Let&apos;s Talk
      </a>
    </nav>
  )
}

export default NavBar
