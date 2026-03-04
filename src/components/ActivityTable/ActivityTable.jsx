import React from 'react';
import './ActivityTable.css';

const ActivityTable = () => {
  const activities = [
    { id: 1, user: 'John Doe', action: 'Logged in', time: '2 minutes ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '15 minutes ago' },
    { id: 3, user: 'Bob Wilson', action: 'Created new project', time: '1 hour ago' },
    { id: 4, user: 'Alice Brown', action: 'Commented on task', time: '2 hours ago' },
    { id: 5, user: 'Charlie Davis', action: 'Uploaded file', time: '3 hours ago' },
    { id: 6, user: 'Eva Garcia', action: 'Completed task', time: '4 hours ago' },
  ];

  return (
    <div className="activity-table">
      <div className="table-header">
        <h3>Recent Activity</h3>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.user}</td>
                <td>{activity.action}</td>
                <td>{activity.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;