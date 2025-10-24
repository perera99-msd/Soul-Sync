import { useEffect, useState } from 'react';
import './LoadingScreen.css';
// Import your logo at the top
import logoSrc from './Logo.png'; 

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // 1. Show the final logo
          setShowLogo(true);
          // 2. Wait 800ms (for logo animation) then hide the whole screen
          setTimeout(() => setIsVisible(false), 800); 
          return 100;
        }
        // Increment progress
        return prev + 5;
      });
    }, 80); // This controls the speed of the progress bar

    return () => clearInterval(interval);
  }, []);

  // Use a class for the final fade-out
  const hiddenClass = !isVisible ? 'hidden' : '';
  const logoVisibleClass = showLogo ? 'logo-visible' : '';

  return (
    <div className={`loading-screen ${hiddenClass} ${logoVisibleClass}`}>
      
      {/* --- PHASE 1: Loading Elements --- */}
      {/* This container fades out when the logo appears */}
      <div className="loading-content">
        
        {/* New Premium Spinner */}
        <div className="spinner-container">
          <div className="spinner-logo">
            SOUL<span>SYNC</span>
          </div>
          <div className="spinner-arc"></div>
          <div className="spinner-arc"></div>
          <div className="spinner-arc"></div>
          <div className="spinner-arc"></div>
        </div>
        
        <div className="loading-text-container">
          <div className="loading-text">
            a space where souls align
          </div>
          <div className="loading-progress">
            <div 
              className="loading-progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* --- PHASE 2: Final Logo Reveal --- */}
      {/* This element is controlled by CSS, it fades in when 'logo-visible' is active */}
      <div className="final-logo">
        <img 
          src={logoSrc} // Use the imported logo source
          alt="SoulSync Logo" 
          className="logo-image"
        />
      </div>

    </div>
  );
};

export default LoadingScreen;