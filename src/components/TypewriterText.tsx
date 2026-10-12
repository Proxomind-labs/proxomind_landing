import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdDelay?: number;
  className?: string;
}

export default function TypewriterText({
  phrases,
  typingSpeed = 40,
  deletingSpeed = 22,
  holdDelay = 5000,
  className = '',
}: TypewriterTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting) {
      // Typing phase: type character by character
      if (currentText.length < currentPhrase.length) {
        timer = window.setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Completed phrase: hold for 5 seconds before deleting
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, holdDelay);
      }
    } else {
      // Deleting phase: backspace character by character
      if (currentText.length > 0) {
        timer = window.setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Completely deleted: move to the next phrase and start typing
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, holdDelay]);

  return (
    <span className={`pm-typewriter ${className}`} aria-label={phrases[phraseIndex % phrases.length]}>
      {/* Invisible sizers for all phrases to fix height across breakpoints and eliminate layout shift */}
      <span className="pm-typewriter-sizer" aria-hidden="true">
        {phrases.map((phrase, idx) => (
          <span key={idx} className="pm-typewriter-sizer-item">
            {phrase}
          </span>
        ))}
      </span>
      {/* Active typing text */}
      <span className="pm-typewriter-live">
        <span>{currentText}</span>
        <span className="pm-typewriter-cursor" aria-hidden="true">
          |
        </span>
      </span>
    </span>
  );
}
