import React, { useState } from 'react';
import { loginUser } from '../api/authService';
import { useNavigate } from 'react-router-dom'; 
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      // Call the login API function
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      
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
    <div>
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
  );
};

export default LoginPage;