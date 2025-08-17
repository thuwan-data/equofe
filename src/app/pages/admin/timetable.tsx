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
      { id: '1', title: 'Teacher Pro...', type: 'class', color: '#BB6BD9' },
    ],
    '2030-05-02': [
      { id: '2', title: 'Students Day', type: 'event', color: '#A2EBC1' },
      { id: '3', title: 'AP Calcula...', type: 'class', color: '#288474' },
    ],
    '2030-05-03': [
      { id: '4', title: 'Spring Conc...', type: 'event', color: '#288474' },
    ],
    '2030-05-05': [
      { id: '5', title: 'Cinco de Ma...', type: 'event', color: '#BB6BD9' },
    ],
    '2030-05-08': [
      { id: '6', title: 'Science Fair...', type: 'event', color: '#A2EBC1' },
      { id: '7', title: 'Teacher Mee...', type: 'meeting', color: '#288474' },
    ],
    '2030-05-09': [
      { id: '8', title: 'Science Fair...', type: 'event', color: '#A2EBC1' },
      { id: '9', title: 'PTA Meeting', type: 'meeting', color: '#FFD700' },
    ],
    '2030-05-13': [
      { id: '10', title: 'English Liter...', type: 'class', color: '#BB6BD9' },
    ],
    '2030-05-15': [
      { id: '11', title: 'Varsity Trac...', type: 'event', color: '#FFD700' },
    ],
    '2030-05-16': [
      { id: '12', title: 'Junior Prom', type: 'event', color: '#288474' },
    ],
    '2030-05-19': [
      { id: '13', title: 'Senior Proje...', type: 'class', color: '#BB6BD9' },
      { id: '14', title: 'Teacher Mee...', type: 'meeting', color: '#288474' },
    ],
    '2030-05-21': [
      { id: '15', title: 'Board of Edu...', type: 'meeting', color: '#FFD700' },
    ],
    '2030-05-22': [
      { id: '16', title: 'Art Exhibitio...', type: 'event', color: '#A2EBC1' },
      { id: '17', title: 'Drama Club...', type: 'event', color: '#BB6BD9' },
      { id: '18', title: 'PTA Meeting', type: 'meeting', color: '#FFD700' },
    ],
    '2030-05-26': [
      { id: '19', title: 'Memorial D...', type: 'event', color: '#BB6BD9' },
    ],
    '2030-05-28': [
      { id: '20', title: 'Sophomore...', type: 'class', color: '#A2EBC1' },
    ],
    '2030-05-29': [
      { id: '21', title: 'Art Fair & Ex...', type: 'event', color: '#FFD700' },
    ],
    '2030-05-31': [
      { id: '22', title: 'Last Day of S...', type: 'event', color: '#288474' },
    ],
  };

  const agendaItems: AgendaItem[] = [
    {
      id: '1',
      title: 'Big Day and Celebration Day',
      time: '',
      type: 'event',
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
      title: 'Fair Exhibition & Performance',
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
      color: '#FFD700'
    },
    {
      id: '5',
      title: 'Science Fair Setup',
      time: '08:00 am',
      type: 'event',
      description: 'Science Club',
      color: '#A2EBC1'
    },
    {
      id: '6',
      title: 'Teacher Meeting',
      time: '11:00 am',
      type: 'meeting',
      description: 'All Teacher',
      color: '#FFD700'
    },
    {
      id: '7',
      title: 'Varsity Track Meet',
      time: '01:00 pm',
      type: 'track',
      description: 'Track Team',
      color: '#FFD700'
    },
    {
      id: '8',
      title: 'Parents Meeting',
      time: '03:00 pm',
      type: 'meeting',
      description: 'All Teacher and Parents',
      color: '#FFD700'
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

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
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
          <div className="timetable-page-content">
            <div className="timetable-header">
              <div className="view-controls">
                <div className="view-mode-tabs">
                  {(['Month', 'Week', 'Day'] as const).map((mode) => (
                    <button
                      key={mode}
                      className={`view-tab ${viewMode === mode ? 'active' : ''}`}
                      onClick={() => setViewMode(mode)}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                
                <div className="calendar-navigation">
                  <button className="nav-btn" onClick={() => navigateMonth('prev')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <h2 className="current-month">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  
                  <button className="nav-btn" onClick={() => navigateMonth('next')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <button className="today-btn">Today</button>
              </div>
            </div>

            <div className="timetable-layout">
              <div className="calendar-section">
                <div className="calendar-grid">
                  <div className="calendar-header">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="day-header">{day}</div>
                    ))}
                  </div>
                  
                  <div className="calendar-body">
                    {days.map((day, index) => {
                      const dateKey = formatDateKey(day);
                      const dayEvents = events[dateKey] || [];
                      
                      return (
                        <div
                          key={index}
                          className={`calendar-cell ${!isCurrentMonth(day) ? 'other-month' : ''} ${isToday(day) ? 'today' : ''}`}
                        >
                          <div className="day-number">{day.getDate()}</div>
                          <div className="day-events">
                            {dayEvents.slice(0, 3).map((event) => (
                              <div
                                key={event.id}
                                className="event-item"
                                style={{ backgroundColor: event.color }}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 3 && (
                              <div className="more-events">
                                +{dayEvents.length - 3} more
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="agenda-section">
                <div className="agenda-header">
                  <h3>Agenda</h3>
                  <button className="agenda-menu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="5" r="1" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="19" r="1" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                
                <div className="agenda-list">
                  {agendaItems.map((item) => (
                    <div key={item.id} className="agenda-item">
                      <div 
                        className="agenda-color-indicator"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="agenda-content">
                        <div className="agenda-title">{item.title}</div>
                        {item.description && (
                          <div className="agenda-description">{item.description}</div>
                        )}
                      </div>
                      {item.time && (
                        <div className="agenda-time">{item.time}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="agenda-date-section">
                  <h4>May, 8 2030</h4>
                  <div className="daily-agenda">
                    <div className="daily-item">
                      <div className="time-indicator">08:00 am</div>
                      <div className="daily-event">
                        <div className="event-title">Science Fair Setup</div>
                        <div className="event-subtitle">Science Club</div>
                      </div>
                    </div>
                    <div className="daily-item">
                      <div className="time-indicator">11:00 am</div>
                      <div className="daily-event">
                        <div className="event-title">Teacher Meeting</div>
                        <div className="event-subtitle">All Teacher</div>
                      </div>
                    </div>
                    <div className="daily-item">
                      <div className="time-indicator">01:00 pm</div>
                      <div className="daily-event">
                        <div className="event-title">Varsity Track Meet</div>
                        <div className="event-subtitle">Track Team</div>
                      </div>
                    </div>
                    <div className="daily-item">
                      <div className="time-indicator">03:00 pm</div>
                      <div className="daily-event">
                        <div className="event-title">Parents Meeting</div>
                        <div className="event-subtitle">All Teacher and Parents</div>
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
