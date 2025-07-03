import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header className="homepage-header">
        <h1>GoPolicy</h1>
        <p>Your platform for engaging in public policy.</p>
      </header>
      <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Explore Policies</h5>
                    <p className="card-text">Discover and learn about current and proposed public policies.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Voice Your Opinion</h5>
                    <p className="card-text">Participate in polls and discussions to make your voice heard.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Stay Informed</h5>
                    <p className="card-text">Get the latest updates and analysis on policy changes that matter to you.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;