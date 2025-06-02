import axios from 'axios';

const authAPI = axios.create({ baseURL: 'http://localhost:8000/auth' });

export const login = async (username, password,rememberMe) =>
  authAPI.post(
        '/login',
        {
          username,
          password,
          remember_me: rememberMe,
        },
        { withCredentials: true }
      );


export const getMe = async (token) => {
  try {
    return await axios.get('/http://localhost:8000/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error.response?.status === 401) {
      // Try refresh
      const refreshRes = await authAPI.post('/refresh', null, {
        withCredentials: true, // very important for sending the cookie
      });
      const newToken = refreshRes.data.access_token;
      localStorage.setItem('token', newToken);
      return await authAPI.get('/me', {
        headers: { Authorization: `Bearer ${newToken}` },
      });
    }
    throw error;
  }
};