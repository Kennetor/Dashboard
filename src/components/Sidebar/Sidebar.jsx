import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Navigation</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Analytics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;