import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimation();
  // Renamed to selectedItem to be more accurate
  const [selectedItem, setSelectedItem] = useState(null);

  // --- MODIFIED: Updated this array for your 3 images & 1 video ---
  const galleryItems = [
    {
      id: 1,
      type: 'video',
      // Add a thumbnail image for the video grid item
      thumbnail: '/gallery/Yaga.png', 
      // Add the path to your video file
      source: '/videos/gallery-video.mp4', 
      title: 'Event Highlights',
      category: 'Video'
    },
    {
      id: 2,
      type: 'image',
      // Add path to your first image
      source: '/gallery/1.jpeg', 
      title: 'Gracias',
      category: ''
    },
    {
      id: 3,
      type: 'image',
      // Add path to your second image
      source: '/gallery/2.jpeg',
      title: 'Gracias',
      category: ''
    },
    {
      id: 4,
      type: 'image',
      // Add path to your third image
      source: '/gallery/3.jpeg',
      title: 'Gracias',
      category: ''
    }
  ];
  // --- END OF MODIFICATION ---

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Gallery</h2>
          <p>Moments from our unforgettable events</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              // The first item (video) will be featured
              className={`gallery-item ${index === 0 ? 'featured' : ''} ${item.type === 'video' ? 'video-item' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.source} 
                alt={item.title} 
              />
              
              {/* If item is a video, show a play icon */}
              {item.type === 'video' && (
                <div className="video-play-icon">
                  <i className="fas fa-play"></i>
                </div>
              )}

              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal"
                onClick={() => setSelectedItem(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              
              {/* --- MODIFIED: Conditionally render video or image --- */}
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.source} alt={selectedItem.title} />
              ) : (
                <video 
                  src={selectedItem.source} 
                  autoPlay 
                  controls 
                  loop
                  playsInline
                  className="modal-video"
                />
              )}

              <div className="modal-info">
                <h3>{selectedItem.title}</h3>
                <span className="modal-category">{selectedItem.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;