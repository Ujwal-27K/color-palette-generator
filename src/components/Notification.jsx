import { useEffect } from 'react';
import './Notification.css';

/**
 * Notification Component
 * Shows success, error, and warning messages to users
 * Auto-dismisses after a set timeout
 */
const Notification = ({ show, message, type = 'success', duration = 3000 }) => {
  
  // Auto-dismiss notification after duration
  useEffect(() => {
    if (show) {
      // Add body class to prevent scrolling when notification is shown
      document.body.classList.add('notification-shown');
    } else {
      document.body.classList.remove('notification-shown');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('notification-shown');
    };
  }, [show]);

  if (!show) return null;

  // Determine icon based on notification type
  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '✅';
    }
  };

  return (
    <div 
      className={`notification notification--${type} ${show ? 'notification--show' : ''}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="notification-content">
        <span className="notification-icon" aria-hidden="true">
          {getIcon()}
        </span>
        <span className="notification-message">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Notification;
