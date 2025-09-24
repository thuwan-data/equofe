'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ResourceLibraryPage() {
  const [activeTab, setActiveTab] = useState('resource-library');
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [newResource, setNewResource] = useState({
    class: '',
    tier: '',
    file: null as File | null
  });

  const handleNavigation = (itemId: string) => {
    setActiveTab(itemId);
    if (itemId === 'dashboard') {
      window.location.href = '/teachers/dashboard';
    } else if (itemId === 'timetable') {
      window.location.href = '/teachers/timetable';
    } else if (itemId === 'assigned-classes') {
      window.location.href = '/teachers/assigned-classes';
    } else if (itemId === 'passwords') {
      window.location.href = '/teachers/passwords';
    }
    // Resource library stays on current page
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewResource(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleSubmitResource = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle resource submission logic here
    console.log('Submitting resource:', newResource);
    setShowAddResourceModal(false);
    setNewResource({ class: '', tier: '', file: null });
  };

  const uploadedFiles = [
    {
      id: 1,
      name: 'The Basis of Mathematics',
      size: '1.2 KB',
      type: 'PDF'
    },
    {
      id: 2,
      name: 'The Basis of Mathematics',
      size: '1.2 KB',
      type: 'PDF'
    },
    {
      id: 3,
      name: 'The Basis of Mathematics',
      size: '1.2 KB',
      type: 'PDF'
    }
  ];

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
            <h1 className="greeting">Class Details</h1>
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
          <div className="class-details-container">
            {/* Left Column - Recording */}
            <div className="recording-section">
              <div className="recording-header">
                <h2>Recording</h2>
              </div>
              
              <div className="recording-player">
                <div className="recording-thumbnail">
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)"/>
                      <polygon points="25,20 25,40 40,30" fill="#288474"/>
                    </svg>
                  </div>
                </div>
                <div className="recording-info">
                  <h3>2MTH - 23rd August 2024</h3>
                  <button className="view-btn">View</button>
                </div>
              </div>
            </div>

            {/* Right Column - Uploaded Files */}
            <div className="uploaded-files-section">
              <div className="files-header">
                <h2>Uploaded Files</h2>
                <button 
                  className="upload-resources-btn"
                  onClick={() => setShowAddResourceModal(true)}
                >
                  + Upload Resources
                </button>
              </div>

              <div className="files-list">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="file-item">
                    <div className="file-info">
                      <div className="file-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="file-details">
                        <h4>{file.name}</h4>
                        <p>{file.size}</p>
                      </div>
                    </div>
                    <div className="file-actions">
                      <button className="download-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
                          <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Class Notes Section */}
              <div className="class-notes-section">
                <div className="notes-header">
                  <h3>Class Notes</h3>
                  <button className="edit-notes-btn">Edit Notes</button>
                </div>
                <div className="notes-content">
                  <p>
                    At the beginning of this lesson I checked that students could rewrite 
                    inverse operations of all four, all Students did the questions correctly 
                    then progressed onto looking at LCM.CM is used as a way of finding the
                    smallest number that is a common multiple of two numbers. We
                    computed it was 6 students in Maths lesson so I asked each
                    student to give one example of multiple.
                  </p>
                  <p>
                    Students were confident with using concrete resources to find
                    multiples of 2, 5, 10, 3, 4 etc. I asked Charlie, Matt, Emily, Emma
                    to explain LCM. Students were engaging with verbal responses
                    and used the correct mathematical vocabulary. I then moved on to
                    Abstract: Students were confident using the method of prime
                    factorization to find LCM of two numbers. For this lesson and Reiko didn't
                    know how to work out some of the prime factors so I provided more
                    guidance by working on 1 to 1 basis. Charlotte was really quick
                    at prime factorisation so I gave some algebraic extension for LCM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add New Resource Modal */}
      {showAddResourceModal && (
        <div className="modal-overlay">
          <div className="modal-content add-resource-modal">
            <div className="modal-header">
              <h3>Add New Resource</h3>
              <button 
                className="close-modal-btn"
                onClick={() => setShowAddResourceModal(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitResource} className="add-resource-form">
              <div className="form-group">
                <label htmlFor="class-select">Select Class</label>
                <select 
                  id="class-select"
                  value={newResource.class}
                  onChange={(e) => setNewResource(prev => ({ ...prev, class: e.target.value }))}
                  required
                >
                  <option value="">Select</option>
                  <option value="mathematics-7mh12">Mathematics - 7MH12</option>
                  <option value="physics-9phy2">Physics - 9PHY2</option>
                  <option value="english-sen21">English - SEN21</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="tier-select">Select Tier</label>
                <select 
                  id="tier-select"
                  value={newResource.tier}
                  onChange={(e) => setNewResource(prev => ({ ...prev, tier: e.target.value }))}
                  required
                >
                  <option value="">Select Tier</option>
                  <option value="high-tier">High Tier</option>
                  <option value="medium-tier">Medium Tier</option>
                  <option value="low-tier">Low Tier</option>
                </select>
              </div>

              <div className="form-group file-upload-group">
                <label htmlFor="file-upload">Upload Media</label>
                <div className="file-upload-area">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mp3"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="file-upload" className="file-upload-label">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="17,8 12,3 7,8" stroke="currentColor" strokeWidth="2"/>
                      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <p>Upload Media</p>
                    <span>(Document, Video, Audio etc.)</span>
                  </label>
                  {newResource.file && (
                    <div className="selected-file">
                      <p>Selected: {newResource.file.name}</p>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="upload-file-btn">
                Upload File
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
