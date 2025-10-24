import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation'; // Adjust path if needed
import './AboutUs.css';

// Re-usable animation variants for text content
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Variants for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const AboutUs = () => {
  const [ref1, isVisible1] = useScrollAnimation(0.2);
  const [ref2, isVisible2] = useScrollAnimation(0.2);

  return (
    <section className="about-us" id="about">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2>OUR <span>STORY</span></h2>
          <p>This is who we are. This is what we believe.</p>
        </motion.div>

        {/* --- BLOCK 1: Text Left, Image Right --- */}
        <motion.div 
          className="about-us-grid" 
          ref={ref1}
          initial="hidden"
          animate={isVisible1 ? "visible" : "hidden"}
        >
          {/* Card for text content */}
          <motion.div className="about-us-content" variants={textVariants}>
            <span className="kicker">OUR PHILOSOPHY</span>
            <h3>Born in Melbourne, inspired by the underground.</h3>
            <p>
              Born in Melbourne and inspired by the deeper side of underground music, Soul Sync Events curates experiences that go beyond the dance floor.
            </p>
            <p>
              We believe music is a shared frequency — a force that connects minds, hearts, and movement. Each Soul Sync experience is designed to awaken emotion, blending sound, lighting, and atmosphere into one aligned energy.
            </p>
          </motion.div>
          
          {/* Wrapper for the image */}
          <motion.div className="about-us-image-wrapper" variants={imageVariants}>
            <img 
              // --- ADD YOUR FIRST IMAGE URL HERE ---
              src="\images\about.jpeg" 
              alt="Melbourne Cityscape at night" 
            />
          </motion.div>
        </motion.div>

        {/* --- BLOCK 2: Image Left, Text Right --- */}
        <motion.div 
          className="about-us-grid reverse" 
          ref={ref2}
          initial="hidden"
          animate={isVisible2 ? "visible" : "hidden"}
        >
          {/* Card for text content */}
          <motion.div className="about-us-content" variants={textVariants}>
            <span className="kicker">OUR VISION</span>
            <h3>A vision for the future, rooted in collaboration.</h3>
            <p>
              Our journey begins in collaboration with Yaga Imprints, uniting global artistry with Melbourne’s raw underground culture.
            </p>
            <p>
              We’re not just building events — we’re creating spaces where souls sync and stories unfold through sound.
            </p>
          </motion.div>

          {/* Wrapper for the image */}
          <motion.div className="about-us-image-wrapper" variants={imageVariants}>
            <img 
              // --- ADD YOUR SECOND IMAGE URL HERE ---
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
              alt="Underground music event with crowd" 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;