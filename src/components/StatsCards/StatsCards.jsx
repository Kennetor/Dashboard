import React from 'react';
import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12.5%',
      icon: '👥'
    },
    {
      title: 'Revenue',
      value: '$45,670',
      change: '+8.2%',
      icon: '💰'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '-2.1%',
      icon: '⚡'
    },
    {
      title: 'Growth',
      value: '24.8%',
      change: '+5.3%',
      icon: '📈'
    }
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-content">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
            <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;