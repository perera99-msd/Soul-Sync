import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import './FeaturedArtists.css';

const FeaturedArtists = () => {
  const [ref, isVisible] = useScrollAnimation();

  const artists = [
    {
      id: 1,
      name: "Echo Daft",
      role: "Main",
      setTime: "All Night Long",
      image: "/api/placeholder/150/150",
      socials: {
        instagram: "#",
        soundcloud: "#",
        spotify: "#"
      }
    },
    {
      id: 2,
      name: "Liam Sieker",
      role: "Support",
      setTime: "22:00 - 00:00",
      image: "/api/placeholder/150/150",
      socials: {
        instagram: "#",
        soundcloud: "#",
        spotify: "#"
      }
    },
    {
      id: 3,
      name: "Audio Theft",
      role: "Opening",
      setTime: "20:00 - 22:00",
      image: "/api/placeholder/150/150",
      socials: {
        instagram: "#",
        soundcloud: "#",
        spotify: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="artists" className="featured-artists section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="artists-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Artists</span>
          </h2>
          <p className="section-subtitle">
            Experience the incredible talent behind our events
          </p>
        </motion.div>

        <motion.div
          className="artists-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className="artist-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="artist-image-container">
                <div className="artist-image">
                  <div className="image-placeholder">
                    <i className="fas fa-music"></i>
                  </div>
                </div>
                <div className="artist-role-badge">
                  {artist.role}
                </div>
              </div>

              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-set-time">{artist.setTime}</p>
                
                <div className="artist-socials">
                  <a href={artist.socials.instagram} className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={artist.socials.soundcloud} className="social-icon">
                    <i className="fab fa-soundcloud"></i>
                  </a>
                  <a href={artist.socials.spotify} className="social-icon">
                    <i className="fab fa-spotify"></i>
                  </a>
                </div>
              </div>

              <div className="artist-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArtists;