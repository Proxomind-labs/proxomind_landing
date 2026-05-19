import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductName from '../components/ProductName';
import { PROXOPACS_URL } from '../constants';

const productCards = [
  {
    name: 'ProxoPACS', status: 'Live', headline: 'Browser-first cloud PACS for diagnostic centers.',
    description: 'DICOM upload, study access, browser viewing, reporting workflow, multi-site operations, and secure sharing.',
    features: ['DICOM upload workflow', 'Browser DICOM viewer', 'Study list and patient access', 'Cloud storage', 'Multi-center support', 'Role-based access', 'Report workflow support', 'Secure sharing'],
  },
  {
    name: 'ProxoAI', status: 'Live', headline: 'Medical AI assistant layer for review and workflow.',
    description: 'AI-assisted report review, image analysis support, clinical summaries, findings extraction, and decision-support.',
    features: ['Report analysis', 'Image analysis assistance', 'Impression drafting support', 'Finding summarization', 'Report quality review', 'Clinical summary', 'Radiologist productivity support'],
  },
  {
    name: 'ProxoLIMS', status: 'Upcoming', headline: 'Laboratory workflow connected to diagnostic operations.',
    description: 'Lab information workflow for sample tracking, diagnostics coordination, and report flow.',
    features: ['Sample lifecycle tracking', 'Lab order management', 'Report generation', 'Barcode-ready', 'Patient sample status'],
  },
  {
    name: 'ProxoRIS', status: 'Upcoming', headline: 'Radiology information system for department coordination.',
    description: 'Appointments, modality scheduling, worklists, and department coordination for imaging centers.',
    features: ['Appointment scheduling', 'Modality worklists', 'Radiologist assignment', 'Patient flow tracking', 'Center utilization view'],
  },
  {
    name: 'TeleReporting', status: 'Coming', headline: 'Secure remote radiology reporting workflow.',
    description: 'Remote reporting for diagnostic centers, hospitals, and radiologists needing secure remote reads.',
    features: ['Remote reads', 'Radiologist network', 'Case assignment', 'Urgent study routing', 'Secure cloud access'],
  },
];

const pacsFeatures = [
  'DICOM upload from local machine', 'Local uploader bridge app', 'Browser DICOM viewer',
  'X-ray, CT, MRI, US support', 'Study search and filtering', 'Patient-wise access',
  'Multi-user login', 'Viewer-only access', 'Radiologist access', 'Secure sharing links',
  'Report attachment', 'Cloud storage backend',
];

const aiGroups: [string, string[]][] = [
  ['Report Intelligence', ['Report review', 'Summary generation', 'Impression cleanup', 'Finding extraction', 'Report comparison']],
  ['Image Assistance', ['Image review support', 'X-ray/CT/MRI/US assistance', 'Region-focused observation', 'Assistive triage notes']],
  ['Workflow Intelligence', ['Case summary', 'Doctor-friendly explanation', 'Patient summary', 'Report quality checks']],
];

const productFaqs = [
  {
    question: 'What is ProxoPACS?',
    answer: 'ProxoPACS is a browser-first cloud PACS from Proxomind Labs for DICOM upload, cloud study access, image viewing, reporting workflow, secure sharing, and multi-center diagnostic operations.',
  },
  {
    question: 'What is ProxoAI?',
    answer: 'ProxoAI is a medical AI assistance layer for report review, image review support, finding extraction, clinical summaries, impression drafting support, and radiologist productivity workflows.',
  },
  {
    question: 'Who is Proxomind built for?',
    answer: 'Proxomind is built for diagnostic imaging centers, hospitals, radiology departments, independent radiologists, multi-branch diagnostic chains, and channel partners deploying imaging software.',
  },
  {
    question: 'Does ProxoAI replace radiologists or doctors?',
    answer: 'No. ProxoAI is an assistive workflow and decision-support layer. Final diagnosis, report approval, and clinical decision-making must be performed by qualified medical professionals.',
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
          <h2>Five products. One connected diagnostic platform.</h2>
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
              {product.name === 'ProxoPACS' && (
                <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-card-link">
                  Launch ProxoPACS
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-deep-section pacs">
        <div className="pm-section-head">
          <span className="pm-kicker">ProxoPACS</span>
          <h2>Everything an imaging center needs to move from local to cloud.</h2>
        </div>
        <div className="pm-deep-grid">
          <FeatureList items={pacsFeatures} />
          <div className="pm-image-card">
            <img src="/images/pacs-workstation.avif" alt="ProxoPACS workstation with DICOM worklist and scan viewers" />
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
          <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-btn secondary">Open ProxoPACS</a>
          <button onClick={() => navigate('/partners#partner-inquiry')} className="pm-btn ghost">Partner With Us</button>
        </div>
      </section>
    </div>
  );
}
