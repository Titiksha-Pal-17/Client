import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuestionPage({ next }) {


  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const randomX = Math.random() * 300 - 150; // math-based randomness
    const randomY = Math.random() * 200 - 100;

    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <motion.div 
      className="question-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="question-content">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          Will you be my Valentine,
        </motion.h1>
        
        <motion.h1
          className="name"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        >
          Priyansh?
        </motion.h1>
        
        <motion.button 
          className="yes-btn" 
          onClick={next}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 15px 40px rgba(236, 64, 122, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          OBVIOUSLY YESS!
        </motion.button>

         <motion.button
            className="no-btn"
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveNoButton}
            onMouseMove={moveNoButton}
          >
            No?Click karke batao
          </motion.button>
      </div>
    </motion.div>
  );
}
