import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const layers = containerRef.current.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
      
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallax || '0.5');
        const yPos = scrollY * speed;
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="parallax-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Floating orbs - slow */}
      <div 
        data-parallax="0.1"
        className="parallax-orb parallax-orb-1"
      />
      <div 
        data-parallax="0.15"
        className="parallax-orb parallax-orb-2"
      />
      <div 
        data-parallax="0.08"
        className="parallax-orb parallax-orb-3"
      />
      
      {/* Floating shapes - medium */}
      <div 
        data-parallax="0.2"
        className="parallax-shape parallax-shape-1"
      />
      <div 
        data-parallax="0.25"
        className="parallax-shape parallax-shape-2"
      />
      <div 
        data-parallax="0.18"
        className="parallax-shape parallax-shape-3"
      />
      
      {/* Gradient overlays */}
      <div 
        data-parallax="0.05"
        className="parallax-gradient gradient-1"
      />
      <div 
        data-parallax="0.12"
        className="parallax-gradient gradient-2"
      />
      
      {/* Grid pattern */}
      <div 
        data-parallax="0.03"
        className="parallax-grid"
      />
    </div>
  );
}