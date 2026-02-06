import React from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

export default function GalleryPage({ next }) {
  const photos = [
    { src: photo1, delay: 0.2 },
    { src: photo2, delay: 0.4 },
    { src: photo3, delay: 0.6 },
    { src: photo4, delay: 0.8 }
  ];

  return (
    <motion.div 
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="gallery-content">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our Moments Together
        </motion.h1>
        
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="photo-item"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: photo.delay, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img src={photo.src} alt={`Memory ${index + 1}`} />
            </motion.div>
          ))}
        </div>
        
        <motion.p
          className="gallery-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I love our memories
        </motion.p>
        
        <motion.button 
          className="continue-btn" 
          onClick={next}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Aur ha ab bas 
        </motion.button>
      </div>
    </motion.div>
  );
}

