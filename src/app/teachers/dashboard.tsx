'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState('timetable');

  const todayClasses = [
    {
      id: 1,
      subject: 'Mathematics',
      level: '7MH15',
      time: '08:00 - 09:30',
      date: '12th July 2024',
      students: 6,
      status: 'Class List',
      action: 'Start Lesson'
    },
    {
      id: 2,
      subject: 'Physics',
      level: '9PHY2',
      time: '09:00 - 09:30',
      date: '12th July 2024',
      students: 6,
      status: 'Class List',
      action: 'Start Lesson'
    }
  ];

  const previousClasses = [
    {
      id: 1,
      subject: 'Physics',
      level: '9PHY2',
      lesson: 'Lesson 2',
      date: '21st Dec 2024',
      details: '3 Lesson Details'
    },
    {
      id: 2,
      subject: 'Mathematics',
      level: '7MH12',
      lesson: 'Lesson 3',
      date: '20th Dec 2024',
      details: '3 Lesson Details'
    }
  ];

  const statsData = [
    { number: '3', label: 'Classes Assigned', color: '#288474' },
    { number: '55', label: 'Total Students', color: '#288474' },
    { number: '27', label: 'Inclusive Students', color: '#288474' }
  ];

  const sidebarItems = [
    {
      id: 'timetable',
      label: 'Timetable',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'assigned-classes',
      label: 'Assigned Classes',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'resource-library',
      label: 'Resource Library',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'passwords',
      label: 'Passwords List',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="teacher-dashboard">
      {/* Sidebar */}
      <aside className="teacher-sidebar">
        <div className="sidebar-header">
          <Image
            src="/logo-equo.svg"
            alt="Equo"
            width={100}
            height={35}
            className="sidebar-logo"
          />
        </div>
        
        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="footer-item">
            <span className="nav-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="m12 1 3 6 6 3-6 3-3 6-3-6-6-3 6-3z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <span className="nav-label">Settings</span>
          </button>
          <button className="footer-item">
            <span className="nav-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <span className="nav-label">Help & Support</span>
          </button>
          <button className="footer-item">
            <span className="nav-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <span className="nav-label">FAQs</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="teacher-main">
        {/* Header */}
        <header className="teacher-header">
          <div className="header-content">
            <h1 className="greeting">Good Day Moseed</h1>
            <div className="header-actions">
              <button className="notification-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="user-profile-dropdown">
                <button className="profile-btn">
                  <span>Moseed Shahid</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="teacher-stats-section">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number" style={{ color: stat.color }}>{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Area */}
        <div className="teacher-content-wrapper">
          <section className="content-area">
          <div className="content-grid">
            {/* Left Column - Timetable */}
            <div className="timetable-section">
              <div className="section-header">
                <h2>Timetable</h2>
                <button className="header-btn">📅</button>
              </div>
              
              <div className="timetable-content">
                <h3>Classes today</h3>
                <div className="classes-list">
                  {todayClasses.map((classItem) => (
                    <div key={classItem.id} className="class-card">
                      <div className="class-info">
                        <h4>{classItem.subject}</h4>
                        <p className="class-level">{classItem.level}</p>
                        <div className="class-meta">
                          <span className="time">{classItem.time}</span>
                          <span className="date">{classItem.date}</span>
                          <span className="students">👥 {classItem.students}</span>
                          <span className="status">{classItem.status}</span>
                        </div>
                      </div>
                      <button className="action-btn start-lesson">
                        {classItem.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Calendar */}
              <div className="calendar-section">
                <div className="section-header">
                  <h3>Calendar</h3>
                  <button className="calendar-btn">📅</button>
                </div>
                <div className="calendar-widget">
                  <div className="calendar-header">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="calendar-grid">
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 5; // Adjust for calendar start
                      const isToday = day === 12;
                      const isCurrentMonth = day > 0 && day <= 31;
                      
                      return (
                        <div 
                          key={i} 
                          className={`calendar-day ${isToday ? 'today' : ''} ${!isCurrentMonth ? 'other-month' : ''}`}
                        >
                          {isCurrentMonth ? day : ''}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Previous Classes */}
              <div className="previous-classes-section">
                <h3>Previous Classes</h3>
                <div className="previous-classes-list">
                  {previousClasses.map((classItem) => (
                    <div key={classItem.id} className="previous-class-item">
                      <div className="class-tag">AI</div>
                      <div className="class-details">
                        <p><strong>{classItem.subject}</strong> | {classItem.level}</p>
                        <p className="lesson-info">{classItem.lesson} | {classItem.date}</p>
                        <p className="lesson-details">{classItem.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
      </main>
    </div>
  );
}
