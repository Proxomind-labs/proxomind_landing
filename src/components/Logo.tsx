const Logo = () => {
  return (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="50%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
      </defs>
      
      {/* Logo Icon - Neural Network Symbol */}
      <g transform="translate(0, 5)">
        <circle cx="18" cy="15" r="12" fill="url(#iconGradient)" fillOpacity="0.15"/>
        <circle cx="18" cy="8" r="2.5" fill="url(#iconGradient)"/>
        <circle cx="10" cy="13" r="2" fill="url(#iconGradient)" fillOpacity="0.85"/>
        <circle cx="26" cy="13" r="2" fill="url(#iconGradient)" fillOpacity="0.85"/>
        <circle cx="12" cy="22" r="2" fill="url(#iconGradient)" fillOpacity="0.85"/>
        <circle cx="24" cy="22" r="2" fill="url(#iconGradient)" fillOpacity="0.85"/>
        <circle cx="18" cy="15" r="3.5" fill="url(#iconGradient)"/>
        <line x1="18" y1="8" x2="18" y2="11.5" stroke="url(#iconGradient)" strokeWidth="1" strokeOpacity="0.6"/>
        <line x1="10" y1="13" x2="14.5" y2="13.5" stroke="url(#iconGradient)" strokeWidth="1" strokeOpacity="0.6"/>
        <line x1="26" y1="13" x2="21.5" y2="13.5" stroke="url(#iconGradient)" strokeWidth="1" strokeOpacity="0.6"/>
        <line x1="12" y1="22" x2="14.5" y2="18.5" stroke="url(#iconGradient)" strokeWidth="1" strokeOpacity="0.6"/>
        <line x1="24" y1="22" x2="21.5" y2="18.5" stroke="url(#iconGradient)" strokeWidth="1" strokeOpacity="0.6"/>
        <line x1="10" y1="13" x2="18" y2="15" stroke="url(#iconGradient)" strokeWidth="0.75" strokeOpacity="0.4"/>
        <line x1="26" y1="13" x2="18" y2="15" stroke="url(#iconGradient)" strokeWidth="0.75" strokeOpacity="0.4"/>
        <line x1="12" y1="22" x2="18" y2="15" stroke="url(#iconGradient)" strokeWidth="0.75" strokeOpacity="0.4"/>
        <line x1="24" y1="22" x2="18" y2="15" stroke="url(#iconGradient)" strokeWidth="0.75" strokeOpacity="0.4"/>
      </g>
      
      {/* Text: Proxo */}
      <text x="42" y="26" fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff" letterSpacing="-0.5">
        Proxo
      </text>
      
      {/* Text: Mind */}
      <text x="100" y="26" fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif" fontSize="20" fontWeight="700" fill="url(#logoGradient)" letterSpacing="-0.5">
        Mind
      </text>
    </svg>
  );
};

export default Logo;