import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '../Header/Logo.png';
import './Footer.css';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showMapModal, setShowMapModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleMapClick = () => {
    setShowMapModal(true);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=The+Industrique+5+Louvain+St+Coburg+VIC+3058+Australia', '_blank');
  };

  const openDirections = () => {
    window.open('https://maps.google.com/?daddr=The+Industrique+5+Louvain+St+Coburg+VIC+3058+Australia', '_blank');
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <motion.div
            ref={ref}
            className="footer-content"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* COLUMN 1: LOGO, TAGLINE, SOCIALS */}
            <motion.div className="footer-column" variants={itemVariants}>
              <div className="footer-logo">
                <img src={Logo} alt="Soul Sync Logo" className="footer-logo-image" />
                <h3>SOUL <span>SYNC</span></h3>
              </div>
              <p className="footer-tagline">
                Curated with passion | Where Sound Meets Soul.
              </p>
              <div className="social-links">
                <motion.a 
                  href="https://web.facebook.com/profile.php?id=61579960493089"
                  target="_blank" rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-facebook-f"></i>
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/soulsync_events"
                  target="_blank" rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-instagram"></i>
                </motion.a>
                <motion.a 
                  href="https://www.tiktok.com/@soul.sync77?_t=ZS-90pcV7fd4z6&_r=1"
                  target="_blank" rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-tiktok"></i>
                </motion.a>
              </div>
            </motion.div>

            {/* COLUMN 2: NAVIGATE */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Navigate</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#artists">Artists</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#newsletter">Contact</a></li>
              </ul>
            </motion.div>

            {/* COLUMN 3: EVENT LOCATION & CONTACT */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Event Location</h4>
              <div className="mini-map" onClick={handleMapClick}>
                <div className="map-placeholder">
                  <div className="map-pin">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="map-lines">
                    <div className="map-line"></div>
                    <div className="map-line"></div>
                    <div className="map-line"></div>
                  </div>
                </div>
                <p className="location-text">The Industrique • Coburg VIC</p>
                <div className="click-hint">
                  <i className="fas fa-expand-alt"></i>
                  Click to view map
                </div>
              </div>

              <h4 className="footer-heading-secondary">Contact</h4>
              <ul className="footer-links contact-info">
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:soulsyncevents@gmail.com">soulsyncevents@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>5 Louvain St, Coburg VIC 3058</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="footer-bottom-content">
              <p>&copy; 2025 Soul Sync Events. All Rights Reserved.</p>
              <p className="footer-bottom-tagline">
                Curated with passion | Where Sound Meets Soul.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Map Modal */}
      {showMapModal && (
        <div className="map-modal-overlay" onClick={closeMapModal}>
          <motion.div 
            className="map-modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="map-modal-header">
              <h3>The Industrique</h3>
              <button className="close-modal-btn" onClick={closeMapModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="map-address">
              <i className="fas fa-map-marker-alt"></i>
              <span>5 Louvain St, Coburg VIC 3058, Australia</span>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.698166751938!2d144.9662222767837!3d-37.750918971987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64413f3b7c4c7%3A0x4c5b8b8b8b8b8b8b!2sThe%20Industrique%2C%205%20Louvain%20St%2C%20Coburg%20VIC%203058%2C%20Australia!5e0!3m2!1sen!2sau!4v1690000000000!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Industrique Location"
              ></iframe>
            </div>

            <div className="map-actions">
              <button className="btn btn-primary" onClick={openGoogleMaps}>
                <i className="fas fa-external-link-alt"></i>
                Open in Google Maps
              </button>
              <button className="btn btn-secondary" onClick={openDirections}>
                <i className="fas fa-directions"></i>
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Footer;