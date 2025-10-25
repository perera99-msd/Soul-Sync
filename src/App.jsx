import { useState } from 'react';
import LoadingScreen from './components/Loading/LoadingScreen';
import Header from './components/Header/Header';
import HeroSlider from './components/Hero/HeroSlider';
import FeaturedEvent from './components/FeaturedEvent/FeaturedEvent';
import FeaturedArtists from './components/FeaturedArtists/FeaturedArtists'; // New import
import AboutUs from './components/AboutUs/AboutUs';
import UpcomingEvents from './components/Events/UpcomingEvents';
import PastEvents from './components/Events/PastEvents';
import Gallery from './components/Gallery/Gallery';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import LoginModal from './components/Modals/LoginModal';
import RegisterModal from './components/Modals/RegisterModal';
import EventModal from './components/Modals/EventModal';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null); // 'login', 'register', or 'event'

  // Simulate loading completion
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const handleLoginClick = () => {
    setActiveModal('login');
  };

  const handleRegisterClick = () => {
    setActiveModal('register');
  };

  const handleEventDetailsClick = () => {
    setActiveModal('event');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const switchToRegister = () => {
    setActiveModal('register');
  };

  const switchToLogin = () => {
    setActiveModal('login');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Header 
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      
      <main>
        <HeroSlider />
        <FeaturedEvent onEventDetailsClick={handleEventDetailsClick} />
        <FeaturedArtists /> {/* New Featured Artists Component */}
        <AboutUs />
        <UpcomingEvents onEventDetailsClick={handleEventDetailsClick} />
        <PastEvents />
        <Gallery />
        <Newsletter />
      </main>

      <Footer />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={closeModal}
        onSwitchToRegister={switchToRegister}
      />

      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeModal}
        onSwitchToLogin={switchToLogin}
      />

      <EventModal
        isOpen={activeModal === 'event'}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;