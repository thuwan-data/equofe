'use client';

import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminDashboardHeader from '../../../components/AdminDashboardHeader';
import AdminStatsCards from '../../../components/AdminStatsCards';
import AdminClassSchedule from '../../../components/AdminClassSchedule';
import AdminCalendar from '../../../components/AdminCalendar';
import AdminStudentsChart from '../../../components/AdminStudentsChart';

export default function AdminDashboardPage() {
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
    console.log('Navigation item clicked:', item);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleFilterClick = () => {
    console.log('Filter clicked');
  };

  const handleClassClick = (classId: string) => {
    console.log('Class clicked:', classId);
  };

  const handleDateSelect = (date: Date) => {
    console.log('Date selected:', date);
  };

  // Use default stats from AdminStatsCards component (which have the proper SVG icons)
  // No need to override since we updated the component itself

  // Custom class schedule data
  const todaysClasses = [
    { id: '1', number: 1, subject: 'Mathematics', code: '7MTH5', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { id: '2', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { id: '3', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { id: '4', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { id: '5', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { id: '6', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' }
  ];

  // Custom chart data
  const studentsChartData = [
    { label: 'Non-Inclusive', value: 435, percentage: 74, color: '#26a69a' },
    { label: 'Inclusive Students', value: 89, percentage: 26, color: '#4dd0e1' }
  ];

  return (
    <div className="dashboard-container">
      <AdminSidebar 
        activeItem={activeNavItem}
        onItemClick={handleNavItemClick}
      />

      <main className="dashboard-main">
        <AdminDashboardHeader 
          userName="Admin"
          onSearch={handleSearch}
        />

        <AdminStatsCards stats={statsData} />

        <section className="content-section">
          <div className="content-grid">
            <AdminClassSchedule 
              classes={todaysClasses}
              onFilterClick={handleFilterClick}
              onClassClick={handleClassClick}
            />

            <div className="right-sidebar">
              <AdminCalendar 
                currentMonth="July"
                currentYear={2024}
                onDateSelect={handleDateSelect}
              />

              <AdminStudentsChart 
                data={studentsChartData}
                title="Students"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
