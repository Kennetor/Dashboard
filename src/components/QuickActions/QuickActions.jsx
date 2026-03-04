import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    { id: 1, title: 'Create New Project', icon: '📁', color: '#3b82f6' },
    { id: 2, title: 'Add Team Member', icon: '👤', color: '#10b981' },
    { id: 3, title: 'Generate Report', icon: '📊', color: '#f59e0b' },
    { id: 4, title: 'Settings', icon: '⚙️', color: '#6366f1' },
  ];

  return (
    <div className="quick-actions">
      <div className="actions-header">
        <h3>Quick Actions</h3>
      </div>
      <div className="actions-grid">
        {actions.map((action) => (
          <button key={action.id} className="action-card" style={{ borderColor: action.color }}>
            <div className="action-icon" style={{ backgroundColor: action.color }}>
              {action.icon}
            </div>
            <span className="action-title">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;