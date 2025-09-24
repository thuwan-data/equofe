'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface LessonItem { id:number; title:string; code:string; time:string; date:string; resources:string; students:number; }

export default function StudentSubjectDetailPage(){
  const { id } = useParams();
  const [tab, setTab] = useState<'scheduled'|'completed'>('scheduled');

  const scheduled: LessonItem[] = [
    { id:1, title:'Lesson Number 1', code:'7MAT1', time:'08:00 - 09:30', date:'12th July 2024', resources:'Lesson Resources', students:6 },
    { id:2, title:'Class Number 2', code:'7MAT1', time:'08:00 - 09:30', date:'13th July 2024', resources:'Lesson Resources', students:6 },
    { id:3, title:'Class Number 3', code:'7MAT1', time:'08:00 - 09:30', date:'14th July 2024', resources:'Lesson Resources', students:6 },
    { id:4, title:'Class Number 4', code:'7MAT1', time:'08:00 - 09:30', date:'15th July 2024', resources:'Lesson Resources', students:6 },
    { id:5, title:'Class Number 5', code:'7MAT1', time:'08:00 - 09:30', date:'16th July 2024', resources:'Lesson Resources', students:6 }
  ];
  const completed: LessonItem[] = [
    { id:6, title:'Lesson Number 1', code:'Mathematics', time:'08:00 - 09:30', date:'12th July 2024', resources:'Lesson Resources', students:6 },
    { id:7, title:'Lesson Number 1', code:'Mathematics', time:'08:00 - 09:30', date:'12th July 2024', resources:'Lesson Resources', students:6 },
    { id:8, title:'Lesson Number 1', code:'Mathematics', time:'08:00 - 09:30', date:'12th July 2024', resources:'Lesson Resources', students:6 },
    { id:9, title:'Lesson Number 1', code:'Mathematics', time:'08:00 - 09:30', date:'12th July 2024', resources:'Lesson Resources', students:6 }
  ];

  const teacherProfile = { name:'Nawal Mirza', subjects:'Subject Teacher : Computer Science | Introduction to Computer' };
  const resources = [
    { id:1, name:'The basic of Mathematics', size:'1.2 MB' },
    { id:2, name:'The basic of Mathematics', size:'5.7 MB' },
    { id:3, name:'The basic of Mathematics', size:'1.2 MB' },
    { id:4, name:'The basic of Mathematics', size:'1.2 MB' }
  ];

  const rows = (tab==='scheduled'?scheduled:completed);

  return (
    <div className="teacher-dashboard">
      <aside className="teacher-sidebar">
        <div className="sidebar-header"><Image src="/logo-equo.svg" alt="Equo" width={100} height={35} className="sidebar-logo"/></div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={()=>window.location.href='/students/dashboard'}><span className="nav-label">Timetable</span></button>
          <button className="nav-item active" onClick={()=>window.location.href='/students/subjects'}><span className="nav-label">My Subjects</span></button>
          <button className="nav-item"><span className="nav-label">Resource Library</span></button>
        </nav>
        <div className="sidebar-footer"></div>
      </aside>
      <main className="teacher-main">
        <header className="teacher-header">
          <div className="header-content">
            <div className="header-left">
              <button className="back-btn" onClick={()=>window.location.href='/students/subjects'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <h1 className="greeting">Mathematics</h1>
            </div>
          </div>
        </header>

        <div className="teacher-content-wrapper">
          <section className="content-area">
            <div className="content-grid">
              <div className="timetable-section">
                <div className="section-header">
                  <div className="timetable-tabs">
                    <button className={`tab-btn ${tab==='scheduled'?'active':''}`} onClick={()=>setTab('scheduled')}>Scheduled Classes</button>
                    <button className={`tab-btn ${tab==='completed'?'active':''}`} onClick={()=>setTab('completed')}>Completed</button>
                  </div>
                </div>
                <div className="lessons-list">
                  {rows.map((c)=> (
                    <div key={c.id} className="class-card">
                      <div className="class-info">
                        <h4>{c.title}</h4>
                        <p className="class-level">{c.code}</p>
                        <div className="class-meta">
                          <span className="time">{c.time}</span>
                          <span className="date">{c.date}</span>
                          <span className="students">👥 {c.students}</span>
                          <span className="status">{c.resources}</span>
                        </div>
                      </div>
                      <button className="action-btn">{tab==='scheduled'?'Class List':'→'}</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="right-column">
                <div className="calendar-section">
                  <div className="section-header"><h3>Teacher Profile</h3></div>
                  <div className="previous-class-item">
                    <div className="class-tag"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg></div>
                    <div className="class-details">
                      <p><strong>{teacherProfile.name}</strong></p>
                      <p className="lesson-info">{teacherProfile.subjects}</p>
                    </div>
                  </div>
                </div>

                <div className="previous-classes-section">
                  <h3>Resource Library</h3>
                  <div className="previous-classes-list">
                    {resources.map((r)=> (
                      <div key={r.id} className="previous-class-item">
                        <div className="class-details" style={{flex:1}}>
                          <p><strong>{r.name}</strong></p>
                          <p className="lesson-info">Mathematics | 5MTH15 | PDF</p>
                          <p className="lesson-info">Posted on 12 Feb, 2024 | 11:43 am</p>
                        </div>
                        <div className="lesson-details">{r.size}</div>
                        <button className="action-btn" style={{marginLeft:'8px'}}>View</button>
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
