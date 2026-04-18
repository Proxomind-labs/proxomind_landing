import { useNavigate } from 'react-router-dom';

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
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    desc: 'End-to-end demand forecasting and supply chain optimization platform reducing inventory costs by 35%.',
    tags: ['Forecasting', 'Optimization', 'Retail'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
  },
  {
    title: 'Medical Image Analysis System',
    desc: 'Deep learning diagnostic tool assisting radiologists with 94% accuracy on CT and MRI scan interpretation.',
    tags: ['Healthcare', 'Deep Learning', 'CV'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80'
  },
  {
    title: 'Customer Churn Prediction Engine',
    desc: 'Real-time ML pipeline identifying at-risk customers with 89% precision, saving $2M+ in annual revenue.',
    tags: ['ML', 'FinTech', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  }
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">Portfolio</span>
          <h1 className="hero-title">
            Our <span className="gradient-text">Featured</span> Projects
          </h1>
          <p className="hero-subtitle">
            Real-world AI solutions delivering measurable business impact across industries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="projects-grid projects-grid-full">
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

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Have a Project in Mind?</h2>
          <p>Let's build your next AI solution together.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
