import React from 'react';
import { motion } from 'framer-motion';

export default function LetterPage({ next }) {
  return (
    <motion.div 
      className="letter-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="letter-content">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Dearest Priyansh,
        </motion.h1>
        
        <motion.div 
          className="letter-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>
            I wanted to take a moment to tell you how much you mean to me. 
            You aren't just my boyfriend, you're my best friend and my biggest 
            inspiration.
          </p>
          
          <p>
            Every time I see you, my heart gets a little happier. I'm so lucky to 
            have you by my side.
          </p>
          
          <p>
            Love Me,
          </p>
        </motion.div>
        
        <motion.button 
          className="next-btn" 
          onClick={next}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Our Memories →
        </motion.button>
      </div>
    </motion.div>
  );
}
