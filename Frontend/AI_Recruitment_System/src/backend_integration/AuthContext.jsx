import { createContext, useState, useEffect } from 'react';
import { getMe } from './api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  const RefreshToken = () => {
    // Fetch user info if token is set

      getMe(token)
        .then(res => {
          setUser(res.data);
        console.log(res.data)

          setToken(localStorage.getItem('token') || '');
        })
        .catch(() => {
          setToken('');
          localStorage.removeItem('token');
        });
  }
  useEffect(() => {
      RefreshToken();
  }, [token]);
  
  
  const handleLogout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');

    // Optional: notify backend to clear refresh_token cookie
    fetch('http://localhost:8000/logout', {
      method: 'POST',
      credentials: 'include'
    });
  };



  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
