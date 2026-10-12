import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductName from '../components/ProductName';
import TypewriterText from '../components/TypewriterText';
import { PROXOPACS_URL } from '../constants';

const heroPhrases = [
  'Remote PACS with zero monthly subscription.',
  'Medical AI and Cloud Diagnostics.',
  'Sub-second radiology built for speed.',
];

const products = [
  { name: 'Sonar', status: 'Live', title: 'Remote & Enterprise PACS • No Monthly Fees', copy: 'Remote & Enterprise PACS without monthly subscription fees. Sub-second image load times, local high-speed mesh, and remote access.' },
  { name: 'CloudPACS', status: 'Live', title: 'Cloud PACS', href: PROXOPACS_URL, copy: 'Browser-first cloud PACS for upload, cloud storage, study access, reporting workflow, and secure multi-center sharing.' },
  { name: 'Prism', status: 'Live', title: 'Diagnostic Workstation', copy: 'Hardware-connected diagnostic workstation linking flat-panel detectors directly with PACS.' },
  { name: 'ProxoAI', status: 'Live', title: 'Medical AI Copilot', copy: 'Assistive finding extraction, clinical summaries, report review, and radiologist acceleration.' },
  { name: 'HMS', status: 'Live', title: 'Hospital Management', copy: 'Live connected hospital coordination, patient administration, EMR clinical records, and billing.' },
  { name: 'RIS', status: 'Upcoming', title: 'Radiology Operations', copy: 'Modality worklists, appointment scheduling, radiologist assignments, and department flow.' },
  { name: 'LIMS', status: 'Upcoming', title: 'Lab Workflow', copy: 'Sample barcode tracking, lab orders, diagnostics coordination, and automated reports.' },
  { name: 'TeleReporting', status: 'Coming', title: 'Teleradiology Network', copy: 'Encrypted remote reads, urgent study routing, case assignment, and fast report delivery.' },
];

const searchSnapshot = [
  {
    title: 'Sonar: Remote PACS with zero monthly fees',
    copy: 'Sonar delivers enterprise and remote PACS speed with sub-second image loading and no recurring subscription costs.',
  },
  {
    title: 'CloudPACS: Managed cloud workflows',
    copy: 'CloudPACS provides browser-native DICOM storage, cloud study access, and secure sharing across diagnostic centers.',
  },
  {
    title: 'Live Hospital Suite: Prism & HMS',
    copy: 'Prism connects DR detectors directly to PACS, while HMS coordinates clinical care, patient records, and billing.',
  },
  {
    title: 'Clinical AI Decision-Support',
    copy: 'ProxoAI operates strictly as an assistive workflow layer. Final diagnostic decisions remain with qualified doctors.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

function StatusBadge({ status }: { status: string }) {
  return <span className={`pm-status ${status === 'Live' ? 'live' : ''}`}>{status}</span>;
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="pm-page">
      <section className="pm-hero pm-image-hero">
        <div className="pm-hero-copy">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            <TypewriterText phrases={heroPhrases} holdDelay={5000} />
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
            Sonar Remote PACS (zero monthly fees), CloudPACS, Prism, ProxoAI, and HMS — high-performance radiology and hospital operations.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pm-actions">
            <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn primary">Book a Demo</button>
            <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn secondary">Partner With Us</button>
            <button onClick={() => navigate('/products')} className="pm-btn ghost">Explore Products</button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="pm-workstation-hero">
          <img src="/images/pacs-workstation.avif" alt="CloudPACS and Sonar DICOM workstation showing worklist and CT scan viewers" />
        </motion.div>
      </section>

      <section className="pm-section pm-product-strip">
        {products.map((product) => (
          <article key={product.name} className={`pm-product-tile${product.href ? ' pm-linked-tile' : ''}`}>
            <StatusBadge status={product.status} />
            <h3><ProductName name={product.name} /></h3>
            <strong>{product.title}</strong>
            <p>{product.copy}</p>
            {product.href && <a href={product.href} target="_blank" rel="noopener noreferrer" className="pm-card-link">Open CloudPACS</a>}
          </article>
        ))}
      </section>

      <section className="pm-section pm-seo-snapshot" aria-labelledby="platform-snapshot-title">
        <div className="pm-section-head">
          <span className="pm-kicker">Platform Snapshot</span>
          <h2 id="platform-snapshot-title">Remote PACS, Cloud PACS, medical AI, RIS, and HMS in one cohesive suite.</h2>
          <p>
            Built for diagnostic centers and hospitals looking for high-speed imaging without unnecessary overhead.
          </p>
        </div>
        <div className="pm-seo-grid">
          {searchSnapshot.map((item) => (
            <article className="pm-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-ai-command">
        <div className="pm-ai-command-copy">
          <span className="pm-kicker">ProxoAI command layer</span>
          <h2>AI assistance that sits beside PACS, reports, and radiologist review.</h2>
          <p>ProxoAI moves teams from raw imaging context to cleaner report review, faster summaries, and smoother coordination between centers, doctors, and radiologists.</p>
          <div className="pm-ai-command-grid">
            {[
              ['Report Intelligence', 'Summaries, impression cleanup, finding extraction, and report quality review.'],
              ['Image Review Support', 'Assistive scan context, region-focused observations, and triage notes.'],
              ['Workflow Acceleration', 'Patient-friendly summaries, prior report context, and decision-support notes.'],
            ].map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>{copy}</span>
              </article>
            ))}
          </div>
          <div className="pm-actions">
            <button onClick={() => navigate('/products')} className="pm-btn primary">Explore ProxoAI</button>
            <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-btn secondary">Open CloudPACS</a>
          </div>
        </div>
        <div className="pm-ai-command-visual">
          <img className="pm-ai-dashboard-image" src="/images/proxoai-report-console.png" alt="CloudPACS reporting console powered by ProxoAI" />
        </div>
      </section>
    </div>
  );
}
