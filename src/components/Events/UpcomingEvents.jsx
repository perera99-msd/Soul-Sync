import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import './Events.css';

// --- MODIFIED: Added onEventDetailsClick prop ---
const UpcomingEvents = ({ onEventDetailsClick }) => {
  const [ref, isVisible] = useScrollAnimation();

  // --- MODIFIED: Replaced array with a single event object ---
  // Data sourced from EventModal.jsx
  const event = {
    id: 1,
    image: '/images/event-modal-bg.jpg', // Using the modal's background image
    date: { day: '06', month: 'DEC' },
    title: 'GRACIAS MELBOURNE 2025',
    description: 'A Story Retold. The first-ever all-night-long performance by a Sri Lankan progressive house artist in Melbourne.',
    location: 'The Industrique',
    time: '7:00 PM – 3:00 AM',
    price: 'From $45', // MODIFIED: Updated price based on screenshot
    ticketUrl: 'https://events.humanitix.com/graciasmelbourne2025'
  };

  // --- MODIFIED: Simplified variants for a single item ---
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
    <section id="events" className="section-padding">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Upcoming Events</h2>
          <p>Don't miss our exclusive underground experiences</p>
        </motion.div>

        {/* --- MODIFIED: Removed .map() and added a wrapper to center the single card --- */}
        <div ref={ref} className="upcoming-event-wrapper">
          <motion.div
            className="event-card"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
              <div className="event-date">
                <div className="day">{event.date.day}</div>
                <div className="month">{event.date.month}</div>
              </div>
              <div className="event-price">{event.price}</div>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-meta">
                <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                <span><i className="fas fa-clock"></i> {event.time}</span>
              </div>
              
              {/* --- MODIFIED: Added two-button layout --- */}
              <div className="event-card-actions">
                <motion.a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ticket"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Tickets
                </motion.a>
                <motion.button
                  className="btn-more-info"
                  onClick={onEventDetailsClick} // Triggers the modal
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More Info
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;