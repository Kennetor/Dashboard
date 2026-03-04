import React from 'react';
import './ChartSection.css';

const ChartSection = () => {
  return (
    <div className="chart-section">
      <div className="chart-header">
        <h3>Analytics Overview</h3>
      </div>
      <div className="chart-container">
        <div className="chart-placeholder">
          <div className="chart-bars">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="chart-bar" 
                style={{ height: `${Math.random() * 60 + 20}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;