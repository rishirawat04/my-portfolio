import React, { useState, useEffect } from 'react';

const TypingWords = () => {
  const words = ['React developer', 'MERN stack developer', 'UI/UX designer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (charIndex === words[currentIndex].length) {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000); // Delay before starting to type the next word
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100); // Typing speed
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, words]);

  return (
    <div>
      {words.map((word, idx) => (
        <div
        className='  text-yellow-400 text-3xl  font-mono font-semibold'
        key={idx} style={{ display: idx === currentIndex ? 'block' : 'none' }}>
          {word.slice(0, charIndex)}
        </div>
      ))}
    </div>
  );
};

export default TypingWords;
