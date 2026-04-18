import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">Capabilities</span>
          <h1 className="hero-title">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="hero-subtitle">
            End-to-end AI development, from strategy to production-grade deployment.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="section">
        <div className="section-inner">
          <div className="services-wrapper">
            <div className="service-main">
              <h3>End-to-End AI Development</h3>
              <p>
                From initial concept to production deployment, we handle the complete AI development lifecycle.
                Our team combines deep technical expertise with practical business understanding.
              </p>
              <ul className="service-list">
                <li>Custom Model Development &amp; Training</li>
                <li>Model Fine-tuning &amp; Optimization</li>
                <li>RAG System Implementation</li>
                <li>MLOps &amp; Continuous Deployment</li>
                <li>Performance Monitoring &amp; Maintenance</li>
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

      {/* Process */}
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

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss the right solution for your business needs.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
