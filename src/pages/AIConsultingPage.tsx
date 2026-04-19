import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function AIConsultingPage() {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const [formData, setFormData] = useState({ name: '', email: '', company: '', timeline: '', goals: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: `AI Consulting Inquiry from ${formData.company || formData.name}`,
        message: `Company: ${formData.company}\nTimeline: ${formData.timeline}\nGoals:\n${formData.goals}`,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', timeline: '', goals: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">AI Consulting</span>
          <h1 className="hero-title">
            Unlock the Value of <span className="gradient-text">Generative AI</span>
          </h1>
          <p className="hero-subtitle">
            Partner with our experts to define your AI roadmap, build custom large language models, and deploy scalable ML architectures tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="consulting-wrapper">
            <div className="consulting-content">
              <h3>Why Partner With Us?</h3>
              <p>
                Navigating the rapidly evolving landscape of Artificial Intelligence requires deep technical expertise and strategic vision. Our consulting services are designed to bridge the gap between cutting-edge research and practical business applications.
              </p>
              
              <ul className="service-list" style={{ marginTop: '2rem' }}>
                <li>
                  <strong>Strategic Planning:</strong> Identify high-ROI use cases for AI implementation.
                </li>
                <li>
                  <strong>Custom LLM Development:</strong> Implement RAG, fine-tuning, and agentic workflows.
                </li>
                <li>
                  <strong>MLOps & Architecture:</strong> Design scalable, secure, and cost-effective ML infrastructure.
                </li>
                <li>
                  <strong>Feasibility Assessments:</strong> Evaluate data readiness and model viability before investing.
                </li>
              </ul>
            </div>
            
            <div className="contact-form-container">
              <div className="form-header">
                <h4>Request a Technical Assessment</h4>
                <p>Fill out the form below to schedule an introductory call with our engineering team.</p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === 'success' && (
                  <div className="alert alert-success">
                    Request submitted securely. Our team will contact you shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-error">
                    An error occurred. Please try again or email us directly.
                  </div>
                )}
                <div className="form-group-row">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group-row">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select 
                      value={formData.timeline} 
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      required
                      className="form-select"
                    >
                      <option value="" disabled>Project Timeline</option>
                      <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Exploratory">Exploratory / Unsure</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Describe your AI goals, current challenges, or ideas..."
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Schedule Assessment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
