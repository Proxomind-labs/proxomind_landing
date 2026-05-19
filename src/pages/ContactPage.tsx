import { motion } from 'framer-motion';
import InquiryPanel from '../components/InquiryPanel';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

export default function ContactPage() {
  return (
    <div className="pm-page">
      <section className="pm-hero pm-contact-hero">
        <div className="pm-hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pm-hero-line">
            Dealer and center inquiries welcome
          </motion.div>
          <motion.span initial="hidden" animate="visible" variants={fadeInUp} className="pm-kicker">
            Contact Proxomind Labs
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Talk to Proxomind Labs
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
            For dealers, hospitals, diagnostic centers, and radiology teams exploring ProxoPACS, ProxoAI, or the platform roadmap.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="pm-dashboard-mock pm-contact-side"
        >
          <div className="pm-window-bar"><span /><span /><span /><strong>Contact Proxomind</strong></div>
          <div className="pm-contact-info-item">
            <div className="pm-contact-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--pm-red)" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <strong>Email</strong>
              <p>contact@proxomind.com</p>
            </div>
          </div>
          <div className="pm-contact-next">
            <span className="pm-kicker">What to include</span>
            <p>Center type, modality mix, number of locations, and what you're looking to deploy or sell.</p>
          </div>
        </motion.div>
      </section>

      <section className="pm-section pm-contact-section">
        <InquiryPanel />
      </section>
    </div>
  );
}
