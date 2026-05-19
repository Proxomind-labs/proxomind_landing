import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductName from '../components/ProductName';

const dealerBenefits = [
  'Cloud-first deployment story',
  'PACS + AI bundle for stronger demos',
  'Recurring revenue model',
  'Dealer-friendly onboarding',
  'Fast center activation',
  'Multi-center sales opportunity',
  'Future RIS/LIMS upsell',
  'Training and support documentation',
  'Demo environment for prospects',
  'Regional partner opportunity',
  'Local uploader support',
  'Long-term diagnostic account value',
];

const salesFlow = [
  'Discover center needs',
  'Map modalities',
  'Demo ProxoPACS + ProxoAI',
  'Deploy cloud workflow',
  'Expand with RIS/LIMS',
];

const dealerProducts = [
  ['ProxoPACS', 'Live cloud PACS for upload, viewing, sharing, reporting workflow, and multi-center access.'],
  ['ProxoAI', 'Live assistive layer for report review, image analysis support, and clinical summaries.'],
  ['ProxoRIS', 'Upcoming scheduling, worklists, assignments, and radiology operations visibility.'],
  ['ProxoLIMS', 'Upcoming lab sample tracking, lab reports, and center-to-lab coordination.'],
  ['TeleReporting', 'Coming remote reads, case assignment, urgent routing, and report delivery.'],
];

function ChipList({ items }: { items: string[] }) {
  return <div className="pm-chip-grid">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

export default function DealersPage() {
  const navigate = useNavigate();

  return (
    <div className="pm-page">
      <section className="pm-hero pm-dealer-hero">
        <div className="pm-hero-copy">
          <span className="pm-kicker">Dealer / reseller program</span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            Sell a serious diagnostic software platform around every imaging center conversation.
          </motion.h1>
          <p>
            Proxomind gives dealers a clean cloud PACS + medical AI story today, with RIS, LIMS, and TeleReporting roadmap modules that increase long-term customer value.
          </p>
          <div className="pm-actions">
            <button onClick={() => navigate('/contact')} className="pm-btn primary">Become a Dealer</button>
            <button onClick={() => navigate('/products')} className="pm-btn secondary">View Platform</button>
          </div>
          <div className="pm-badge-row">
            {['Dealer friendly', 'Cloud ready', 'PACS + AI live', 'Recurring revenue', 'Future RIS/LIMS upsell'].map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </div>
        <div className="pm-dashboard-mock dealer-board">
          <div className="pm-window-bar"><span/><span/><span/><strong>Dealer Growth Console</strong></div>
          <div className="pm-dealer-metrics">
            {['Demo centers', 'Live deployments', 'AI-assisted workflow', 'Expansion roadmap'].map((metric, index) => (
              <article key={metric}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{metric}</span>
              </article>
            ))}
          </div>
          <img src="/images/pacs-workstation.avif" alt="Dealer-ready ProxoPACS DICOM workstation visual" />
        </div>
      </section>

      <section className="pm-section">
        <div className="pm-section-head">
          <span className="pm-kicker">Dealer product stack</span>
          <h2>One company, multiple products your customers can grow into.</h2>
        </div>
        <div className="pm-product-ecosystem">
          {dealerProducts.map(([name, copy]) => (
            <article className="pm-card pm-ecosystem-card" key={name}>
              <h3><ProductName name={name} /></h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-image-section">
        <div>
          <span className="pm-kicker">Why dealers can sell this</span>
          <h2>Every imaging center needs better access, backup, sharing, and remote reads.</h2>
          <p>
            ProxoPACS makes the operational pain obvious in a demo. ProxoAI adds a strong assistive workflow layer. The upcoming RIS/LIMS/TeleReporting modules make the account expandable after the first deployment.
          </p>
          <button onClick={() => navigate('/contact')} className="pm-btn primary">Start Dealer Conversation</button>
        </div>
        <div className="pm-card">
          <h3>Dealer advantages</h3>
          <ChipList items={dealerBenefits} />
        </div>
      </section>

      <section className="pm-section pm-architecture">
        <div className="pm-section-head">
          <span className="pm-kicker">Sales motion</span>
          <h2>A clean path from prospect to recurring software account.</h2>
        </div>
        <div className="pm-workflow dealer-flow">
          {salesFlow.map((step) => <div key={step}>{step}</div>)}
        </div>
      </section>
    </div>
  );
}
