import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import ProductName from './ProductName';
import { PROXOPACS_URL } from '../constants';

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
            <p>Proxomind Labs builds medical imaging software for hospitals, diagnostic centers, radiology teams, and equipment partners.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              {['ProxoPACS', 'ProxoAI', 'ProxoLIMS', 'ProxoRIS', 'TeleReporting'].map((name) => (
                <li key={name}>
                  <a
                    href={name === 'ProxoPACS' ? PROXOPACS_URL : '#'}
                    target={name === 'ProxoPACS' ? '_blank' : undefined}
                    rel={name === 'ProxoPACS' ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (name !== 'ProxoPACS') {
                        e.preventDefault();
                        navigate('/products');
                      }
                    }}
                  >
                    <ProductName name={name} className="footer-product-name" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Audience</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>Diagnostic Centers</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>Hospitals</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>Radiologists</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/partners'); }}>Partners</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/partners#partner-inquiry'); }}>Enquiry</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Talk To Us</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/partners#partner-inquiry'); }}>Partner Enquiry</a></li>
              <li><a href="mailto:contact@proxomind.com">contact@proxomind.com</a></li>
              <li><a href="https://proxomind.com">proxomind.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">2026 Proxomind Labs. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/proxomind/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
