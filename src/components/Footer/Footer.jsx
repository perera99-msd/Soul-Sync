import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import Logo from '../Header/Logo.png'; // Import the logo
import './Footer.css';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();

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

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          ref={ref}
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* --- COLUMN 1: LOGO, TAGLINE, SOCIALS --- */}
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
                href="https://instagram.com/soulsync_events"
                target="_blank" rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                href="https://tiktok.com/@soulsync_events"
                target="_blank" rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-tiktok"></i>
              </motion.a>
              <motion.a 
                href="https://youtube.com/@soulsyncevents"
                target="_blank" rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
            </div>
          </motion.div>

          {/* --- COLUMN 2: NAVIGATE --- */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h4>Navigate</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#events">Event</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#newsletter">Contact</a></li>
            </ul>
          </motion.div>

          {/* --- COLUMN 3: CONTACT & LEGAL --- */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h4>Get In Touch</h4>
            <ul className="footer-links contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:soulsyncevents@gmail.com">soulsyncevents@gmail.com</a>
              </li>
            </ul>

            {/* Kept legal links for a professional look */}
            <h4 className="footer-heading-secondary">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
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
  );
};

export default Footer;