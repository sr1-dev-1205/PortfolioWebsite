import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalTypingProps {
  commands: Array<{
    prompt?: string;
    text: string;
    delay?: number;
    color?: string;
  }>;
  typingSpeed?: number;
  onComplete?: () => void;
}

const TerminalTyping: React.FC<TerminalTypingProps> = ({ 
  commands, 
  typingSpeed = 50,
  onComplete 
}) => {
  const [displayedLines, setDisplayedLines] = useState<Array<{
    prompt?: string;
    text: string;
    color?: string;
    completed: boolean;
  }>>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= commands.length) {
      setIsTyping(false);
      if (onComplete) onComplete();
      return;
    }

    const command = commands[currentLineIndex];
    const fullText = command.text;
    let charIndex = 0;

    const initialDelay = command.delay || 0;
    const delayTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          
          // Add completed line to display
          setDisplayedLines(prev => [
            ...prev,
            {
              prompt: command.prompt,
              text: fullText,
              color: command.color,
              completed: true
            }
          ]);
          
          setCurrentText('');
          setCurrentLineIndex(prev => prev + 1);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, initialDelay);

    return () => clearTimeout(delayTimeout);
  }, [currentLineIndex, commands, typingSpeed, onComplete]);

  return (
    <div className="font-mono text-sm space-y-2">
      {/* Completed lines */}
      {displayedLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-2"
        >
          {line.prompt && (
            <span className="text-neon-cyan font-bold">{line.prompt}</span>
          )}
          <span className={line.color || 'text-gray-300'}>{line.text}</span>
        </motion.div>
      ))}

      {/* Current typing line */}
      {isTyping && currentLineIndex < commands.length && (
        <div className="flex items-start gap-2">
          {commands[currentLineIndex].prompt && (
            <span className="text-neon-cyan font-bold">
              {commands[currentLineIndex].prompt}
            </span>
          )}
          <span className={commands[currentLineIndex].color || 'text-gray-300'}>
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-neon-cyan ml-1"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default TerminalTyping;
