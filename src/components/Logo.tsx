const Logo = () => {
  return (
    <div className="brand-lockup" aria-label="Proxomind Labs">
      <img src="/favicon.svg" alt="" className="brand-mark" />
      <div className="brand-copy">
        <strong><span>Proxo</span><em>Mind</em> <span className="brand-labs">Labs</span></strong>
        <span className="brand-tagline">Bringing AI & Cloud Diagnostics into the Cloud Era</span>
      </div>
    </div>
  );
};

export default Logo;
