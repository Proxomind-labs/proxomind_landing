import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <Logo />
            </a>
            <p>Advanced AI &amp; Computer Vision Solutions based in India. We deliver cutting-edge LLM and computer vision projects.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>LLM Development</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>Computer Vision</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>ML Engineering</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>AI Consulting</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>Projects</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@proxomind.com">contact@proxomind.com</a></li>
              <li><a href="#">India</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">2026 ProxoMind. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
