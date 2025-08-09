'use client';

import { useState } from 'react';

export default function AdminDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterOpen, setFilterOpen] = useState(false);

  const todaysClasses = [
    { number: 1, subject: 'Mathematics', code: 'MTH18', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
    { number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' }
  ];

  const calendarDays = [
    { day: 1, isToday: false }, { day: 2, isToday: false }, { day: 3, isToday: false }, { day: 4, isToday: false },
    { day: 5, isToday: false }, { day: 6, isToday: false }, { day: 7, isToday: false }, { day: 8, isToday: false },
    { day: 9, isToday: false }, { day: 10, isToday: false }, { day: 11, isToday: false }, { day: 12, isToday: true },
    { day: 13, isToday: false }, { day: 14, isToday: false }, { day: 15, isToday: false }, { day: 16, isToday: false },
    { day: 17, isToday: false }, { day: 18, isToday: false }, { day: 19, isToday: false }, { day: 20, isToday: false },
    { day: 21, isToday: false }, { day: 22, isToday: false }, { day: 23, isToday: false }, { day: 24, isToday: false },
    { day: 25, isToday: false }, { day: 26, isToday: false }, { day: 27, isToday: false }, { day: 28, isToday: false },
    { day: 29, isToday: false }, { day: 30, isToday: false }, { day: 31, isToday: false }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="brand-logo-dashboard">
            <span className="brand-text-dashboard">equo</span>
            <span className="brand-tagline-dashboard">Education for all</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item nav-item-active">
              <span className="nav-icon">📊</span>
              <span className="nav-text">Dashboard</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">👨‍🏫</span>
              <span className="nav-text">Teachers</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📚</span>
              <span className="nav-text">Classes</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📈</span>
              <span className="nav-text">Analytics</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">💰</span>
              <span className="nav-text">Financials</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📋</span>
              <span className="nav-text">Subscriptions</span>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <ul className="footer-nav">
            <li className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">🛠️</span>
              <span className="nav-text">Support</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <header className="dashboard-header">
          <div className="search-container">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>
          <div className="user-profile">
            <div className="user-avatar">
              <span>👤</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon stat-icon-teachers">👨‍🏫</div>
              <div className="stat-content">
                <div className="stat-number">24</div>
                <div className="stat-label">Total Teachers</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-students">👥</div>
              <div className="stat-content">
                <div className="stat-number">524</div>
                <div className="stat-label">Total Students</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-inclusive">🤝</div>
              <div className="stat-content">
                <div className="stat-number">89</div>
                <div className="stat-label">Total Inclusive Students</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-classes">📚</div>
              <div className="stat-content">
                <div className="stat-number">24</div>
                <div className="stat-label">Total Classes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="content-section">
          <div className="content-grid">
            {/* Today's Classes */}
            <div className="content-card classes-card">
              <div className="card-header">
                <h2 className="card-title">Today's Classes Schedule</h2>
                <button 
                  className="filter-button"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  Filter ⚙️
                </button>
              </div>
              <div className="classes-list">
                {todaysClasses.map((cls, index) => (
                  <div key={index} className="class-item">
                    <div className="class-info">
                      <div className="class-header">
                        <span className="lesson-number">Lesson Number {cls.number}</span>
                      </div>
                      <div className="class-details">
                        <span className="subject-name">{cls.subject}</span>
                        <span className="subject-code">| {cls.code}</span>
                      </div>
                      <div className="class-meta">
                        <span className="class-time">⏰ {cls.time}</span>
                        <span className="class-date">📅 {cls.date}</span>
                        <span className="class-year">🎓 {cls.year}</span>
                        <button className="class-list-button">{cls.classType}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar Content */}
            <div className="right-sidebar">
              {/* Calendar */}
              <div className="content-card calendar-card">
                <div className="card-header">
                  <h3 className="card-title">School Calendar</h3>
                  <button className="calendar-button">📅</button>
                </div>
                <div className="calendar">
                  <div className="calendar-header">
                    <div className="weekday">Mon</div>
                    <div className="weekday">Tue</div>
                    <div className="weekday">Wed</div>
                    <div className="weekday">Thu</div>
                    <div className="weekday">Fri</div>
                    <div className="weekday">Sat</div>
                    <div className="weekday">Sun</div>
                  </div>
                  <div className="calendar-grid">
                    {calendarDays.map((day, index) => (
                      <div 
                        key={index} 
                        className={`calendar-day ${day.isToday ? 'calendar-day-today' : ''}`}
                      >
                        {day.day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Students Chart */}
              <div className="content-card students-card">
                <h3 className="card-title">Students</h3>
                <div className="chart-container">
                  <div className="donut-chart">
                    <div className="donut-chart-inner">
                      <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle 
                          cx="60" 
                          cy="60" 
                          r="50" 
                          fill="none" 
                          stroke="#e0f2f1" 
                          strokeWidth="20"
                        />
                        <circle 
                          cx="60" 
                          cy="60" 
                          r="50" 
                          fill="none" 
                          stroke="#26a69a" 
                          strokeWidth="20" 
                          strokeDasharray="188.5 125.6"
                          strokeDashoffset="0"
                          transform="rotate(-90 60 60)"
                        />
                        <circle 
                          cx="60" 
                          cy="60" 
                          r="50" 
                          fill="none" 
                          stroke="#4dd0e1" 
                          strokeWidth="20" 
                          strokeDasharray="125.6 188.5"
                          strokeDashoffset="-188.5"
                          transform="rotate(-90 60 60)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <div className="legend-color legend-color-primary"></div>
                      <span className="legend-label">Non-Inclusive</span>
                      <span className="legend-value">74%</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color legend-color-secondary"></div>
                      <span className="legend-label">Inclusive Students</span>
                      <span className="legend-value">26%</span>
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
