'use client';

import { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminDashboardHeader from '../../components/AdminDashboardHeader';

interface Event {
  id: string;
  title: string;
  time?: string;
  type: 'class' | 'meeting' | 'exam' | 'event';
  color: string;
}

interface AgendaItem {
  id: string;
  title: string;
  time: string;
  type: 'meeting' | 'presentation' | 'exhibition' | 'track';
  description: string;
  color: string;
}

export default function TimetablePage() {
  const [activeNavItem, setActiveNavItem] = useState('timetable');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date(2030, 4, 1)); // May 2030
  const [viewMode, setViewMode] = useState<'Month' | 'Week' | 'Day'>('Month');

  const events: { [key: string]: Event[] } = {
    '2030-05-01': [
      { id: '1', title: 'Teacher Pro...', type: 'class', color: '#288474' }
    ],
    '2030-05-02': [
      { id: '2', title: 'Students Day', type: 'event', color: '#BB6BD9' },
      { id: '3', title: 'AP Calcula...', type: 'exam', color: '#F59E0B' }
    ],
    '2030-05-03': [
      { id: '4', title: 'Spring Conc...', type: 'event', color: '#BB6BD9' }
    ],
    '2030-05-08': [
      { id: '5', title: 'Science Fair...', type: 'event', color: '#288474' },
      { id: '6', title: '2 more', type: 'class', color: '#A2EBC1' }
    ],
    '2030-05-09': [
      { id: '7', title: 'Teacher Mee...', type: 'meeting', color: '#F59E0B' },
      { id: '8', title: 'Science Fair...', type: 'event', color: '#288474' },
      { id: '9', title: 'PTA Meeting', type: 'meeting', color: '#F59E0B' }
    ],
    '2030-05-10': [
      { id: '10', title: 'PTA Meeting', type: 'meeting', color: '#F59E0B' }
    ],
    '2030-05-12': [
      { id: '11', title: 'Cinco de Ma...', type: 'event', color: '#BB6BD9' }
    ],
    '2030-05-13': [
      { id: '12', title: 'English Liter...', type: 'class', color: '#A2EBC1' }
    ],
    '2030-05-15': [
      { id: '13', title: 'Varsity Trac...', type: 'event', color: '#F59E0B' }
    ],
    '2030-05-16': [
      { id: '14', title: 'Junior Prom', type: 'event', color: '#BB6BD9' }
    ],
    '2030-05-19': [
      { id: '15', title: 'Senior Proj...', type: 'class', color: '#A2EBC1' },
      { id: '16', title: '1 more', type: 'class', color: '#A2EBC1' }
    ],
    '2030-05-20': [
      { id: '17', title: 'Teacher Mee...', type: 'meeting', color: '#F59E0B' }
    ],
    '2030-05-21': [
      { id: '18', title: 'Board of Edu...', type: 'meeting', color: '#F59E0B' },
      { id: '19', title: 'Art Exhibitio...', type: 'exhibition', color: '#BB6BD9' },
      { id: '20', title: 'PTA Meeting', type: 'meeting', color: '#F59E0B' }
    ],
    '2030-05-26': [
      { id: '21', title: 'Memorial D...', type: 'event', color: '#BB6BD9' }
    ],
    '2030-05-28': [
      { id: '22', title: 'Sophomore...', type: 'class', color: '#A2EBC1' },
      { id: '23', title: '1 more', type: 'class', color: '#A2EBC1' }
    ],
    '2030-05-30': [
      { id: '24', title: 'Art Fair & Ex...', type: 'exhibition', color: '#BB6BD9' },
      { id: '25', title: 'Last Day of S...', type: 'event', color: '#F59E0B' }
    ]
  };

  const agendaItems: AgendaItem[] = [
    {
      id: '1',
      title: 'Big Day and Celebration Day',
      time: '',
      type: 'exhibition',
      description: '',
      color: '#BB6BD9'
    },
    {
      id: '2',
      title: 'Subject Presentation & Exam',
      time: '',
      type: 'presentation',
      description: '',
      color: '#BB6BD9'
    },
    {
      id: '3',
      title: 'Fair, Exhibition & Performance',
      time: '',
      type: 'exhibition',
      description: '',
      color: '#BB6BD9'
    },
    {
      id: '4',
      title: 'Official Meeting',
      time: '',
      type: 'meeting',
      description: '',
      color: '#F59E0B'
    }
  ];

  const todayAgenda: AgendaItem[] = [
    {
      id: '5',
      title: 'Science Fair Setup',
      time: '08:00 am',
      type: 'exhibition',
      description: 'Science Club',
      color: '#288474'
    },
    {
      id: '6',
      title: 'Teacher Meeting',
      time: '11:00 am',
      type: 'meeting',
      description: 'All Teachers',
      color: '#F59E0B'
    },
    {
      id: '7',
      title: 'Varsity Track Meet',
      time: '01:00 pm',
      type: 'track',
      description: 'Track Team',
      color: '#BB6BD9'
    },
    {
      id: '8',
      title: 'Parents Meeting',
      time: '03:00 pm',
      type: 'meeting',
      description: 'All Teachers and Parents',
      color: '#F59E0B'
    }
  ];

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const days = getDaysInMonth(currentDate);

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

        <section className="content-section">
          <div className="admin-timetable-layout">
            {/* Calendar Section */}
            <div className="admin-calendar-main">
              <div className="admin-timetable-header">
                <div className="admin-view-controls">
                  {(['Month', 'Week', 'Day'] as const).map((mode) => (
                    <button
                      key={mode}
                      className={`admin-view-tab ${viewMode === mode ? 'active' : ''}`}
                      onClick={() => setViewMode(mode)}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                
                <h2 className="admin-calendar-title">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                
                <div className="admin-calendar-actions">
                  <button className="admin-today-btn">Today</button>
                  <div className="admin-nav-controls">
                    <button className="admin-nav-btn" onClick={() => navigateMonth('prev')}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="admin-nav-btn" onClick={() => navigateMonth('next')}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="admin-calendar-grid-container">
                <div className="admin-calendar-days-header">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="admin-day-header">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="admin-calendar-grid">
                  {days.map((day, index) => {
                    const dayKey = formatDateKey(day);
                    const dayEvents = events[dayKey] || [];
                    
                    return (
                      <div
                        key={index}
                        className={`admin-calendar-day ${!isCurrentMonth(day) ? 'other-month' : ''}`}
                      >
                        <span className="admin-day-number">{day.getDate()}</span>
                        <div className="admin-day-events">
                          {dayEvents.map((event) => (
                            <div
                              key={event.id}
                              className="admin-event-item"
                              style={{ backgroundColor: event.color }}
                            >
                              <span className="admin-event-title">{event.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Agenda Sidebar */}
            <div className="admin-agenda-sidebar">
              <div className="admin-agenda-header">
                <h3>Agenda</h3>
                <button className="admin-agenda-menu-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="5" r="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="19" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              
              <div className="admin-agenda-list">
                {agendaItems.map((item) => (
                  <div key={item.id} className="admin-agenda-item" style={{ borderLeftColor: item.color }}>
                    <div className="admin-agenda-content">
                      <h4 className="admin-agenda-title">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="admin-today-agenda">
                <h4>May, 8 2030</h4>
                <div className="admin-today-events">
                  {todayAgenda.map((item) => (
                    <div key={item.id} className="admin-today-event">
                      <div className="admin-event-icon" style={{ backgroundColor: item.color }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2"/>
                          <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="admin-event-details">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
