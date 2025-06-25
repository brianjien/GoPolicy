import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home Page</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;