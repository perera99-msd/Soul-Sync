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
      image: "/artists/echo.png",
      socials: {
        instagram: "https://www.instagram.com/echodaft/",
        soundcloud: "https://soundcloud.com/echodaftofficial",
        spotify: "https://open.spotify.com/artist/4KWx4BGNsCxGoZAZEfkrqK"
      }
    },
    {
      id: 2,
      name: "Liam Sieker",
      role: "Support",
      setTime: "22:00 - 00:00",
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
      role: "Opening",
      setTime: "20:00 - 22:00",
      image: "/artists/Audio.png",
      socials: {
        soundcloud: "https://soundcloud.com/audiotheft"
        // Instagram and Spotify hidden as requested
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
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              className="artist-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="artist-image-container">
                <div className="artist-image">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="artist-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
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
                  {/* Echo Daft - Show all socials */}
                  {artist.id === 1 && (
                    <>
                      <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={artist.socials.soundcloud} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-soundcloud"></i>
                      </a>
                      <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-spotify"></i>
                      </a>
                    </>
                  )}
                  
                  {/* Liam Sieker - Show all socials */}
                  {artist.id === 2 && (
                    <>
                      <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={artist.socials.soundcloud} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-soundcloud"></i>
                      </a>
                      <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-spotify"></i>
                      </a>
                    </>
                  )}
                  
                  {/* Audio Theft - Only show SoundCloud */}
                  {artist.id === 3 && (
                    <a href={artist.socials.soundcloud} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <i className="fab fa-soundcloud"></i>
                    </a>
                  )}
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