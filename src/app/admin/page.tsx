'use client';

import { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminDashboardHeader from '../../components/AdminDashboardHeader';
import AdminCalendar from '../../components/AdminCalendar';
import AdminClassSchedule from '../../components/AdminClassSchedule';

export default function DashboardPage() {
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

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

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 29.3334C23.3638 29.3334 29.3334 23.3638 29.3334 16C29.3334 8.63622 23.3638 2.66669 16 2.66669C8.63622 2.66669 2.66669 8.63622 2.66669 16C2.66669 23.3638 8.63622 29.3334 16 29.3334Z" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8V16L21.3334 18.6667" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">1,234</div>
                <div className="stat-label">Total Classes</div>
                <div className="stat-change positive">+12% from last month</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3333 20H10.6667C9.25218 20 7.89563 20.5619 6.89543 21.5621C5.89524 22.5623 5.33333 23.9188 5.33333 25.3333V28" stroke="#BB6BD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z" stroke="#BB6BD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">23</div>
                <div className="stat-label">Teachers</div>
                <div className="stat-change positive">+2 new this week</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6667 28V25.3333C22.6667 23.9188 22.1048 22.5623 21.1046 21.5621C20.1044 20.5619 18.7479 20 17.3333 20H6.66667C5.25218 20 3.89563 20.5619 2.89543 21.5621C1.89524 22.5623 1.33333 23.9188 1.33333 25.3333V28" stroke="#A2EBC1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05448 4 6.66667 6.38781 6.66667 9.33333C6.66667 12.2789 9.05448 14.6667 12 14.6667Z" stroke="#A2EBC1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30.6667 28V25.3333C30.6666 24.0948 30.2506 22.8907 29.4854 21.9073C28.7202 20.924 27.6467 20.2128 26.4667 19.8667" stroke="#A2EBC1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.3333 4.86667C22.5178 5.21018 23.5956 5.92184 24.3638 6.90609C25.132 7.89035 25.5502 9.09709 25.5502 10.3383C25.5502 11.5796 25.132 12.7863 24.3638 13.7706C23.5956 14.7548 22.5178 15.4665 21.3333 15.81" stroke="#A2EBC1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">856</div>
                <div className="stat-label">Students</div>
                <div className="stat-change positive">+45 enrolled</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.3333 5.33331H6.66667C5.19391 5.33331 4 6.52722 4 7.99998V24C4 25.4727 5.19391 26.6666 6.66667 26.6666H25.3333C26.8061 26.6666 28 25.4727 28 24V7.99998C28 6.52722 26.8061 5.33331 25.3333 5.33331Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.3334 2.66669V8.00002" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6666 2.66669V8.00002" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 13.3333H28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">42</div>
                <div className="stat-label">Events</div>
                <div className="stat-change neutral">This month</div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-grid">
            <div className="content-card classes-card">
              <AdminClassSchedule />
            </div>

            <div className="right-sidebar">
              <div className="calendar-card">
                <AdminCalendar />
              </div>

              <div className="students-card">
                <div className="card-header">
                  <h3 className="card-title">Students Overview</h3>
                </div>
                <div className="chart-container">
                  <div className="donut-chart">
                    <svg viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="20"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#288474"
                        strokeWidth="20"
                        strokeDasharray="377"
                        strokeDashoffset="125"
                        transform="rotate(-90 100 100)"
                        className="chart-segment"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#A2EBC1"
                        strokeWidth="20"
                        strokeDasharray="125"
                        strokeDashoffset="0"
                        transform="rotate(162 100 100)"
                        className="chart-segment"
                      />
                    </svg>
                  </div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <div className="legend-color legend-color-primary"></div>
                      <div className="legend-content">
                        <div className="legend-label">Regular Students</div>
                        <div className="legend-value">752</div>
                      </div>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color legend-color-secondary"></div>
                      <div className="legend-content">
                        <div className="legend-label">Inclusive Students</div>
                        <div className="legend-value">104</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
