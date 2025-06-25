import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        {/* Outlet  */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;