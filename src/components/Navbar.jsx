import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          rk<span>.</span>
        </a>

        <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="icon-button menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((isOpen) => !isOpen)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}