import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      text: "ProxoMind transformed our document processing workflow. What used to take 40 hours now takes 2. Their LLM expertise is unmatched.",
      name: "Rajesh Kumar",
      role: "CTO, LegalTech India"
    },
    {
      text: "The computer vision solution they built for our manufacturing line exceeded all expectations. 99.9% accuracy is incredible.",
      name: "Priya Sharma",
      role: "VP Operations, AutoParts Manufacturing"
    },
    {
      text: "Their team understood our needs perfectly. The AI consulting saved us months of trial and error. Highly recommended.",
      name: "Michael Chen",
      role: "Head of Innovation, FinServ Corp"
    }
  ];

  return (
    <div style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Based in India
          </div>
          <h1 className="hero-title">
            We Build <span className="gradient-text">Intelligent</span> AI Solutions
          </h1>
          <p className="hero-subtitle">
            Delivering cutting-edge LLM and computer vision projects that transform businesses.
            From concept to production, we turn complex AI challenges into powerful solutions.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/contact')} className="btn-primary">
              Start Your Project
            </button>
            <button onClick={() => navigate('/projects')} className="btn-secondary">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">
              Deep technical skills across the AI stack, from research to production deployment
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card large">
              <div className="feature-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="feature-title">Large Language Models</h3>
              <p className="feature-desc">
                Custom LLM development, fine-tuning, and deployment. From chatbots to document intelligence, we build NLP solutions that understand context and deliver accurate results at scale.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <circle cx="9" cy="9" r="1" fill="white"/>
                  <circle cx="15" cy="9" r="1" fill="white"/>
                </svg>
              </div>
              <h3 className="feature-title">Computer Vision</h3>
              <p className="feature-desc">
                Object detection, facial recognition, image segmentation, and visual inspection with production-grade accuracy.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6"/>
                </svg>
              </div>
              <h3 className="feature-title">ML Engineering</h3>
              <p className="feature-desc">
                End-to-end ML pipelines with MLOps best practices for reliable production systems.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="feature-title">AI Consulting</h3>
              <p className="feature-desc">
                Strategic AI roadmap development and implementation guidance.
              </p>
            </div>
            <div className="feature-card large">
              <div className="feature-icon orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3 className="feature-title">Data Analytics &amp; Predictive Modeling</h3>
              <p className="feature-desc">
                Transform raw data into actionable insights with predictive modeling, anomaly detection, and real-time analytics dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Technologies</span>
            <h2 className="section-title">Our Tech Stack</h2>
          </div>
          <div className="tech-cloud">
            {['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'LangChain', 'OpenAI',
              'AWS SageMaker', 'Google Vertex AI', 'Azure ML', 'Docker', 'Kubernetes', 'MLflow',
              'FastAPI', 'CUDA', 'ONNX', 'RAG', 'Fine-tuning', 'RLHF'].map((tech) => (
              <div key={tech} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Impact</span>
            <h2 className="section-title">Our Results</h2>
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="testimonial-info">
                    <h5>{t.name}</h5>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ marginBottom: '4rem' }}>
        <div className="cta-inner">
          <h2>Ready to Start Your AI Journey?</h2>
          <p>Let's discuss how we can help transform your business with cutting-edge AI solutions.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
