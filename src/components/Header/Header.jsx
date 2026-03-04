import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Dashboard</h1>
        <div className="header-actions">
          <button className="header-button">Settings</button>
          <button className="header-button">Profile</button>
        </div>
      </div>
    </header>
  );
};

export default Header;