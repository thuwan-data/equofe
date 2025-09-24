'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function ClassDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('timetable');

  const classData = {
    id: params.id,
    title: '7MH17 - 23rd August 2024',
    subject: 'Mathematics',
    level: '7MH17',
    date: '23rd August 2024',
    duration: '45 min',
    views: 25,
    recording: {
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F8fb58adcda2b4a1ea321e1672f825117%2F4475f93359f943a1b948e70e8b4b5a9b?format=webp&width=800',
      title: '7MH17 - 23rd August 2024'
    },
    uploadedFiles: [
      {
        id: 1,
        name: 'The basic of Mathematics',
        size: '1.2 MB',
        type: 'PDF',
        uploadDate: 'Aug 22, 2024, 10:30 AM'
      },
      {
        id: 2,
        name: 'The basic of Mathematics',
        size: '1.2 MB', 
        type: 'PDF',
        uploadDate: 'Aug 22, 2024, 10:30 AM'
      },
      {
        id: 3,
        name: 'The basic of Mathematics',
        size: '1.2 MB',
        type: 'PDF', 
        uploadDate: 'Aug 22, 2024, 10:30 AM'
      }
    ],
    classNotes: `The basic of Mathematics lesson introduction of some comprehensive. In its elementary practice, the use of the natural introduction is the theory's historical foundations to use, the use of specific theories used by the simple theoretical concepts, their implications and the results of their application including such processes. Useful insights, from those. The use of specific evidence that use use specific evaluation.

Basic concepts of learning including numbers and geometry, fractions, the topic. Specific mathematical concepts use standard mathematics, arithmetic, algebra, geometry, and trigonometry etc. And can be used in mathematics.

Such topics are algebra and numbers. The numbers are useful in that mathematics can be used including computational concepts. Algebra and computational concepts are basic in the arithmetic concepts by mathematics. The elementary concepts use algebra, and mathematical concepts related to basic mathematics. Basic concepts related to elementary and standard introduction use algebra principles or practice learning students.

Basic concepts of algebra and mathematics have basic algebra learning.`
  };

  const sidebarItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="12" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="16" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
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

  const handleNavigation = (itemId: string) => {
    setActiveTab(itemId);
    if (itemId === 'dashboard') {
      window.location.href = '/teachers/dashboard';
    } else if (itemId === 'timetable') {
      window.location.href = '/teachers/timetable';
    }
  };

  const handleBack = () => {
    window.location.href = '/teachers/timetable';
  };

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
              onClick={() => handleNavigation(item.id)}
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
            <div className="header-left">
              <button className="back-btn" onClick={handleBack}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <h1 className="greeting">Class Details</h1>
            </div>
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

        {/* Content Area */}
        <div className="teacher-content-wrapper">
          <section className="class-details-content">
            <div className="class-details-grid">
              {/* Recording Section */}
              <div className="recording-section">
                <h2>Recording</h2>
                <div className="recording-player">
                  <img 
                    src={classData.recording.thumbnail}
                    alt="Recording thumbnail"
                    className="recording-thumbnail"
                  />
                  <div className="play-overlay">
                    <button className="play-btn">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,3 19,12 5,21" fill="white"/>
                      </svg>
                    </button>
                  </div>
                  <div className="recording-info-overlay">
                    <p>Lesson title goes here</p>
                  </div>
                </div>
                <div className="recording-meta">
                  <h3>{classData.recording.title}</h3>
                  <div className="recording-stats">
                    <span className="views">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {classData.views}
                    </span>
                  </div>
                  <button className="view-btn">View</button>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="class-details-sidebar">
                {/* Uploaded Files */}
                <div className="uploaded-files-section">
                  <div className="section-header">
                    <h3>Uploaded Files</h3>
                    <button className="upload-btn">+ Upload Resources</button>
                  </div>
                  <div className="files-list">
                    {classData.uploadedFiles.map((file) => (
                      <div key={file.id} className="file-item">
                        <div className="file-info">
                          <h4>{file.name}</h4>
                          <p>{file.uploadDate}</p>
                          <span className="file-size">{file.size}</span>
                        </div>
                        <button className="file-action-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="5" r="1" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="19" r="1" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Class Notes */}
                <div className="class-notes-section">
                  <div className="section-header">
                    <h3>Class Notes</h3>
                    <button className="edit-btn">Edit Notes</button>
                  </div>
                  <div className="notes-content">
                    <h4>The basic of Mathematics</h4>
                    <p>{classData.classNotes}</p>
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
