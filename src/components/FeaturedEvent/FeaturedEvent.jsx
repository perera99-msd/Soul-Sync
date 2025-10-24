import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import './FeaturedEvent.css';

const FeaturedEvent = ({ onEventDetailsClick }) => {
  const [ref, isVisible] = useScrollAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuredSection = document.getElementById('featured-event');
      if (featuredSection) {
        const rect = featuredSection.getBoundingClientRect();
        setIsScrolled(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      if (isScrolled) {
        header.classList.add('featured-blur');
      } else {
        header.classList.remove('featured-blur');
      }
    }
  }, [isScrolled]);

  const featuredEvent = {
    title: 'GRACIAS MELBOURNE 2025',
    date: 'Saturday, 6th December 2025',
    time: '7:00 PM – 3:00 AM',
    venue: 'The Industrique, Coburg',
    ticketUrl: 'https://events.humanitix.com/graciasmelbourne2025'
  };

  const handleReadDetails = () => {
    onEventDetailsClick();
  };

  const handleBuyTickets = () => {
    window.open(featuredEvent.ticketUrl, '_blank');
  };

  return (
    <section id="featured-event" className="featured-event">
      <div className="video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="featured-video"
        >
          <source src="/videos/featured-event-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <motion.div 
        ref={ref}
        className="featured-content container"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="featured-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {featuredEvent.title}
        </motion.h1>

        <motion.div
          className="featured-meta"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="meta-item">
            <i className="fas fa-calendar-alt"></i>
            <span>{featuredEvent.date}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-clock"></i>
            <span>{featuredEvent.time}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{featuredEvent.venue}</span>
          </div>
        </motion.div>

        <motion.div
          className="featured-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            className="btn-read-details"
            onClick={handleReadDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-scroll"></i>
            Event Details
          </motion.button>
          
          <motion.button
            className="btn-buy-tickets"
            onClick={handleBuyTickets}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-ticket-alt"></i>
            Buy Tickets
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedEvent;