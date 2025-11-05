import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnnouncementPopup.css';

const AnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Random delay between 1-4 seconds
    const delay = Math.random() * 3000 + 1000; // 1000ms to 4000ms
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="popup-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            <div className="popup-image-container">
              <img 
                src="/popups/popup.jpg" 
                alt="Main Artist Extended Set Announcement" 
                className="popup-image"
              />
            </div>
            
            <button 
              className="popup-close-btn"
              onClick={handleClose}
              aria-label="Close announcement"
            >
              <i className="fas fa-times"></i>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementPopup;