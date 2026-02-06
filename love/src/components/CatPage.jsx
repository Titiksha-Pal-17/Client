import React from 'react';
import { motion } from 'framer-motion';
import cat from '../assets/cat.png';

export default function CatPage({ next }) {
  return (
    <motion.div 
      className="first-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      

      <div className="center-content">

        <motion.div
          className="heart"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          💗
        </motion.div>
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          KUCHUU PUCHUUU
        </motion.h1>
        
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
           I MADE THIS WITH LOVE CUTU
        </motion.h2>
        
        <motion.button 
          className="start-btn" 
          onClick={next}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Jao dekhoo
        </motion.button>
      </div>
      
      <motion.img 
        src={cat} 
        alt="cat" 
        className="cat-bottom floating-cat"
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
