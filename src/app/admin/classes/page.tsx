'use client';

import { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminDashboardHeader from '../../components/AdminDashboardHeader';

interface ClassData {
  id: string;
  subject: string;
  yearGroup: string;
  classCode: string;
  schedule: {
    day: string;
    time: string;
  }[];
  totalStudents: number;
  inclusiveStudents: number;
  teacher: string;
  room: string;
}

export default function ClassesPage() {
  const [activeNavItem, setActiveNavItem] = useState('classes');
  const [searchQuery, setSearchQuery] = useState('');

  const classes: ClassData[] = [
    {
      id: '1',
      subject: 'Mathematics',
      yearGroup: 'Year 7',
      classCode: '7MAT2',
      schedule: [
        { day: 'Monday', time: '09:30 am to 10:30 am' },
        { day: 'Tuesday', time: '11:00 am to 12:00 pm' },
        { day: 'Wednesday', time: '12:00 pm to 01:00 pm' },
        { day: 'Thursday', time: '09:30 am to 10:30 am' },
        { day: 'Friday', time: '10:00 am to 11:00 am' }
      ],
      totalStudents: 38,
      inclusiveStudents: 6,
      teacher: 'Lydia Bergson',
      room: 'Room 201'
    },
    {
      id: '2',
      subject: 'Physics',
      yearGroup: 'Year 8',
      classCode: '8PHY1',
      schedule: [
        { day: 'Monday', time: '08:30 am to 09:30 am' },
        { day: 'Wednesday', time: '10:00 am to 11:00 am' },
        { day: 'Friday', time: '02:00 pm to 03:00 pm' }
      ],
      totalStudents: 32,
      inclusiveStudents: 4,
      teacher: 'Tiana Gosse',
      room: 'Science Lab 1'
    },
    {
      id: '3',
      subject: 'English',
      yearGroup: 'Year 9',
      classCode: '9ENG3',
      schedule: [
        { day: 'Tuesday', time: '09:00 am to 10:00 am' },
        { day: 'Thursday', time: '11:00 am to 12:00 pm' },
        { day: 'Friday', time: '01:00 pm to 02:00 pm' }
      ],
      totalStudents: 29,
      inclusiveStudents: 3,
      teacher: 'Jordyn Calzoni',
      room: 'Room 105'
    },
    {
      id: '4',
      subject: 'Chemistry',
      yearGroup: 'Year 10',
      classCode: '10CHM1',
      schedule: [
        { day: 'Monday', time: '10:30 am to 11:30 am' },
        { day: 'Wednesday', time: '01:00 pm to 02:00 pm' },
        { day: 'Thursday', time: '08:30 am to 09:30 am' }
      ],
      totalStudents: 26,
      inclusiveStudents: 2,
      teacher: 'Zaire Baptista',
      room: 'Science Lab 2'
    },
    {
      id: '5',
      subject: 'Biology',
      yearGroup: 'Year 11',
      classCode: '11BIO2',
      schedule: [
        { day: 'Tuesday', time: '10:00 am to 11:00 am' },
        { day: 'Thursday', time: '02:00 pm to 03:00 pm' },
        { day: 'Friday', time: '09:00 am to 10:00 am' }
      ],
      totalStudents: 24,
      inclusiveStudents: 1,
      teacher: 'Leo Curtis',
      room: 'Science Lab 3'
    },
    {
      id: '6',
      subject: 'Computer Science',
      yearGroup: 'Year 12',
      classCode: '12CMP1',
      schedule: [
        { day: 'Monday', time: '01:00 pm to 02:00 pm' },
        { day: 'Wednesday', time: '03:00 pm to 04:00 pm' },
        { day: 'Friday', time: '11:00 am to 12:00 pm' }
      ],
      totalStudents: 22,
      inclusiveStudents: 0,
      teacher: 'Ahmad Culhane',
      room: 'Computer Lab'
    },
    {
      id: '7',
      subject: 'History',
      yearGroup: 'Year 8',
      classCode: '8HIS1',
      schedule: [
        { day: 'Tuesday', time: '08:30 am to 09:30 am' },
        { day: 'Thursday', time: '10:00 am to 11:00 am' }
      ],
      totalStudents: 35,
      inclusiveStudents: 5,
      teacher: 'Lincoln Bergson',
      room: 'Room 302'
    },
    {
      id: '8',
      subject: 'Art',
      yearGroup: 'Year 7',
      classCode: '7ART1',
      schedule: [
        { day: 'Monday', time: '02:00 pm to 03:00 pm' },
        { day: 'Wednesday', time: '11:00 am to 12:00 pm' }
      ],
      totalStudents: 28,
      inclusiveStudents: 7,
      teacher: 'Milo Lucen',
      room: 'Art Studio'
    }
  ];

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClassClick = (classData: ClassData) => {
    console.log('View class details:', classData);
  };

  const filteredClasses = classes.filter(classData =>
    classData.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classData.classCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classData.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classData.yearGroup.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <div className="classes-page-content">
            <div className="classes-header">
              <h1 className="page-title">Classes</h1>
              <div className="classes-actions">
                <button className="filter-button">
                  Filters
                  <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_2928)">
                      <path d="M4.16675 17.5V11.6666" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.16675 8.33333V2.5" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.8335 17.5V10" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.8335 6.66667V2.5" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5002 17.5V13.3334" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5002 10V2.5" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.66675 11.6666H6.66675" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.3335 6.66663H13.3335" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.0002 13.3334H20.0002" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2928">
                        <rect width="20" height="20" fill="white" transform="translate(0.833496)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="add-class-button">
                  + Add Class
                </button>
              </div>
            </div>

            <div className="classes-grid">
              {filteredClasses.map((classData) => (
                <div key={classData.id} className="admin-class-card" onClick={() => handleClassClick(classData)}>
                  <div className="admin-class-header">
                    <h3 className="admin-class-subject">{classData.subject}</h3>
                  </div>

                  <div className="admin-class-info">
                    <div className="admin-class-meta">
                      <p className="admin-year-group">Year Group : {classData.yearGroup}</p>
                      <p className="admin-class-code">Class Code : {classData.classCode}</p>
                    </div>

                    <div className="admin-schedule-grid">
                      <div className="schedule-column">
                        {classData.schedule.slice(0, 2).map((session, index) => (
                          <div key={index} className="admin-schedule-item">
                            <span className="schedule-day">{session.day}</span>
                            <span className="schedule-time">({session.time})</span>
                          </div>
                        ))}
                      </div>
                      <div className="schedule-column">
                        {classData.schedule.slice(2, 4).map((session, index) => (
                          <div key={index} className="admin-schedule-item">
                            <span className="schedule-day">{session.day}</span>
                            <span className="schedule-time">({session.time})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {classData.schedule.length > 4 && (
                      <div className="admin-schedule-item">
                        <span className="schedule-day">{classData.schedule[4].day}</span>
                        <span className="schedule-time">({classData.schedule[4].time})</span>
                      </div>
                    )}

                    <div className="admin-class-stats">
                      <div className="stat-group">
                        <div className="stat-item">
                          <span className="stat-label">Total Students</span>
                          <span className="stat-value">{classData.totalStudents}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Inclusive Students</span>
                          <span className="stat-value">{classData.inclusiveStudents}</span>
                        </div>
                      </div>
                      <button className="admin-class-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <span>Showing 1 to 8 of 42 classes</span>
              <div className="pagination-controls">
                <button className="pagination-btn">&laquo;</button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn">4</button>
                <button className="pagination-btn">&raquo;</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
