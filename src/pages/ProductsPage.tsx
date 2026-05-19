import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductName from '../components/ProductName';
import { PROXOPACS_URL } from '../constants';

const productCards = [
  {
    name: 'ProxoPACS', status: 'Live', headline: 'Browser-first cloud PACS for diagnostic centers.',
    description: 'DICOM upload, study access, viewing, reporting workflow, multi-site operations, secure sharing, and cloud storage.',
    features: ['DICOM upload workflow', 'Browser DICOM viewer', 'Study list and patient access', 'Cloud storage integration', 'Multi-center support', 'Radiologist access', 'Report workflow support', 'Dealer-assisted deployment', 'Secure sharing', 'Role-based access', 'Study search and filtering', 'Upload monitoring'],
  },
  {
    name: 'ProxoAI', status: 'Live', headline: 'Medical AI assistant layer for review and workflow acceleration.',
    description: 'AI-assisted report review, image analysis support, clinical summaries, findings extraction, and decision-support workflows.',
    features: ['Report analysis', 'Image analysis assistance', 'Clinical context extraction', 'Impression drafting support', 'Finding summarization', 'Report quality review', 'Prior report comparison support', 'AI-generated clinical summary', 'Doctor-assist workflow', 'Radiologist productivity support', 'Decision-support layer'],
  },
  {
    name: 'ProxoLIMS', status: 'Upcoming', headline: 'Laboratory workflow connected to diagnostic operations.',
    description: 'Laboratory information workflow for sample tracking, diagnostics coordination, report flow, and connected center operations.',
    features: ['Sample lifecycle tracking', 'Lab order management', 'Test workflow coordination', 'Report generation support', 'Center-to-lab communication', 'Barcode-ready architecture', 'Patient sample status', 'Diagnostics dashboard'],
  },
  {
    name: 'ProxoRIS', status: 'Upcoming', headline: 'Radiology information system for department coordination.',
    description: 'Appointments, modality scheduling, worklists, department coordination, and imaging center visibility.',
    features: ['Appointment scheduling', 'Modality worklists', 'Department dashboard', 'Resource planning', 'Radiologist assignment', 'Patient flow tracking', 'Center utilization view', 'Reporting coordination'],
  },
  {
    name: 'TeleReporting', status: 'Coming', headline: 'Secure remote radiology reporting workflow.',
    description: 'Remote reporting workflow for diagnostic centers, hospitals, and radiologists who need secure remote read operations.',
    features: ['Remote reads', 'Radiologist network', 'Center coordination', 'Case assignment', 'Report delivery', 'Urgent study routing', 'Multi-location reads', 'Secure cloud access'],
  },
];

const impact = [
  ['Cloud study access', 'Open studies from browser-ready cloud workspaces.'],
  ['Multi-center workflow', 'Connect branches, admins, and radiologists in one view.'],
  ['AI-assisted reporting', 'Use ProxoAI for report review and clinical context support.'],
  ['Browser-first viewer', 'Reduce workstation dependency with web-based access.'],
  ['Dealer deployment support', 'Give partners a clean demo, setup, and activation story.'],
  ['Remote reporting ready', 'Prepare centers for secure remote radiology operations.'],
  ['Scalable cloud storage', 'Move away from fragile local-only image archives.'],
  ['DICOM workflow support', 'Upload, search, view, and coordinate diagnostic studies.'],
];

