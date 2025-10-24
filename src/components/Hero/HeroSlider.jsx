// HeroSlider.jsx - REFACTORED TO MATCH NEW CONTENT STRUCTURE
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSlider.css';

// Premium animation variants (Unchanged)
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1200 : -1200,
    opacity: 0,
    scale: 1.15,
    filter: "blur(15px)"
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      x: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        duration: 1.2
      },
      opacity: { duration: 1 },
      scale: { duration: 1.4 },
      filter: { duration: 1 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 1200 : -1200,
    opacity: 0,
    scale: 0.85,
    filter: "blur(15px)",
    transition: {
      x: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        duration: 1
      },
      opacity: { duration: 0.6 },
      scale: { duration: 0.8 },
      filter: { duration: 0.6 }
    }
  })
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    x: -60
  },
  visible: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2
    }
  }
};

const contentItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// --- MODIFIED: slides array updated to match your new structure ---
const slides = [
  {
    id: 1,
    type: 'welcome',
    background: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=95&sharp=10',
    backgroundMobile: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95&sharp=10',
    
    title: 'A SPACE WHERE SOULS ALIGN',
    tagline: 'Progressive underground experiences by Soul Sync Events.',
    description: 'Experience the ultimate fusion of underground electronic music and immersive visual productions. Born in Melbourne, crafted for the world.',
    // Button 1
    cta: 'Buy Tickets',
    ctaIcon: 'fas fa-ticket-alt',
    ctaAction: { type: 'link', target: 'https://events.humanitix.com/graciasmelbourne2025' },
    // Button 2
    ctaSecondary: 'Watch the Story',
    ctaSecondaryIcon: 'fab fa-instagram',
    ctaSecondaryAction: { type: 'link', target: 'https://instagram.com/soulsync_events' }, // Placeholder link
  },
  {
    id: 2,
    type: 'featured',
    background: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=95&sharp=10',
    backgroundMobile: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95&sharp=10',
    badge: 'FEATURED EVENT',
    title: 'GRACIAS MELBOURNE 2025',
    tagline: 'A Story Retold',
    description: 'The first-ever all-night-long performance by a Sri Lankan progressive house artist in Melbourne.',
    // Button 1
    cta: 'View Details',
    ctaIcon: 'fas fa-arrow-down',
    ctaAction: { type: 'scroll', target: '#featured-event' },
  },
  {
    id: 3,
    type: 'upcoming',
    background: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=95&sharp=10',
    backgroundMobile: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95&sharp=10',
    badge: 'UPCOMING',
    title: 'OUR NEXT JOURNEY',
    tagline: 'Don\'t Miss What\'s Next',
    description: 'Explore our schedule of upcoming underground experiences. Secure your spot and be part of the story.',
    // Button 1
    cta: 'View Events',
    ctaIcon: 'fas fa-calendar-alt',
    ctaAction: { type: 'scroll', target: '#events' },
  },
  {
    id: 4,
    type: 'gallery',
    background: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=95&sharp=10',
    backgroundMobile: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95&sharp=10',
    badge: 'GALLERY',
    title: 'RELIVE THE MOMENTS',
    tagline: 'A Look Back at Our Journey',
    description: 'The energy, the art, and the connections from our past events. See the full story in images and video.',
    // Button 1
    cta: 'Explore Gallery',
    ctaIcon: 'fas fa-images',
    ctaAction: { type: 'scroll', target: '#gallery' },
  }
];
// --- END OF MODIFICATION ---


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Autoplay interval

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Pause autoplay
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Pause autoplay
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Pause autoplay
  };

  // --- NEW: Generic function to handle scrolling ---
  const handleScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    }
  };

  // --- NEW: Handler for the primary CTA button ---
  const handleCtaClick = (action) => {
    if (action.type === 'link') {
      window.open(action.target, '_blank');
    } else if (action.type === 'scroll') {
      handleScrollTo(action.target);
    }
  };
  
  // --- NEW: Handler for the secondary CTA button ---
  const handleCtaSecondaryClick = (action) => {
    if (action.type === 'link') {
      window.open(action.target, '_blank');
    } else if (action.type === 'scroll') {
      handleScrollTo(action.target);
    }
  };

  // Get appropriate background image based on device
  const getBackgroundImage = (slide) => {
    return isMobile ? slide.backgroundMobile : slide.background;
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="hero" id="home">
      <motion.div 
        className="slider-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="slider">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              className={`slide ${activeSlide.type === 'welcome' ? 'slide-welcome' : ''}`}
              style={{
                backgroundImage: `url(${getBackgroundImage(activeSlide)})`
              }}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="slide-overlay"></div>
              <div className="gradient-overlay-left"></div>
              <div className="gradient-overlay-bottom"></div>

              <div className="container">
                <motion.div
                  className="slide-content"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  key={`content-${currentSlide}`}
                >
                  {/* --- THIS IS THE FIX --- */}
                  {/* Conditionally render badge only if it exists */}
                  {activeSlide.badge && (
                    <motion.div 
                      className="slide-badge"
                      variants={contentItemVariants}
                    >
                      {activeSlide.badge}
                    </motion.div>
                  )}
                  {/* --- END OF FIX --- */}


                  <motion.h1 variants={contentItemVariants}>
                    {activeSlide.title}
                  </motion.h1>
                  
                  <motion.h3
                    className="slide-tagline"
                    variants={contentItemVariants}
                  >
                    {activeSlide.tagline}
                  </motion.h3>

                  <motion.p variants={contentItemVariants}>
                    {activeSlide.description}
                  </motion.p>
                  
                  {/* --- MODIFIED: Dynamic Button Rendering --- */}
                  <motion.div 
                    className="slide-actions"
                    variants={contentItemVariants}
                  >
                    {/* Primary Button */}
                    <motion.button
                      className="btn-premium btn-premium-primary"
                      onClick={() => handleCtaClick(activeSlide.ctaAction)}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 25px 60px rgba(61, 185, 180, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={activeSlide.ctaIcon}></i>
                      {activeSlide.cta}
                    </motion.button>

                    {/* Secondary Button (Only renders if it exists) */}
                    {activeSlide.ctaSecondary && (
                      <motion.button
                        className="btn-premium btn-premium-secondary"
                        onClick={() => handleCtaSecondaryClick(activeSlide.ctaSecondaryAction)}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 15px 40px rgba(255, 255, 255, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={activeSlide.ctaSecondaryIcon}></i>
                        {activeSlide.ctaSecondary}
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="slider-nav">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${slide.type} slide`}
            >
              <div className="dot-progress"></div>
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="slider-arrows">
          <motion.button 
            className="slider-arrow" 
            onClick={prevSlide}
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          <motion.button 
            className="slider-arrow" 
            onClick={nextSlide}
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>
        </div>

        {/* Slide Counter - Hidden on Mobile */}
        <div className="slide-counter">
          <span className="current-slide">0{currentSlide + 1}</span>
          <span className="total-slides">/0{slides.length}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;