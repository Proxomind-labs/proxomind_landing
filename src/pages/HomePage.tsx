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

const searchSnapshot = [
  {
    title: 'What Proxomind Labs builds',
    copy: 'Proxomind Labs builds healthcare cloud software for diagnostic imaging centers, hospitals, radiologists, and channel partners. The platform connects cloud PACS, DICOM viewing, AI-assisted report review, RIS, LIMS, and remote reporting workflows.',
  },
  {
    title: 'Main live products',
    copy: 'ProxoPACS is a live browser-first cloud PACS for DICOM upload, study access, cloud storage, secure sharing, and radiologist workflows. ProxoAI is a live medical AI assistance layer for report review, image review support, clinical summaries, and workflow acceleration.',
  },
  {
    title: 'Best-fit customers',
    copy: 'Proxomind is designed for X-ray centers, CT centers, MRI centers, ultrasound centers, multi-location diagnostic chains, hospital radiology departments, independent radiologists, and partners selling healthcare software with imaging equipment.',
  },
  {
    title: 'Clinical safety position',
    copy: 'ProxoAI is an assistive decision-support and workflow tool. It supports clinical context extraction and reporting productivity, but final diagnosis and clinical decisions remain with qualified medical professionals.',
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
            Cloud PACS and medical AI for modern diagnostic networks.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
            ProxoPACS and ProxoAI are live today, with ProxoRIS, ProxoLIMS, and TeleReporting completing one partner-ready healthcare platform.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pm-actions">
            <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn primary">Book a Demo</button>
            <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn secondary">Partner With Us</button>
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

      <section className="pm-section pm-seo-snapshot" aria-labelledby="platform-snapshot-title">
        <div className="pm-section-head">
          <span className="pm-kicker">Platform Snapshot</span>
          <h2 id="platform-snapshot-title">Cloud PACS, medical AI, RIS, LIMS, and TeleReporting in one diagnostic software stack.</h2>
          <p>
            Proxomind is a healthcare SaaS platform for diagnostic centers moving from local imaging systems to cloud-connected workflows.
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
