export default function PrivacyPolicyPage() {
  return (
    <div className="pm-page">
      <section className="pm-hero" style={{ minHeight: '40vh', paddingBottom: '40px' }}>
        <div className="pm-hero-copy">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
      
      <section className="pm-section">
        <div className="pm-section-head" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          
          <p style={{ marginBottom: '24px' }}>
            Proxomind Labs ("we," "our," or "us") provides cloud-based diagnostic imaging, AI assistance, 
            and radiology workflow software (including ProxoPACS, ProxoAI, ProxoRIS, and ProxoLIMS) to healthcare providers, 
            diagnostic centers, and channel partners ("Customers"). This Privacy Policy describes how we collect, use, 
            protect, and share information across our platform.
          </p>

          <h2>1. Protected Health Information (PHI) & HIPAA</h2>
          <p style={{ marginBottom: '24px' }}>
            As a provider of medical imaging software, we process Protected Health Information (PHI) and DICOM data 
            strictly on behalf of our Customers. We act as a "Business Associate" under the Health Insurance Portability 
            and Accountability Act (HIPAA) and equivalent global healthcare data regulations. Our processing of PHI is 
            governed by Business Associate Agreements (BAAs) or Data Processing Agreements (DPAs) executed with our Customers. 
            We do not own the PHI, nor do we use patient data for our own marketing purposes.
          </p>

          <h2>2. Information We Collect</h2>
          <p style={{ marginBottom: '12px' }}>We collect the following categories of information:</p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}><strong>Patient Diagnostic Data (PHI):</strong> DICOM images, study metadata, diagnostic reports, and lab results uploaded by healthcare providers.</li>
            <li style={{ marginBottom: '8px' }}><strong>Provider & User Information:</strong> Account credentials, names, medical specialties, email addresses, and contact details of radiologists, technicians, and administrators using our platform.</li>
            <li style={{ marginBottom: '8px' }}><strong>System Telemetry & Logs:</strong> IP addresses, browser types, device identifiers, audit logs, and workflow interactions used to ensure security and monitor system performance.</li>
            <li style={{ marginBottom: '8px' }}><strong>Business & Billing Data:</strong> Payment details, billing addresses, and contract information from our Customers and channel partners.</li>
          </ul>

          <h2>3. How We Use the Information</h2>
          <p style={{ marginBottom: '12px' }}>We use the collected information exclusively to:</p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Deliver, operate, and maintain the ProxoPACS and ProxoAI platforms.</li>
            <li style={{ marginBottom: '8px' }}>Enable diagnostic viewing, secure remote reporting, and AI-assisted clinical summaries for authorized medical professionals.</li>
            <li style={{ marginBottom: '8px' }}>Ensure HIPAA compliance by maintaining strict audit trails of all user access to patient records.</li>
            <li style={{ marginBottom: '8px' }}>Provide customer support, troubleshooting, and platform performance optimization.</li>
          </ul>

          <h2>4. AI Processing (ProxoAI)</h2>
          <p style={{ marginBottom: '24px' }}>
            ProxoAI is an assistive decision-support layer. When processing diagnostic reports or images through our AI models, 
            data is handled within isolated, secure environments. We do not use our Customers' identifiable patient data 
            or PHI to train foundational public AI models. All AI inference is strictly utilized to provide workflow acceleration 
            and clinical insights back to the original authorized healthcare provider.
          </p>

          <h2>5. Information Sharing and Disclosure</h2>
          <p style={{ marginBottom: '24px' }}>
            We never sell personal information or PHI. We may share information only in the following limited circumstances:
            with trusted cloud infrastructure providers (e.g., AWS, GCP) who are bound by strict confidentiality and BAAs; 
            when required to comply with legal obligations or law enforcement requests; or with authorized channel partners 
            managing your specific deployment (if applicable).
          </p>

          <h2>6. Data Security and Retention</h2>
          <p style={{ marginBottom: '24px' }}>
            We implement bank-grade encryption both in transit (TLS 1.2+) and at rest (AES-256) for all DICOM data and PHI. 
            Our platform features role-based access control (RBAC), multi-factor authentication (MFA), and automated backup 
            systems. We retain PHI only for as long as mandated by our Customer agreements or as required by healthcare regulations, 
            after which it is securely permanently deleted.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions regarding our data practices, HIPAA compliance, or this Privacy Policy, 
            please contact our compliance team at <strong>privacy@proxomind.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
