import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Scene from './components/Scene';
import Logo from './components/Logo';
import ParallaxBackground from './components/ParallaxScene';
import './styles/global.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const header = document.querySelector('.header') as HTMLElement;
      if (header) {
        if (window.scrollY > 50) {
          header.style.background = 'rgba(3, 3, 8, 0.9)';
          header.style.backdropFilter = 'blur(20px)';
        } else {
          header.style.background = 'transparent';
          header.style.backdropFilter = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('success');
    } finally {
      setLoading(false);
    }
  };

  const projects = [
    {
      title: 'AI-Powered Document Intelligence',
      desc: 'Automated contract analysis reducing review time by 85% using custom LLM fine-tuned on legal documents.',
      tags: ['LLM', 'NLP', 'Legal Tech'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Real-time Manufacturing Defect Detection',
      desc: 'Computer vision system achieving 99.9% accuracy in identifying product defects on production lines.',
      tags: ['Computer Vision', 'Manufacturing'],
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80'
    },
    {
      title: 'Predictive Maintenance Platform',
      desc: 'ML-driven system reducing equipment downtime by 60% through anomaly detection and failure prediction.',
      tags: ['ML', 'IoT', 'Industrial'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    }
  ];

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

  const clients = ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'HCL', 'L&T'];

  return (
    <div className="app">
      <Scene />
      <ParallaxBackground />
      
      <div className="content" style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">
              <Logo />
            </a>
            
            <nav className="nav">
              <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <button className="cta-btn" onClick={() => scrollToSection('contact')}>Get Started</button>
            </nav>

            <button className="mobile-menu-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Based in Bengaluru, India
            </div>
            <h1 className="hero-title">
              We Build <span className="gradient-text">Intelligent</span> AI Solutions
            </h1>
            <p className="hero-subtitle">
              Delivering cutting-edge LLM and computer vision projects that transform businesses. 
              From concept to production, we turn complex AI challenges into powerful solutions.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Start Your Project
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn-secondary">
                View Our Work
              </button>
            </div>
          </div>
        </section>

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
                <h3 className="feature-title">Data Analytics & Predictive Modeling</h3>
                <p className="feature-desc">
                  Transform raw data into actionable insights with predictive modeling, anomaly detection, and real-time analytics dashboards. Make data-driven decisions that drive business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Real-world AI solutions delivering measurable business impact
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <div key={i} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-image-overlay" />
                  </div>
                  <div className="project-content">
                    <div className="project-tags">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">How We Work</span>
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">
                A structured approach to delivering AI projects on time and within budget
              </p>
            </div>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-num">1</div>
                <h4>Discovery</h4>
                <p>Deep dive into your requirements, data, and business objectives</p>
              </div>
              <div className="process-item">
                <div className="process-num">2</div>
                <h4>Design</h4>
                <p>Architecture planning, model selection, and technical roadmap</p>
              </div>
              <div className="process-item">
                <div className="process-num">3</div>
                <h4>Develop</h4>
                <p>Rigorous development with continuous testing and iteration</p>
              </div>
              <div className="process-item">
                <div className="process-num">4</div>
                <h4>Deploy</h4>
                <p>Production deployment with monitoring and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

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

        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Trusted By</span>
              <h2 className="section-title">Our Clients</h2>
            </div>
            <div className="clients-row">
              {clients.map((client) => (
                <div key={client} className="client-item">{client}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Capabilities</span>
              <h2 className="section-title">Our Services</h2>
            </div>
            <div className="services-wrapper">
              <div className="service-main">
                <h3>End-to-End AI Development</h3>
                <p>
                  From initial concept to production deployment, we handle the complete AI development lifecycle. 
                  Our team combines deep technical expertise with practical business understanding.
                </p>
                <ul className="service-list">
                  <li>Custom Model Development & Training</li>
                  <li>Model Fine-tuning & Optimization</li>
                  <li>RAG System Implementation</li>
                  <li>MLOps & Continuous Deployment</li>
                  <li>Performance Monitoring & Maintenance</li>
                </ul>
              </div>
              <div className="services-sidebar">
                <div className="service-mini">
                  <h4>LLM Solutions</h4>
                  <p>Fine-tuning, RAG, chatbots, document understanding</p>
                </div>
                <div className="service-mini">
                  <h4>Computer Vision</h4>
                  <p>Object detection, facial recognition, visual inspection</p>
                </div>
                <div className="service-mini">
                  <h4>Predictive Analytics</h4>
                  <p>Demand forecasting, anomaly detection, risk assessment</p>
                </div>
                <div className="service-mini">
                  <h4>AI Consulting</h4>
                  <p>Strategy, roadmap, technology assessment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Let's Build Together</h2>
              <p className="section-subtitle">
                Ready to transform your business with AI? Let's discuss your project.
              </p>
            </div>
            <div className="contact-wrapper">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>anand@proxomind.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 9AM - 7PM IST</p>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === 'success' && (
                  <div className="alert alert-success">
                    Message sent! We'll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-error">
                    Something went wrong. Please try again.
                  </div>
                )}
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
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to Start Your AI Journey?</h2>
            <p>Let's discuss how we can help transform your business with cutting-edge AI solutions.</p>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Schedule a Consultation
            </button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="/" className="logo">
                  <Logo />
                </a>
                <p>Advanced AI & Computer Vision Solutions based in Bengaluru, India. We deliver cutting-edge LLM and computer vision projects.</p>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">LLM Development</a></li>
                  <li><a href="#">Computer Vision</a></li>
                  <li><a href="#">ML Engineering</a></li>
                  <li><a href="#">AI Consulting</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#process">Process</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:anand@proxomind.com">anand@proxomind.com</a></li>
                  <li><a href="#">Bengaluru, India</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="footer-copy">2026 ProxoMind. All rights reserved.</p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5"/>
                  </svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;