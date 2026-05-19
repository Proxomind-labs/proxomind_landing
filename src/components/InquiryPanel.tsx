import { useState } from 'react';
import emailjs from '@emailjs/browser';

const inquiryTopics = [
  'Partner Enquiry',
  'ProxoPACS Demo',
  'ProxoAI Workflow',
  'Hospital / Diagnostic Center Deployment',
  'ProxoLIMS / ProxoRIS Roadmap',
  'TeleReporting Partnership',
];

const defaultItems = [
  'Channel partner / reseller programs',
  'ProxoPACS demo and trial',
  'ProxoAI workflow integration',
  'Hospital and multi-center deployment',
  'RIS, LIMS, TeleReporting roadmap',
];

type InquiryPanelProps = {
  className?: string;
  intro?: string;
  items?: string[];
  title?: string;
};

export default function InquiryPanel({
  className = '',
  intro = 'Fill in your details and a Proxomind team member will respond within one business day.',
  items = defaultItems,
  title = 'Reach Out',
}: InquiryPanelProps) {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const [formData, setFormData] = useState({
    name: '', email: '', organization: '', subject: 'Partner Enquiry', message: '',
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
        setFormData({ name: '', email: '', organization: '', subject: 'Partner Enquiry', message: '' });
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
    <div className={`glass-panel pm-contact-form-wrap ${className}`.trim()}>
      <div className="pm-contact-left">
        <h3>{title}</h3>
        <p>{intro}</p>
        {items.map((item) => (
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
            <input className="pm-input" type="text" placeholder="Organization / Partner Name"
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
  );
}
