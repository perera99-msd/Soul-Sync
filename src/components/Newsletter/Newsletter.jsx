import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="newsletter" className="newsletter section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="newsletter-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="newsletter-text" variants={itemVariants}>
            <h2>Stay in the Rhythm</h2>
            <p>Subscribe to our newsletter to receive updates on upcoming events, exclusive pre-sales, and artist announcements.</p>
          </motion.div>

          <motion.div className="newsletter-form-container" variants={itemVariants}>
            {isSubscribed ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-check-circle"></i>
                <span>Successfully subscribed! Welcome to the SOUL SYNC family.</span>
              </motion.div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-large"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                    <i className="fas fa-paper-plane"></i>
                  </motion.button>
                </div>
                <p className="newsletter-note">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            )}
          </motion.div>

          <motion.div className="newsletter-features" variants={itemVariants}>
            <div className="feature">
              <i className="fas fa-ticket-alt"></i>
              <span>Early Bird Access</span>
            </div>
            <div className="feature">
              <i className="fas fa-music"></i>
              <span>Artist Lineups</span>
            </div>
            <div className="feature">
              <i className="fas fa-gift"></i>
              <span>Exclusive Offers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;