const problems = [
  ['Local PACS lock-in', 'Studies sit on one machine, backups are fragile, and access depends on local IT.'],
  ['Slow image sharing', 'Centers still burn CDs, send files manually, or depend on physical visits.'],
  ['Remote reads are messy', 'Radiologists need clean browser access without fighting center systems.'],
  ['Report review takes time', 'Context, prior notes, findings, and impressions stay scattered.'],
  ['Dealer deployment is hard', 'Dealers need a reliable software layer they can explain, demo, and support.'],
  ['Branch visibility is limited', 'Owners cannot easily see studies, status, and workflow across locations.'],
  ['Lab and radiology silos', 'Imaging, lab reporting, and center operations rarely speak the same language.'],
  ['AI sits outside workflow', 'Most AI tools feel separate instead of working beside PACS and reporting.'],
];
const workflow = ['Modality', 'Local Uploader', 'Cloud PACS', 'DICOM Viewer', 'AI Assistance', 'Report Review', 'Doctor / Center', 'Dealer Support'];
const pacsFeatures = ['DICOM upload from local machine', 'Local uploader / bridge app', 'Cloud study access', 'Browser DICOM viewer', 'X-ray, CT, MRI, US support', 'Study search', 'Patient-wise access', 'Center-wise dashboard', 'Multi-user login', 'Viewer-only access', 'Radiologist access', 'Secure sharing links', 'Report attachment', 'Study status', 'Upload retry handling', 'Cloud storage backend', 'Audit trail ready', 'Backup-ready architecture', 'Dealer onboarding support', 'Future DICOM print support', 'Future modality worklist support'];
const aiGroups = [
  ['Report Intelligence', ['Report review', 'Summary generation', 'Impression cleanup', 'Finding extraction', 'Clinical language improvement', 'Follow-up suggestion assistance', 'Report comparison']],
  ['Image Assistance', ['Image review support', 'X-ray/CT/MRI/US interpretation assistance', 'Visual abnormality explanation support', 'Region-focused observation support', 'Assistive triage notes']],
  ['Workflow Intelligence', ['Case summary', 'Doctor-friendly explanation', 'Patient-friendly summary', 'Report quality checks', 'Faster review process', 'Context extraction from previous reports']],
];
const dealerBenefits = ['Easy demo story', 'Cloud-first deployment', 'Recurring revenue model', 'Dealer-friendly onboarding', 'Multi-center sales opportunity', 'PACS + AI bundle', 'Future RIS/LIMS upsell', 'Training and deployment support', 'Sales material support', 'White-label-ready roadmap', 'Local uploader support', 'Fast center activation', 'Support documentation', 'Demo environment', 'Dealer margin model', 'Regional partner opportunity'];
const centerBenefits = ['Access studies from anywhere', 'Reduce dependency on one local machine', 'Share studies with radiologists', 'Keep organized patient imaging records', 'Improve reporting coordination', 'Use AI-assisted report review', 'Manage multiple branches', 'Get dealer-supported setup', 'Lower infrastructure complexity', 'Prepare for future RIS/LIMS integration'];
const hospitalBenefits = ['Centralized imaging access', 'Department-level workflow', 'Multi-user access', 'Doctor/radiologist collaboration', 'Cloud study archive', 'AI-assisted review support', 'Future RIS integration', 'Future LIMS integration', 'Secure access model', 'Scalable deployment'];
const radiologistBenefits = ['Browser viewer access', 'Remote study review', 'AI summary support', 'Report improvement assistance', 'Faster context understanding', 'Prior report comparison support', 'Structured workflow', 'TeleReporting-ready future', 'Less dependency on physical center systems'];
const security = ['Secure login', 'Role-based access roadmap', 'Encrypted cloud communication', 'Controlled study access', 'Audit-ready architecture', 'Center-wise separation', 'Dealer-controlled onboarding', 'Backup-ready cloud storage', 'Private study access', 'No public DICOM exposure', 'Data retention policy support', 'Admin-level access control'];
const useCases = ['Small X-ray center', 'Multi-branch diagnostic chain', 'Hospital radiology department', 'Independent radiologist', 'Dealer/reseller network', 'Remote reporting group', 'Lab + imaging center', 'Franchise diagnostic network'];
const roadmap = ['ProxoPACS Live', 'ProxoAI Live', 'ProxoRIS Upcoming', 'ProxoLIMS Upcoming', 'TeleReporting Coming', 'Dealer dashboard', 'White-label partner panel', 'Full diagnostic cloud OS'];
const pricing = ['Starter Center Plan', 'Growth Center Plan', 'Multi-Center Plan', 'Dealer Partner Plan', 'Enterprise / Hospital Plan'];
const faqs = ['What is ProxoPACS?', 'Can I upload DICOM images from my X-ray machine?', 'Does it work in browser?', 'Can radiologists view remotely?', 'Is ProxoAI a replacement for doctors?', 'Can dealers sell this?', 'Can it support multiple centers?', 'Is RIS available?', 'Is LIMS available?', 'Can it be deployed for hospitals?', 'Can it integrate with existing workflow?', 'Is data stored in cloud?', 'Can we get custom branding?', 'Can Proxomind support onboarding?'];

function StatusBadge({ status }: { status: string }) {
  return <span className={`pm-status ${status === 'Live' ? 'live' : ''}`}>{status}</span>;
}

