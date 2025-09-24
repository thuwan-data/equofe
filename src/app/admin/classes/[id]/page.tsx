'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminDashboardHeader from '../../../components/AdminDashboardHeader';

export default function AdminClassDetailsPage() {
  const params = useParams();
  const [activeNavItem, setActiveNavItem] = useState('classes');

  const classData = {
    id: params.id,
    subject: 'Mathematics',
    yearGroup: 'Year 7',
    classCode: '7MAT2',
    teacher: 'Lydia Bergson',
    room: 'Room 201',
    totalStudents: 38,
    inclusiveStudents: 6,
    schedule: [
      { day: 'Monday', time: '09:30 am to 10:30 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' },
      { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }
    ],
    description: 'Detailed class overview and notes for the teacher and admin.'
  };

  const handleNavItemClick = (item: string) => setActiveNavItem(item);

  const handleBack = () => { window.location.href = '/admin/classes'; };

  return (
    <div className="dashboard-container">
      <AdminSidebar activeItem={activeNavItem} onItemClick={handleNavItemClick} />

      <main className="dashboard-main">
        <AdminDashboardHeader userName="Admin" onSearch={() => {}} />

        <section className="content-section">
          <div className="classes-page-content">
            <div className="details-header">
              <button className="class-list-button" onClick={handleBack}>Back to classes</button>
              <h1 className="page-title">Class Details</h1>
              <div />
            </div>

            <div className="class-card">
              <div className="class-card-header">
                <h2 className="class-subject">{classData.subject}</h2>
                <div className="class-menu-btn" />
              </div>

              <div className="class-details">
                <div className="class-detail-item">
                  <div>
                    <div className="class-meta">
                      <span className="lesson-number">{classData.classCode}</span>
                      <span className="class-date">Teacher: {classData.teacher}</span>
                      <span className="class-year">Room: {classData.room}</span>
                    </div>
                    <p className="details-description">{classData.description}</p>
                  </div>
                </div>

                <div className="class-schedule details-schedule">
                  {classData.schedule.map((s, i) => (
                    <div key={i} className="schedule-item">
                      <span className="schedule-day">{s.day}</span>
                      <span className="schedule-time">{s.time}</span>
                    </div>
                  ))}
                </div>

                <div className="class-stats details-stats">
                  <div className="stat-item">
                    <span className="stat-label">Total Students</span>
                    <span className="stat-value">{classData.totalStudents}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Inclusive Students</span>
                    <span className="stat-value">{classData.inclusiveStudents}</span>
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
