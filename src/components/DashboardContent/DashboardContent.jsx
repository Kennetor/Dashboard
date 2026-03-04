import React from 'react';
import StatsCards from '../StatsCards/StatsCards';
import ActivityTable from '../ActivityTable/ActivityTable';
import QuickActions from '../QuickActions/QuickActions';
import ChartSection from '../ChartSection/ChartSection';
import './DashboardContent.css';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <StatsCards />
      <div className="dashboard-grid">
        <ActivityTable />
        <QuickActions />
      </div>
      <ChartSection />
    </div>
  );
};

export default DashboardContent;
