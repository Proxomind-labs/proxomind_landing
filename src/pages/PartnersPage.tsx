import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InquiryPanel from '../components/InquiryPanel';
import ProductName from '../components/ProductName';

const partnerBenefits = [
  'Cloud-first deployment story',
  'PACS + AI bundle for stronger demos',
  'Recurring revenue model',
  'Partner-friendly onboarding',
  'Fast center activation',
  'Multi-center sales opportunity',
  'Future RIS/LIMS upsell',
  'Training and support documentation',
  'Demo environment for prospects',
  'Regional partner opportunity',
];

const salesFlow = [
  'Discover center needs',
  'Map modalities',
  'Demo ProxoPACS + ProxoAI',
  'Deploy cloud workflow',
  'Expand with RIS/LIMS',
];

const partnerProducts = [
  ['ProxoPACS', 'Live cloud PACS for upload, viewing, sharing, reporting workflow, and multi-center access.'],
  ['ProxoAI', 'Live assistive layer for report review, image analysis support, and clinical summaries.'],
  ['ProxoRIS', 'Upcoming scheduling, worklists, assignments, and radiology operations visibility.'],
  ['ProxoLIMS', 'Upcoming lab sample tracking, lab reports, and center-to-lab coordination.'],
  ['TeleReporting', 'Coming remote reads, case assignment, urgent routing, and report delivery.'],
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

function ChipList({ items }: { items: string[] }) {
  return <div className="pm-chip-grid">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

export default function PartnersPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToInquiry = () => document.getElementById('partner-inquiry')?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    if (location.hash === '#partner-inquiry') {
      window.setTimeout(scrollToInquiry, 80);
    }
  }, [location.hash]);

  return (
    <div className="pm-page">
      <section className="pm-hero pm-partner-hero">
        <div className="pm-hero-copy">
          <motion.span initial="hidden" animate="visible" variants={fadeInUp} className="pm-kicker">
            Channel partner program
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Sell a serious diagnostic software platform around every imaging center conversation.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
            Proxomind gives partners a clean cloud PACS + medical AI story today, with RIS, LIMS, and TeleReporting modules that grow long-term customer value.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pm-actions">
            <button onClick={scrollToInquiry} className="pm-btn primary">Become a Partner</button>
            <button onClick={() => navigate('/products')} className="pm-btn secondary">View Platform</button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pm-dashboard-mock partner-board"
        >
          <div className="pm-window-bar"><span /><span /><span /><strong>Partner Growth Console</strong></div>
          <div className="pm-partner-metrics">
            {['Demo centers', 'Live deployments', 'AI-assisted workflow', 'Expansion roadmap'].map((metric, index) => (
              <article key={metric}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{metric}</span>
              </article>
            ))}
          </div>
          <img src="/images/pacs-workstation.avif" alt="Partner-ready ProxoPACS DICOM workstation" />
        </motion.div>
      </section>

      <section className="pm-section">
        <div className="pm-section-head">
          <span className="pm-kicker">Partner product stack</span>
          <h2>One company. Multiple products your customers can grow into.</h2>
        </div>
        <div className="pm-product-ecosystem">
          {partnerProducts.map(([name, copy]) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pm-card pm-ecosystem-card"
            >
              <h3><ProductName name={name} /></h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-image-section">
        <div>
          <span className="pm-kicker">Why partners can sell this</span>
          <h2>Every imaging center needs better access, backup, sharing, and remote reads.</h2>
          <p>
            ProxoPACS makes the operational pain obvious in a demo. ProxoAI adds a strong AI workflow layer. The upcoming RIS, LIMS, and TeleReporting modules make the account expandable after the first deployment.
          </p>
          <button onClick={scrollToInquiry} className="pm-btn primary">Start Partner Conversation</button>
        </div>
        <div className="pm-card">
          <h3>Partner advantages</h3>
          <ChipList items={partnerBenefits} />
        </div>
      </section>

      <section className="pm-section pm-architecture">
        <div className="pm-section-head">
          <span className="pm-kicker">Sales motion</span>
          <h2>A clean path from prospect to recurring software account.</h2>
        </div>
        <div className="pm-workflow partner-flow">
          {salesFlow.map((step) => <div key={step}>{step}</div>)}
        </div>
      </section>

      <section className="pm-final-cta">
        <h2>Ready to sell the next generation of diagnostic software?</h2>
        <p>Proxomind provides demo environment, training, and ongoing support for channel partners.</p>
        <div className="pm-actions">
          <button onClick={scrollToInquiry} className="pm-btn primary">Start Partner Conversation</button>
          <button onClick={() => navigate('/products')} className="pm-btn ghost">View Full Platform</button>
        </div>
      </section>

      <section className="pm-section pm-contact-section pm-partner-inquiry" id="partner-inquiry">
        <div className="pm-section-head">
          <span className="pm-kicker">Partner enquiry</span>
          <h2>Partner onboarding and product demos in one place.</h2>
          <p>Share your region, center network, modality mix, or partner plan. The same Proxomind team handles sales, onboarding, and product demo conversations.</p>
        </div>
        <InquiryPanel
          title="Partner Enquiry"
          intro="Use this form for channel partnerships, center demos, ProxoPACS rollout questions, or ProxoAI workflow evaluation."
          items={[
            'Channel partner / reseller partnership',
            'Demo environment access',
            'Center onboarding and activation',
            'PACS + AI bundle discussion',
            'Regional partner opportunity',
          ]}
        />
      </section>
    </div>
  );
}
