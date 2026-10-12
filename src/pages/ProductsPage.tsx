import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductName from '../components/ProductName';
import { PROXOPACS_URL } from '../constants';

const productCards = [
  {
    name: 'Sonar', status: 'Live', headline: 'Remote & Enterprise PACS with zero monthly subscription fees.',
    description: 'Ultra-fast remote and enterprise PACS engine. Sub-second image load times, local high-speed mesh transfer, and full remote access with no recurring subscription fees.',
    features: ['Zero monthly subscription', 'Remote & cloud access', 'Sub-second image loading', 'DICOM C-STORE/C-ECHO gateway', 'P2P mesh transfer', 'Diagnostic radiologist client'],
  },
  {
    name: 'CloudPACS', status: 'Live', headline: 'Browser-first cloud PACS for diagnostic imaging networks.',
    description: 'Browser-native DICOM viewer, cloud study archive, multi-center operations, and secure study sharing.',
    features: ['Browser DICOM viewer', 'Cloud study access', 'Multi-center support', 'Role-based access', 'Report workflow', 'Secure sharing links', 'Cloud storage backend'],
  },
  {
    name: 'Prism', status: 'Live', headline: 'Diagnostic workstation connected directly to flat-panel detectors.',
    description: 'Hardware acquisition workstation linking digital radiography detectors with PACS with zero intermediate delay.',
    features: ['Detector hardware integration', 'PACS auto-push', 'Local acquisition viewing', 'Calibration & QC tools', 'Modality interface'],
  },
  {
    name: 'ProxoAI', status: 'Live', headline: 'Medical AI assistant layer for report review and workflow.',
    description: 'Assistive finding extraction, clinical summaries, impression drafting, and radiologist productivity support.',
    features: ['Report analysis', 'Assistive triage notes', 'Impression drafting', 'Finding extraction', 'Report quality review', 'Clinical summary'],
  },
  {
    name: 'HMS', status: 'Live', headline: 'Connected hospital management for clinical care coordination.',
    description: 'Live hospital information workflow connecting patient administration, clinical care, EMR integration, and billing.',
    features: ['Patient flow tracking', 'Billing & invoicing', 'Department coordination', 'EMR integration', 'Clinical documentation'],
  },
  {
    name: 'RIS', status: 'Upcoming', headline: 'Radiology operations & modality department flow.',
    description: 'Appointments, modality worklists, radiologist assignments, and imaging center operations.',
    features: ['Modality worklists', 'Appointment scheduling', 'Radiologist assignment', 'Patient tracking', 'Center utilization'],
  },
  {
    name: 'LIMS', status: 'Upcoming', headline: 'Laboratory information workflow connected to diagnostics.',
    description: 'Sample lifecycle tracking, barcode-ready workflows, and automated diagnostic reports.',
    features: ['Sample barcode tracking', 'Lab order management', 'Automated reports', 'Diagnostics coordination', 'Sample status tracking'],
  },
  {
    name: 'TeleReporting', status: 'Coming', headline: 'Secure remote radiology reporting network.',
    description: 'Encrypted remote reads, urgent study routing, case assignment, and fast report delivery.',
    features: ['Remote reads', 'Radiologist network', 'Case assignment', 'Urgent study routing', 'Encrypted cloud delivery'],
  },
];

const pacsFeatures = [
  'Zero monthly fees with Sonar', 'Browser DICOM viewer', 'Local uploader bridge app',
  'X-ray, CT, MRI, US support', 'Study search and filtering', 'Patient-wise access',
  'Multi-user login', 'Viewer-only access', 'Radiologist access', 'Secure sharing links',
  'Report attachment', 'AWS S3 cloud storage backend',
];

const aiGroups: [string, string[]][] = [
  ['Report Intelligence', ['Report review', 'Summary generation', 'Impression cleanup', 'Finding extraction', 'Report comparison']],
  ['Image Assistance', ['Image review support', 'X-ray/CT/MRI/US assistance', 'Region-focused observation', 'Assistive triage notes']],
  ['Workflow Intelligence', ['Case summary', 'Doctor-friendly explanation', 'Patient summary', 'Report quality checks']],
];

