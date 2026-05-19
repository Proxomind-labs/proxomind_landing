import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  { name: 'ProxoPACS', status: 'Live', title: 'Cloud PACS', copy: 'DICOM upload, browser viewer, study list, reporting workflow, secure sharing, and multi-center access.' },
  { name: 'ProxoAI', status: 'Live', title: 'Medical AI Assistant', copy: 'AI-assisted report review, image analysis support, clinical summaries, and workflow acceleration.' },
  { name: 'ProxoLIMS', status: 'Upcoming', title: 'Lab Workflow', copy: 'Sample lifecycle, lab orders, reports, barcode-ready workflows, and diagnostics coordination.' },
  { name: 'ProxoRIS', status: 'Upcoming', title: 'Radiology Operations', copy: 'Appointments, modality worklists, radiologist assignment, utilization views, and department flow.' },
  { name: 'TeleReporting', status: 'Coming', title: 'Remote Reads', copy: 'Remote reporting, case assignment, radiologist network, urgent routing, and secure report delivery.' },
];

const audiences = [
  ['Diagnostic Centers', 'Cloud study access, organized patient imaging records, remote radiologist sharing, and lower IT complexity.'],
  ['Hospitals', 'Centralized imaging visibility, doctor/radiologist collaboration, cloud archive, and future RIS/LIMS expansion.'],
  ['Radiologists', 'Browser viewer access, report improvement assistance, case summaries, and remote-ready review workflows.'],
  ['Dealers', 'A complete PACS + AI software story to bundle with imaging equipment and grow recurring revenue.'],
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
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pm-kicker">
            Proxomind Labs diagnostic cloud platform
          </motion.div>
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
          <img src="/images/dicom-workstation.svg" alt="ProxoPACS DICOM workstation showing worklist and CT scan viewers" />
          <div className="pm-hero-metrics">
            <span><strong>Live</strong> ProxoPACS</span>
            <span><strong>Live</strong> ProxoAI</span>
            <span><strong>Upcoming</strong> RIS + LIMS</span>
            <span><strong>Coming</strong> TeleReporting</span>
          </div>
        </motion.div>
      </section>

      <section className="pm-section pm-product-strip">
        {products.map((product) => (
          <article key={product.name} className="pm-product-tile">
            <img src="/proxopacs-mark.svg" alt="" />
            <StatusBadge status={product.status} />
            <h3>{product.name}</h3>
            <strong>{product.title}</strong>
            <p>{product.copy}</p>
          </article>
        ))}
      </section>

      <section className="pm-section pm-split pm-image-section">
        <div>
          <span className="pm-kicker">Serious healthcare SaaS</span>
          <h2>One company. Five products. A full diagnostic workflow roadmap.</h2>
          <p>Proxomind is focused on diagnostic software: ProxoPACS and ProxoAI are live today, with ProxoRIS, ProxoLIMS, and TeleReporting expanding the platform into a complete diagnostic operating system.</p>
          <button onClick={() => navigate('/products')} className="pm-btn primary">View Full Platform</button>
        </div>
        <div className="pm-audience-grid">
          {audiences.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-split pm-ai-showcase">
        <div className="pm-image-card">
          <img src="/images/ai-report-panel.svg" alt="ProxoAI assistive report review panel with radiology scan" />
        </div>
        <div>
          <span className="pm-kicker">ProxoAI inside the workflow</span>
          <h2>Report review, image assistance, and clinical summaries without replacing doctors.</h2>
          <p>AI assistance sits next to the PACS viewer as a decision-support layer for faster context review, cleaner reports, and better handoff between centers and radiologists.</p>
          <button onClick={() => navigate('/products')} className="pm-btn secondary">Explore ProxoAI</button>
        </div>
      </section>
    </div>
  );
}
