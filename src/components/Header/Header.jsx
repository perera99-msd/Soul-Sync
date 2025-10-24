import { useState, useEffect } from 'react';
import './Header.css';
import Logo from './Logo.png'; // Import the logo

const Header = ({ onLoginClick, onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src={Logo} alt="SoulSync Logo" className="logo-image" />
          SOUL<span>SYNC</span>
        </a>
        
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
            <li><a href="#events" onClick={(e) => handleNavClick(e, '#events')}>Events</a></li>
            <li><a href="#past-events" onClick={(e) => handleNavClick(e, '#past-events')}>Past Events</a></li>
            <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a></li>
            <li><a href="#newsletter" onClick={(e) => handleNavClick(e, '#newsletter')}>Newsletter</a></li>
          </ul>
        </nav>
        
        {/* Auth buttons hidden as requested
        <div className="auth-buttons">
          <button className="btn btn-secondary" onClick={onLoginClick}>
            Login
          </button>
          <button className="btn btn-primary" onClick={onRegisterClick}>
            Register
          </button>
        </div>
        */}
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;