const productFaqs = [
  {
    question: 'What is Sonar Enterprise PACS?',
    answer: 'Sonar is a high-speed remote and enterprise PACS without monthly subscription fees. It offers sub-second diagnostic image loading, local mesh networking, and full remote access.',
  },
  {
    question: 'What is CloudPACS?',
    answer: 'CloudPACS is a browser-first cloud PACS offering instant DICOM viewing, scalable cloud storage, multi-center access, and secure sharing.',
  },
  {
    question: 'What is HMS?',
    answer: 'HMS is Proxomind Labs\' live hospital management system for unified patient care, clinical records, department flow, and billing.',
  },
  {
    question: 'What is Prism?',
    answer: 'Prism is a diagnostic workstation that interfaces directly with flat-panel DR detectors and pushes acquired scans straight into your PACS pipeline.',
  },
];

function StatusBadge({ status }: { status: string }) {
  return <span className={`pm-status ${status === 'Live' ? 'live' : ''}`}>{status}</span>;
}

function FeatureList({ items }: { items: string[] }) {
  return <div className="pm-chip-grid">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="pm-page pm-product-page">
      <section className="pm-section pm-products-top">
        <div className="pm-section-head">
          <span className="pm-kicker">Product Ecosystem</span>
          <h2>Eight products. One connected diagnostic platform.</h2>
        </div>
        <div className="pm-product-ecosystem">
          {productCards.map((product) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pm-card pm-ecosystem-card"
            >
              <StatusBadge status={product.status} />
              <h3><ProductName name={product.name} /></h3>
              <strong>{product.headline}</strong>
              <p>{product.description}</p>
              <FeatureList items={product.features} />
              {product.name === 'CloudPACS' && (
                <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-card-link">
                  Launch CloudPACS
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-deep-section pacs">
        <div className="pm-section-head">
          <span className="pm-kicker">PACS Solutions</span>
          <h2>Remote, Cloud, and Enterprise imaging built for maximum speed.</h2>
        </div>
        <div className="pm-deep-grid">
          <FeatureList items={pacsFeatures} />
          <div className="pm-image-card">
            <img src="/images/pacs-workstation.avif" alt="PACS workstation with DICOM worklist and scan viewers" />
          </div>
        </div>
      </section>

      <section className="pm-section pm-ai-deep">
        <div className="pm-section-head">
          <span className="pm-kicker">ProxoAI</span>
          <h2>Medical AI assistance inside the diagnostic workflow.</h2>
          <p>Designed as a radiologist productivity and decision-support layer, not a replacement for professional judgment.</p>
        </div>
        <div className="pm-ai-layout">
          <div className="pm-image-card proxoai-console-card">
            <img src="/images/proxoai-report-console.png" alt="ProxoAI reporting console" />
          </div>
          <div className="pm-grid cols-3">
            {aiGroups.map(([title, items]) => (
              <article className="pm-card" key={title}>
                <h3>{title}</h3>
                <FeatureList items={items} />
              </article>
            ))}
          </div>
        </div>
        <p className="pm-disclaimer">
          ProxoAI supports review and workflow acceleration. Final diagnosis and clinical decisions remain with qualified medical professionals.
        </p>
      </section>

      <section className="pm-section pm-search-faq" aria-labelledby="product-answer-title">
        <div className="pm-section-head">
          <span className="pm-kicker">Product Answers</span>
          <h2 id="product-answer-title">Clear product facts for diagnostic buyers and healthcare partners.</h2>
        </div>
        <div className="pm-grid cols-4">
          {productFaqs.map((item) => (
            <article className="pm-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-final-cta">
        <h2>Turn local imaging into cloud-connected diagnostic networks.</h2>
        <p>From DICOM upload to AI-assisted reporting, Proxomind connects the full diagnostic workflow.</p>
        <div className="pm-actions">
          <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn primary">Book Live Demo</button>
          <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-btn secondary">Open CloudPACS</a>
          <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn ghost">Partner With Us</button>
        </div>
      </section>
    </div>
  );
}
