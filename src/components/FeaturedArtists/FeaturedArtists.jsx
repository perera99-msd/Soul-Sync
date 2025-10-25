import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import './FeaturedArtists.css';

const FeaturedArtists = () => {
  const [ref, isVisible] = useScrollAnimation();

  const artists = [
    {
      id: 1,
      name: "Echo Daft",
      image: "/artists/echo.png",
      socials: {
        instagram: "https://www.instagram.com/echo_daft_official?igsh",
        soundcloud: "https://soundcloud.com/echodaftofficial",
        spotify: "https://open.spotify.com/artist/4KWx4BGNsCxGoZAZEfkrqK"
      }
    },
    {
      id: 2,
      name: "Liam Sieker",
      image: "/artists/liam.png",
      socials: {
        instagram: "https://www.instagram.com/liamsieker/",
        soundcloud: "https://soundcloud.com/liam-sieker",
        spotify: "https://open.spotify.com/artist/0R8lLZON6M1wdIU0dIvK86"
      }
    },
    {
      id: 3,
      name: "Audio Theft",
      image: "/artists/audio.jpeg",
      socials: {
        soundcloud: "https://soundcloud.com/audiotheft"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="artists" className="featured-artists section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="artists-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Artists</span>
          </h2>
          <p className="section-subtitle">
            Experience the extraordinary talent shaping our sonic landscape
          </p>
        </motion.div>

        <motion.div
          className="artists-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              className="artist-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className="artist-card-inner">
                {/* Background Image */}
                <div className="artist-background">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="artist-bg-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      document.querySelector(`.artist-card[data-artist="${artist.id}"] .image-placeholder`).style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder">
                    <i className="fas fa-music"></i>
                  </div>
                  <div className="background-overlay"></div>
                  <div className="background-gradient"></div>
                </div>

                {/* Content Overlay */}
                <div className="artist-content-overlay">
                  <div className="artist-info">
                    <h3 className="artist-name">{artist.name}</h3>
                    
                    <div className="artist-socials">
                      {artist.socials.instagram && (
                        <motion.a 
                          href={artist.socials.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="social-icon"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="fab fa-instagram"></i>
                        </motion.a>
                      )}
                      {artist.socials.soundcloud && (
                        <motion.a 
                          href={artist.socials.soundcloud} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="social-icon"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="fab fa-soundcloud"></i>
                        </motion.a>
                      )}
                      {artist.socials.spotify && (
                        <motion.a 
                          href={artist.socials.spotify} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="social-icon"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="fab fa-spotify"></i>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="card-glow-effect"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArtists;