import React from 'react';

const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('The form has been created'); 
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;