function FeatureList({ items }: { items: string[] }) {
  return <div className="pm-chip-grid">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="pm-page pm-product-page">
      <section className="pm-hero pm-product-hero">
        <div className="pm-hero-copy wide">
          <span className="pm-hero-line">Bring every diagnostic center into the cloud era.</span>
          <span className="pm-kicker">Proxomind Labs healthcare product ecosystem</span>
          <h1>Cloud PACS + Medical AI for the Next Generation of Diagnostic Centers</h1>
          <p>Proxomind brings cloud imaging, DICOM workflow, AI-assisted report analysis, image review support, RIS, LIMS, and remote reporting into one connected healthcare platform.</p>
          <div className="pm-actions">
            <button onClick={() => navigate('/contact')} className="pm-btn primary">Book a Demo</button>
            <button onClick={() => navigate('/dealers')} className="pm-btn secondary">Become a Dealer</button>
            <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-btn ghost">Open ProxoPACS</a>
            <button className="pm-btn ghost">View ProxoAI</button>
          </div>
          <div className="pm-badge-row">
            {['Live: ProxoPACS', 'Live: ProxoAI', 'Upcoming: RIS + LIMS', 'Coming: TeleReporting', 'Dealer Friendly', 'Cloud Ready', 'Multi-Center Ready'].map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </div>
        <div className="pm-workstation-hero product-dashboard">
          <img src="/images/pacs-workstation.avif" alt="DICOM viewer workstation with worklist and CT scan panels" />
        </div>
      </section>

      <section className="pm-impact-strip">{impact.map(([title, copy], index) => <div key={title} data-index={String(index + 1).padStart(2, '0')}><strong>{String(index + 1).padStart(2, '0')}</strong><span>{title}</span><p>{copy}</p></div>)}</section>

      <section className="pm-section">
        <div className="pm-section-head"><span className="pm-kicker">The Problem</span><h2>Diagnostic centers are growing, but imaging workflow is still fragmented.</h2></div>
        <div className="pm-grid four pm-problem-grid">{problems.map(([title, copy], index) => <article className="pm-card pm-problem-card" key={title}><strong>{String(index + 1).padStart(2, '0')}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="pm-section pm-solution-section">
        <div className="pm-section-head"><span className="pm-kicker">The Solution</span><h2>One connected platform for imaging, reporting, AI, labs, and remote reads.</h2><p>Proxomind connects imaging centers, hospitals, radiologists, and dealers through a cloud-first diagnostic workflow.</p></div>
        <div className="pm-workflow">{workflow.map((step) => <div key={step}>{step}</div>)}</div>
      </section>

      <section className="pm-section">
        <div className="pm-section-head"><span className="pm-kicker">Product Ecosystem</span><h2>One platform. Five products. Endless diagnostic workflow possibilities.</h2></div>
        <div className="pm-product-ecosystem">
          {productCards.map((product) => (
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pm-card pm-ecosystem-card" key={product.name}>
              <StatusBadge status={product.status} />
              <h3><ProductName name={product.name} /></h3>
              <strong>{product.headline}</strong>
              <p>{product.description}</p>
              <FeatureList items={product.features} />
              {product.name === 'ProxoPACS' && <a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-card-link">Launch ProxoPACS</a>}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pm-section pm-deep-section pacs">
        <div className="pm-section-head"><span className="pm-kicker">Deep Dive</span><h2>ProxoPACS: Everything an imaging center needs to move from local to cloud.</h2></div>
        <div className="pm-deep-grid"><FeatureList items={pacsFeatures} /><div className="pm-image-card"><img src="/images/pacs-workstation.avif" alt="ProxoPACS workstation with DICOM worklist and scan viewers" /></div></div>
      </section>

      <section className="pm-section pm-ai-deep">
        <div className="pm-section-head"><span className="pm-kicker">ProxoAI</span><h2>Medical AI assistance inside the diagnostic workflow.</h2><p>ProxoAI is designed as a radiologist productivity and decision-support layer, not a replacement for professional judgment.</p></div>
        <div className="pm-ai-layout"><div className="pm-ai-console compact"><div className="pm-ai-console-head"><span/><span/><span/><strong>ProxoAI Review Layer</strong></div><div className="pm-ai-console-body"><div className="pm-ai-console-scan"><i/><b/><small>Imaging context</small></div><div className="pm-ai-console-report"><strong>Assistive Summary</strong><p>Report intelligence, image review support, and workflow context prepared for clinician review.</p><ul><li>Findings extraction</li><li>Impression cleanup</li><li>Prior report comparison</li></ul></div></div></div><div className="pm-grid cols-3">{aiGroups.map(([title, items]) => <article className="pm-card" key={title as string}><h3>{title}</h3><FeatureList items={items as string[]} /></article>)}</div></div>
        <p className="pm-disclaimer">ProxoAI is an assistive workflow tool. Final diagnosis and clinical decision-making must always be performed by qualified medical professionals.</p>
      </section>

      <section className="pm-section pm-dealer-section">
        <div className="pm-section-head"><span className="pm-kicker">Dealers / Resellers</span><h2>Built for dealers who want to sell modern healthcare software.</h2><p>Proxomind gives dealers a complete cloud imaging + AI solution they can take to diagnostic centers without building software from scratch.</p></div>
        <FeatureList items={dealerBenefits} />
        <div className="pm-dealer-reasons"><h3>Why dealers can sell this easily</h3><FeatureList items={['Every imaging center needs better image access', 'Radiologists want remote viewing', 'Centers want cloud backup', 'AI gives a strong demo impact', 'PACS + AI + RIS + LIMS creates long-term account value', 'Monthly subscription creates recurring revenue']} /></div>
        <button onClick={() => navigate('/contact')} className="pm-btn primary">Become a Proxomind Dealer</button>
      </section>

      <section className="pm-section pm-audience-section"><div className="pm-grid cols-3"><article className="pm-card"><h3>For Diagnostic Centers</h3><FeatureList items={centerBenefits} /></article><article className="pm-card"><h3>For Hospitals</h3><FeatureList items={hospitalBenefits} /></article><article className="pm-card"><h3>For Radiologists</h3><FeatureList items={radiologistBenefits} /></article></div></section>

      <section className="pm-section pm-architecture"><div className="pm-section-head"><span className="pm-kicker">Deployment</span><h2>Simple deployment. Powerful backend.</h2></div><div className="pm-workflow architecture">{['X-ray / CT / MRI', 'Local Proxo uploader', 'Secure cloud upload', 'Cloud storage', 'ProxoPACS viewer', 'ProxoAI analysis layer', 'Doctor / Center admin', 'Dealer support'].map((step) => <div key={step}>{step}</div>)}</div><FeatureList items={['Single center deployment', 'Multi-center deployment', 'Dealer-managed deployment', 'Hospital deployment', 'Cloud-only setup', 'Hybrid local uploader + cloud viewer setup']} /></section>

      <section className="pm-section"><div className="pm-section-head"><span className="pm-kicker">Security</span><h2>Designed with healthcare data responsibility in mind.</h2><p>Compliance features can be configured based on customer requirements and regional healthcare regulations.</p></div><FeatureList items={security} /></section>

      <section className="pm-section"><div className="pm-section-head"><span className="pm-kicker">Comparison</span><h2>Why choose Proxomind over old local PACS?</h2></div><div className="pm-comparison"><div><h3>Old Local PACS</h3><FeatureList items={['Limited to local machine', 'Hard to access remotely', 'Manual sharing', 'Dealer support difficult', 'No AI layer', 'No future RIS/LIMS integration', 'Difficult multi-center visibility']} /></div><div><h3>Proxomind</h3><FeatureList items={['Cloud-first access', 'Browser viewer', 'Multi-center ready', 'AI-assisted workflow', 'Dealer-friendly deployment', 'Future RIS/LIMS ecosystem', 'Remote reporting roadmap', 'Scalable subscription model']} /></div></div></section>

      <section className="pm-section"><div className="pm-section-head"><span className="pm-kicker">Use Cases</span><h2>Built for real diagnostic business models.</h2></div><div className="pm-grid four">{useCases.map((x) => <article className="pm-card compact" key={x}>{x}</article>)}</div></section>
      <section className="pm-section"><div className="pm-section-head"><span className="pm-kicker">Roadmap</span><h2>From PACS to full diagnostic operating system.</h2></div><div className="pm-roadmap">{roadmap.map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, '0')}</span><strong>{x}</strong></div>)}</div></section>
      <section className="pm-section"><div className="pm-section-head"><span className="pm-kicker">Pricing Preview</span><h2>Choose a plan path. Contact for demo pricing.</h2></div><div className="pm-grid five">{pricing.map((x) => <article className="pm-card compact" key={x}><h3>{x}</h3><p>Contact for demo pricing</p></article>)}</div></section>
      <section className="pm-section"><div className="pm-section-head"><span className="pm-kicker">FAQ</span><h2>Common questions</h2></div><div className="pm-faq">{faqs.map((q) => <details key={q}><summary>{q}</summary><p>Talk to Proxomind Labs for deployment details, module availability, onboarding, and integration requirements.</p></details>)}</div></section>
      <section className="pm-final-cta"><h2>Bring your diagnostic center into the cloud era.</h2><p>Cloud PACS is only the beginning. From DICOM upload to AI-assisted reporting, Proxomind connects the full diagnostic workflow.</p><div className="pm-actions"><button onClick={() => navigate('/contact')} className="pm-btn primary">Book Live Demo</button><a href={PROXOPACS_URL} target="_blank" rel="noopener noreferrer" className="pm-btn secondary">Open ProxoPACS</a><button onClick={() => navigate('/dealers')} className="pm-btn ghost">Become a Dealer</button><button onClick={() => navigate('/contact')} className="pm-btn ghost">Talk to Proxomind</button></div></section>
    </div>
  );
}
