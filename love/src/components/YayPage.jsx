import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function YayPage() {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHearts(true), 1000);
  }, []);

  return (
    <motion.div 
      className="yay-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="yay-content">
        <motion.h1
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1, type: "spring", bounce: 0.5 }}
        >
          YAYYYYY! 
        </motion.h1>
        
        <motion.p
          className="yay-message"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          You've made me the happiest person, Priyansh.
        </motion.p>
        
        {showHearts && (
          <motion.div 
            className="hearts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>💗</span>
            <span>💗</span>
            <span>💗</span>
            <span>💗</span>
            <span>💗</span>
          </motion.div>
        )}
        
        <motion.p
          className="love-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          ~ Happy Valentine's ~
        </motion.p>
      </div>
      
      {/* Floating hearts animation */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="floating-heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}>
            💗
          </div>
        ))}
      </div>
    </motion.div>
  );
}
