
import { useState, useEffect } from 'react';

export const useAdmin = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.altKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        if (!isAuthenticated) {
          setShowLogin(true);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isAuthenticated]);

  const handleLogin = (username: string, password: string) => {
    // Simple authentication - in real app, this would be server-side
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setShowLogin(false);
    } else {
      alert('Invalid credentials. Use admin/admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return {
    showLogin,
    isAuthenticated,
    handleLogin,
    handleLogout,
    closeLogin
  };
};
