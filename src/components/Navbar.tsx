import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

type Theme = 'dark' | 'light';

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.localStorage.getItem('proxomind-theme') === 'light' ? 'light' : 'dark';
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('proxomind-theme', theme);
  }, [theme]);

  const isActive = (path: string) => location.pathname === path;
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <Logo />
        </a>
        <div className="nav-punchline">Bring every diagnostic center into the cloud era.</div>
        <nav className="nav">
          <button
            onClick={() => navigate('/')}
            className={`nav-link${isActive('/') ? ' nav-link-active' : ''}`}
          >Home</button>
          <button
            onClick={() => navigate('/products')}
            className={`nav-link${isActive('/products') ? ' nav-link-active' : ''}`}
          >Products</button>
          <button
            onClick={() => navigate('/dealers')}
            className={`nav-link${isActive('/dealers') ? ' nav-link-active' : ''}`}
          >Dealers</button>
          <button
            onClick={() => navigate('/contact')}
            className={`nav-link${isActive('/contact') ? ' nav-link-active' : ''}`}
          >Contact</button>
          <button className="cta-btn" onClick={() => navigate('/contact')}>Dealer Inquiry</button>
        </nav>
        <button
          type="button"
          className="theme-toggle"
          aria-label={`Switch to ${nextTheme} mode`}
          onClick={() => setTheme(nextTheme)}
        >
          <span className="theme-toggle-track"><span className="theme-toggle-knob" /></span>
          <span>{nextTheme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
        <button className="mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
