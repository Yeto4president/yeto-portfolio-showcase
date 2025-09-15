import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts, className = '' }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullText) {
        speed = 2000; // Wait before deleting
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;