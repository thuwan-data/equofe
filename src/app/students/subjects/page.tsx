'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SubjectCard {
  id: number;
  subject: string;
  yearGroup: string;
  classCode: string;
  teacher: string;
  schedule: { day: string; time: string }[];
}

export default function StudentSubjectsPage() {
  const [activeTab, setActiveTab] = useState('subjects');

  const subjects: SubjectCard[] = [
    { id: 1, subject: 'Mathematics', yearGroup: 'Year 7', classCode: '7MAT2', teacher: 'Kierra Schleifer', schedule: [
      { day: 'Monday', time: '08:00 am to 09:00 am' }, { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }, { day: 'Friday', time: '10:00 am to 11:00 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' }, { day: 'Thursday', time: '09:30 am to 10:30 am' }
    ] },
    { id: 2, subject: 'Physics', yearGroup: 'Year 7', classCode: '7MAT2', teacher: 'Charlie Gouse', schedule: [
      { day: 'Monday', time: '08:00 am to 09:00 am' }, { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }, { day: 'Friday', time: '10:00 am to 11:00 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' }, { day: 'Thursday', time: '09:30 am to 10:30 am' }
    ] },
    { id: 3, subject: 'English', yearGroup: 'Year 7', classCode: '7MAT2', teacher: 'Chance Aminoff', schedule: [
      { day: 'Monday', time: '08:00 am to 09:00 am' }, { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }, { day: 'Friday', time: '10:00 am to 11:00 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' }, { day: 'Thursday', time: '09:30 am to 10:30 am' }
    ] },
    { id: 4, subject: 'French', yearGroup: 'Year 7', classCode: '7MAT2', teacher: 'Carter Saris', schedule: [
      { day: 'Monday', time: '08:00 am to 09:00 am' }, { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }, { day: 'Friday', time: '10:00 am to 11:00 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' }, { day: 'Thursday', time: '09:30 am to 10:30 am' }
    ] },
    { id: 5, subject: 'Social Sciences', yearGroup: 'Year 7', classCode: '7MAT2', teacher: 'Martin Bothman', schedule: [
      { day: 'Monday', time: '08:00 am to 09:00 am' }, { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }, { day: 'Friday', time: '10:00 am to 11:00 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' }, { day: 'Thursday', time: '09:30 am to 10:30 am' }
    ] },
    { id: 6, subject: 'Computer Science', yearGroup: 'Year 7', classCode: '7MAT2', teacher: 'Nawal Mirza', schedule: [
      { day: 'Monday', time: '08:00 am to 09:00 am' }, { day: 'Wednesday', time: '12:00 pm to 01:00 pm' }, { day: 'Friday', time: '10:00 am to 11:00 am' },
      { day: 'Tuesday', time: '11:00 am to 12:00 pm' }, { day: 'Thursday', time: '09:30 am to 10:30 am' }
    ] }
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    if (id === 'timetable') window.location.href = '/students/dashboard';
    if (id === 'subjects') window.location.href = '/students/subjects';
  };

  return (
    <div className="teacher-dashboard">
      <aside className="teacher-sidebar">
        <div className="sidebar-header">
          <Image src="/logo-equo.svg" alt="Equo" width={100} height={35} className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          {[
            { id: 'timetable', label: 'Timetable' },
            { id: 'subjects', label: 'My Subjects' },
            { id: 'resources', label: 'Resource Library' }
          ].map((it) => (
            <button key={it.id} className={`nav-item ${activeTab===it.id?'active':''}`} onClick={()=>handleNav(it.id)}>
              <span className="nav-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/></svg></span>
              <span className="nav-label">{it.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="equo-controls">
            <div className="controls-header">Equo Controls</div>
            <div className="control-item"><span>Dark Mode</span><label className="toggle"><input type="checkbox" /><span className="slider"/></label></div>
            <div className="control-item"><span>Magnifier</span><label className="toggle"><input type="checkbox" /><span className="slider"/></label></div>
          </div>
          <button className="footer-item"><span className="nav-label">Settings</span></button>
          <button className="footer-item"><span className="nav-label">Help & Support</span></button>
        </div>
      </aside>

      <main className="teacher-main">
        <header className="teacher-header">
          <div className="header-content"><h1 className="greeting">My Subjects</h1></div>
        </header>

        <div className="teacher-content-wrapper">
          <section className="content-area">
            <div className="assigned-classes-grid">
              {subjects.map((s)=> (
                <div key={s.id} className="assigned-class-card" onClick={()=>window.location.href=`/students/subjects/${s.id}` }>
                  <div className="class-header">
                    <h3 className="class-subject">{s.subject}</h3>
                    <div className="class-meta"><span className="year-group">Year Group : {s.yearGroup}</span><span className="class-code">Class Code : {s.classCode}</span></div>
                  </div>
                  <div className="class-schedule">
                    <div className="schedule-slot"><span className="schedule-day">{s.schedule[0].day}</span><span className="schedule-time">({s.schedule[0].time})</span></div>
                    <div className="schedule-slot"><span className="schedule-day">{s.schedule[1].day}</span><span className="schedule-time">({s.schedule[1].time})</span></div>
                    <div className="schedule-slot"><span className="schedule-day">{s.schedule[2].day}</span><span className="schedule-time">({s.schedule[2].time})</span></div>
                    <div className="schedule-slot"><span className="schedule-day">{s.schedule[3].day}</span><span className="schedule-time">({s.schedule[3].time})</span></div>
                  </div>
                  <div className="class-actions"><button className="class-action-btn view-details">→</button></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
