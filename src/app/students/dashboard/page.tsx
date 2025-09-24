'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState('timetable');

  const handleNav = (id: string) => {
    setActiveTab(id);
    if (id === 'subjects') window.location.href = '/students/subjects';
    if (id === 'timetable') window.location.href = '/students/dashboard';
  };

  const todayClasses = [
    { id: 1, subject: 'Mathematics', level: '5MTH5', time: '08:00 - 09:30', date: '12th July 2024', resources: 'Lesson Resources' },
    { id: 2, subject: 'Physics', level: '1SPHY2', time: '11:00 - 12:30', date: '12th July 2024', resources: 'Lesson Resources' },
    { id: 3, subject: 'English', level: '1SENG2', time: '01:00 - 02:30', date: '12th July 2024', resources: 'Lesson Resources' }
  ];

  const previous = [
    { id: 1, tag: 'AI', subject: 'Physics', level: '1 SPHY2', lesson: 'Lesson 9 | 21st Dec 2024', details: '3 Lesson Details' },
    { id: 2, tag: 'Mathematics', subject: 'Mathematics', level: '7 MTH12', lesson: 'Lesson 1 | 20th Dec 2024', details: '7 Lesson Details' },
    { id: 3, tag: 'English', subject: 'English', level: '1 SENG2', lesson: 'Lesson 3 | 19th Dec 2024', details: '2 Lesson Details' }
  ];

  const sidebarItems = [
    { id: 'timetable', label: 'Timetable' },
    { id: 'subjects', label: 'My Subjects' },
    { id: 'resources', label: 'Resource Library' }
  ];

  return (
    <div className="teacher-dashboard">
      <aside className="teacher-sidebar">
        <div className="sidebar-header">
          <Image src="/logo-equo.svg" alt="Equo" width={100} height={35} className="sidebar-logo" />
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((it) => (
            <button key={it.id} className={`nav-item ${activeTab===it.id?'active':''}`} onClick={() => handleNav(it.id)}>
              <span className="nav-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <span className="nav-label">{it.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="equo-controls">
            <div className="controls-header">Equo Controls</div>
            <div className="control-item">
              <span>Dark Mode</span>
              <label className="toggle"><input type="checkbox" /><span className="slider"/></label>
            </div>
            <div className="control-item">
              <span>Magnifier</span>
              <label className="toggle"><input type="checkbox" /><span className="slider"/></label>
            </div>
            <div className="control-item">
              <span>Font Size</span>
              <div className="font-sizes">
                {['QA','QB','QC','QD','QE'].map((f)=> (<span key={f} className="font-size-chip">{f}</span>))}
              </div>
            </div>
            <div className="control-item">
              <span>Color</span>
              <div className="color-swatches">
                {['#22c55e','#f43f5e','#3b82f6','#eab308','#a855f7','#ef4444','#14b8a6','#f97316','#64748b','#10b981'].map((c,i)=> (
                  <span key={i} className="swatch" style={{background:c}}/>
                ))}
              </div>
            </div>
          </div>
          <button className="footer-item"><span className="nav-icon"></span><span className="nav-label">Settings</span></button>
          <button className="footer-item"><span className="nav-icon"></span><span className="nav-label">Help & Support</span></button>
        </div>
      </aside>

      <main className="teacher-main">
        <header className="teacher-header">
          <div className="header-content">
            <h1 className="greeting">Good Day Mary</h1>
            <div className="header-actions">
              <button className="notification-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="user-profile-dropdown">
                <button className="profile-btn"><span>Mary Jabasa</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="teacher-content-wrapper">
          <section className="content-area">
            <div className="content-grid">
              <div className="timetable-section">
                <div className="section-header"><h2>Timetable</h2><button className="header-btn">📅</button></div>
                <div className="timetable-content">
                  <h3>Today</h3>
                  <div className="classes-list">
                    {todayClasses.map((c)=> (
                      <div key={c.id} className="class-card">
                        <div className="class-info">
                          <h4>Lesson Number 1</h4>
                          <p className="class-level">{c.subject} | {c.level}</p>
                          <div className="class-meta">
                            <span className="time">{c.time}</span>
                            <span className="date">{c.date}</span>
                          </div>
                        </div>
                        <button className="action-btn">Join Class</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="right-column">
                <div className="calendar-section">
                  <div className="section-header"><h3>Calendar</h3><button className="calendar-btn">📅</button></div>
                  <div className="calendar-widget">
                    <div className="calendar-header">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                    <div className="calendar-grid">
                      {Array.from({length:35}, (_,i)=>{
                        const day=i-5; const isToday=day===12; const isCurrent=day>0&&day<=31;
                        return <div key={i} className={`calendar-day ${isToday?'today':''} ${!isCurrent?'other-month':''}`}>{isCurrent?day:''}</div>
                      })}
                    </div>
                  </div>
                </div>

                <div className="previous-classes-section">
                  <h3>Previous Classes</h3>
                  <div className="previous-classes-list">
                    {previous.map((p)=> (
                      <div key={p.id} className="previous-class-item">
                        <div className="class-tag">{p.tag}</div>
                        <div className="class-details">
                          <p><strong>{p.subject}</strong> | {p.level}</p>
                          <p className="lesson-info">{p.lesson}</p>
                          <p className="lesson-details">{p.details}</p>
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
