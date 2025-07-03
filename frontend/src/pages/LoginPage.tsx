import React, { useState } from 'react';
import { loginUser } from '../api/authService';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext'; 
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();
   const { setToken } = useAuth();
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      // Call the login API function
      const data = await loginUser({ email, password });
      setToken(data.token);
      
      console.log('Login success:', data);
      alert('Login successful! Token: ' + data.token);
      navigate('/');

     

    } catch (err: any) {
      console.error('Login failed:', err);
      // If the API call fails, set a user-friendly error message
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
   <div className="auth-page-container login-page">
    <div className="auth-card">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Display the error message if it exists */}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit" style={{ marginTop: '1rem' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;