// EventModal.jsx - Refactored for a professional two-column UI/UX
import { motion } from 'framer-motion';
import { useModal } from '../../hooks/useModal';
import './EventModal.css';

const EventModal = ({ isOpen, onClose }) => {
  const eventDetails = {
    title: "GRACIAS MELBOURNE 2025",
    subtitle: "A Story Retold",
    description: `Gracias Melbourne 2025 — A Story Retold marks a defining moment for Melbourne's underground scene and Sri Lanka's progressive house movement.

What began as an intimate night of storytelling and sound in Sri Lanka now rises onto a global stage — carrying emotion, gratitude, and the artistic vision of Echo Daft. Known for his deep, hypnotic sound and cinematic energy, Echo Daft brings his signature Gracias experience to Melbourne for the very first time.

Making history, this will be the first-ever all-night-long performance in Melbourne by a Sri Lankan progressive house artist — a cultural milestone that unites two musical worlds through rhythm and soul.

Supporting this journey, Liam Sieker, one of Melbourne's most respected names and a favourite among the Sri Lankan progressive community, joins with his unique deep, organic sound — setting the perfect atmosphere before the story unfolds. Completing the lineup, audiotheft opens the night with immersive melodic grooves, guiding the crowd into alignment from the very first beat.

From the island that inspired it to the city that will feel it, Gracias Melbourne is more than an event — it's a story of sound, soul, and connection.`,
    date: "Saturday, 6th December 2025",
    time: "7:00 PM – 3:00 AM",
    location: "The Industrique",
    address: "5 Louvain St, Coburg VIC 3058, Australia",
    calendarDate: "Sat, 6 Dec, 7pm - Sun, 7 Dec, 3am AEDT",
    ticketUrl: "https://events.humanitix.com/graciasmelbourne2025"
  };

  const artists = [
    { name: 'Echo Daft', type: 'Main - All Night Long' },
    { name: 'Liam Sieker', type: 'Support' },
    { name: 'audiotheft', type: 'Opening' }
  ];

  const handleBuyTickets = () => {
    window.open(eventDetails.ticketUrl, '_blank');
  };

  const handleAddToCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=20251206T190000/20251207T030000&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.address)}`;
    window.open(calendarUrl, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventDetails.title,
          text: eventDetails.description,
          url: eventDetails.ticketUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(eventDetails.ticketUrl);
      alert('Event link copied to clipboard!');
    }
  };

  const handleOpenMaps = () => {
    // BUG FIX: Corrected the Google Maps URL to be functional
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventDetails.address)}`;
    window.open(mapsUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="event-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="event-modal-content"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ 
          type: "spring", 
          damping: 20,
          stiffness: 150
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button 
          className="modal-close-btn" 
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-times"></i>
        </motion.button>
        
        {/* 1. HERO IMAGE SECTION */}
        <div className="event-modal-hero">
          <div className="event-badge">FEATURED EVENT</div>
        </div>

        {/* 2. MAIN CONTENT WRAPPER (for padding) */}
        <div className="event-modal-layout-wrapper">
          
          {/* 2a. Header Content (Title, Subtitle) */}
          <div className="event-modal-header-content">
            <motion.h1 
              className="event-modal-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {eventDetails.title}
            </motion.h1>
            <motion.h2 
              className="event-modal-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {eventDetails.subtitle}
            </motion.h2>
          </div>

          {/* 2b. Main Two-Column Layout */}
          <div className="event-modal-main-layout">
            
            {/* --- RIGHT COLUMN (DETAILS) --- */}
            {/* On mobile, this stacks first (order: 1) */}
            <motion.div 
              className="event-modal-column-details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="btn-tickets-primary"
                onClick={handleBuyTickets}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-ticket-alt"></i>
                Buy Tickets
              </motion.button>

              <div className="details-card">
                <h3>Event Details</h3>
                <div className="info-item">
                  <i className="fas fa-calendar-alt"></i>
                  <div>
                    <div className="info-label">Date & Time</div>
                    <div className="info-value">{eventDetails.calendarDate}</div>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">{eventDetails.location}</div>
                    <div className="info-address">{eventDetails.address}</div>
                    <motion.button
                      className="location-link"
                      onClick={handleOpenMaps}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Open in Maps
                    </motion.button>
                  </div>
                </div>
                
                <h3 className="artists-heading">Artist Lineup</h3>
                <div className="artist-lineup-detailed">
                  {artists.map((artist, index) => (
                    <motion.div 
                      key={index} 
                      className="artist-detailed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="artist-name-main">
                        <i className="fas fa-music"></i>
                        {artist.name}
                      </div>
                      <div className="artist-role">{artist.type}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* --- LEFT COLUMN (DESCRIPTION) --- */}
            {/* On mobile, this stacks second (order: 2) */}
            <motion.div 
              className="event-modal-column-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="event-description">
                <p>{eventDetails.description}</p>
              </div>

              <div className="secondary-actions">
                <motion.button
                  className="btn-secondary"
                  onClick={handleAddToCalendar}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-calendar-plus"></i>
                  Add to Calendar
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-share-alt"></i>
                  Share Event
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventModal;