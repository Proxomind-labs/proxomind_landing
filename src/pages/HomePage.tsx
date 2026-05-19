import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductName from '../components/ProductName';
import { PROXOPACS_URL } from '../constants';

const products = [
  { name: 'ProxoPACS', status: 'Live', title: 'Cloud PACS', href: PROXOPACS_URL, copy: 'DICOM upload, browser viewer, study list, reporting workflow, secure sharing, and multi-center access.' },
  { name: 'ProxoAI', status: 'Live', title: 'Medical AI Assistant', copy: 'AI-assisted report review, image analysis support, clinical summaries, and workflow acceleration.' },
  { name: 'ProxoLIMS', status: 'Upcoming', title: 'Lab Workflow', copy: 'Sample lifecycle, lab orders, reports, barcode-ready workflows, and diagnostics coordination.' },
  { name: 'ProxoRIS', status: 'Upcoming', title: 'Radiology Operations', copy: 'Appointments, modality worklists, radiologist assignment, utilization views, and department flow.' },
  { name: 'TeleReporting', status: 'Coming', title: 'Remote Reads', copy: 'Remote reporting, case assignment, radiologist network, urgent routing, and secure report delivery.' },
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
            Cloud PACS and medical AI for serious diagnostic networks.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
            ProxoPACS and ProxoAI are live today, with ProxoRIS, ProxoLIMS, and TeleReporting expanding into one dealer-ready healthcare software stack.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pm-actions">
            <button onClick={() => navigate('/contact')} className="pm-btn primary">Book a Demo</button>
            <button onClick={() => navigate('/dealers')} className="pm-btn secondary">Become a Dealer</button>
            <button onClick={() => navigate('/products')} className="pm-btn ghost">Explore Products</button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="pm-workstation-hero">
          <img src="/images/pacs-workstation.avif" alt="ProxoPACS DICOM workstation showing worklist and CT scan viewers" />
        </motion.div>
      </section>

      <section className="pm-section pm-product-strip">
        {products.map((product) => (
          <article key={product.name} className={`pm-product-tile${product.href ? ' pm-linked-tile' : ''}`}>
            <StatusBadge status={product.status} />
            <h3><ProductName name={product.name} /></h3>
            <strong>{product.title}</strong>
            <p>{product.copy}</p>
            {product.href && <a href={product.href} target="_blank" rel="noopener noreferrer" className="pm-card-link">Open ProxoPACS</a>}
          </article>
        ))}
      </section>

      <section className="pm-section pm-ai-command">
        <div className="pm-ai-command-copy">
          <span className="pm-kicker">ProxoAI command layer</span>
          <h2>AI assistance that sits beside PACS, reports, and radiologist review.</h2>
          <p>ProxoAI helps teams move from raw imaging context to cleaner report review, faster summaries, and better handoff between diagnostic centers, doctors, and radiologists.</p>
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
            <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-btn secondary">Open ProxoPACS</a>
          </div>
        </div>
        <div className="pm-ai-command-visual">
          <img className="pm-ai-dashboard-image" src="/images/proxoai-report-console.png" alt="ProxoPACS reporting console powered by ProxoAI" />
        </div>
      </section>
    </div>
  );
}
