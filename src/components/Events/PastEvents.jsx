import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import './Events.css';

const PastEvents = () => {
  const [ref, isVisible] = useScrollAnimation();

  // Variants for the new empty state block
  const emptyStateVariants = {
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
    <section id="past-events" className="past-events section-padding">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Past Events</h2>
          <p>A look back at our journey so far</p>
        </motion.div>

        {/* --- REPLACED: The old grid is replaced with this new empty-state card --- */}
        <motion.div
          ref={ref}
          className="past-events-empty-state"
          variants={emptyStateVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <i className="fas fa-history empty-state-icon"></i>
          <h3>Our History is in the Making</h3>
          <p>
            We're a new name on the scene and focused on our incredible upcoming events. 
            Once an event is over, you'll find its gallery and memories right here.
          </p>
          <motion.a 
            href="#events" 
            className="btn-secondary-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Upcoming Events
          </motion.a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default PastEvents;