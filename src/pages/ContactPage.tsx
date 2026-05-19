import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const inquiryTopics = [
  'Dealer Inquiry',
  'ProxoPACS Demo',
  'ProxoAI Workflow',
  'Hospital / Diagnostic Center Deployment',
  'ProxoLIMS / ProxoRIS Roadmap',
  'TeleReporting Partnership',
];

const contactItems = [
  'Dealer / Reseller programs',
  'ProxoPACS demo and trial',
  'ProxoAI workflow integration',
  'Hospital and multi-center deployment',
  'RIS, LIMS, TeleReporting roadmap',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

export default function ContactPage() {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const [formData, setFormData] = useState({
    name: '', email: '', organization: '', subject: 'Dealer Inquiry', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: `Organization: ${formData.organization || '-'}\nTopic: ${formData.subject}\n\n${formData.message}`,
        reply_to: formData.email,
      }, PUBLIC_KEY);
      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', subject: 'Dealer Inquiry', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

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
        <div className="glass-panel pm-contact-form-wrap">
          <div className="pm-contact-left">
            <h3>Reach Out</h3>
            <p>Fill in your details and a Proxomind team member will respond within one business day.</p>
            {contactItems.map((item) => (
              <div key={item} className="pm-contact-list-item">
                <span className="pm-contact-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pm-contact-right">
            <form onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="pm-form-status success">Message sent. We'll be in touch shortly.</div>
              )}
              {status === 'error' && (
                <div className="pm-form-status error">Something went wrong. Please try again or email directly.</div>
              )}
              <div className="pm-form-row">
                <input className="pm-input" type="text" placeholder="Your Name"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input className="pm-input" type="email" placeholder="Work Email"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div className="pm-form-row">
                <input className="pm-input" type="text" placeholder="Organization / Dealer Name"
                  value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} />
                <select className="pm-select" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required>
                  {inquiryTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
                </select>
              </div>
              <textarea className="pm-textarea" placeholder="Tell us what you want to deploy, sell, support, or evaluate..."
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required rows={5} />
              <button type="submit" className="pm-btn primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
