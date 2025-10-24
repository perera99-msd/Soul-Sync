import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modals.css';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <h2>Welcome Back</h2>
              <p>Sign in to your SOUL SYNC account</p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email Address</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>
            </form>

            <div className="modal-divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <motion.button
                className="btn-social btn-google"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-google"></i>
                Google
              </motion.button>
              <motion.button
                className="btn-social btn-facebook"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-facebook-f"></i>
                Facebook
              </motion.button>
            </div>

            <div className="modal-footer">
              <p>Don't have an account? <button onClick={onSwitchToRegister} className="switch-modal">Sign up</button></p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;