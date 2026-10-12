import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let animationFrameId: number;

    const updateCoords = (x: number, y: number) => {
      targetX = x;
      targetY = y;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
      if (bgGlowRef.current) {
        bgGlowRef.current.style.opacity = '1';
      }
    };

    const handleMove = (e: MouseEvent | PointerEvent) => {
      updateCoords(e.clientX, e.clientY);
    };

    const onPointerLeave = () => {
      if (bgGlowRef.current) {
        bgGlowRef.current.style.opacity = '0.4';
      }
    };

    const onPointerEnter = () => {
      if (bgGlowRef.current) {
        bgGlowRef.current.style.opacity = '1';
      }
    };

    // Silky smooth 60-120fps lerp loop (linear interpolation)
    const animate = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;

      if (bgGlowRef.current) {
        bgGlowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Use capture phase so no child element can stop mouse events
    window.addEventListener('pointermove', handleMove, { capture: true, passive: true });
    window.addEventListener('mousemove', handleMove, { capture: true, passive: true });
    document.addEventListener('pointermove', handleMove, { capture: true, passive: true });
    document.addEventListener('mousemove', handleMove, { capture: true, passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('pointerenter', onPointerEnter);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handleMove, { capture: true });
      window.removeEventListener('mousemove', handleMove, { capture: true });
      document.removeEventListener('pointermove', handleMove, { capture: true });
      document.removeEventListener('mousemove', handleMove, { capture: true });
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('pointerenter', onPointerEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pm-mouse-glow-bg-wrapper">
      <div ref={bgGlowRef} className="pm-mouse-glow-bg" />
    </div>
  );
}
