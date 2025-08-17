'use client';

import { useState } from 'react';

interface Teacher {
  id: string;
  name: string;
  staffId: string;
  standard: string;
  subjects: string[];
}

interface TeacherProfileProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit?: (teacher: Teacher) => void;
  onDelete?: (teacherId: string) => void;
}

export default function TeacherProfile({ 
  teacher, 
  isOpen, 
  onClose, 
  onEdit, 
  onDelete 
}: TeacherProfileProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!isOpen || !teacher) return null;

  const handleEdit = () => {
    if (onEdit) {
      onEdit(teacher);
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (onDelete) {
      onDelete(teacher.id);
    }
    setShowDeleteConfirm(false);
    onClose();
  };

  const handleDeactivate = () => {
    console.log('Deactivate account for:', teacher.name);
  };

  const handleResetPassword = () => {
    console.log('Reset password for:', teacher.name);
  };

  const handleCreateTeacherAccount = () => {
    console.log('Create teacher account for:', teacher.name);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="teacher-profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Teacher Profile</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-content">
          <div className="profile-header">
            <div className="profile-avatar">
              <span>{teacher.name.charAt(0)}</span>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{teacher.name}</h3>
              <p className="profile-id">{teacher.staffId}</p>
              <p className="profile-standard">{teacher.standard}</p>
            </div>
          </div>

          <div className="profile-sections">
            <div className="profile-section">
              <h4 className="section-title">Personal Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">First Name</span>
                  <span className="detail-value">{teacher.name.split(' ')[0]}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Last Name</span>
                  <span className="detail-value">{teacher.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date of Birth</span>
                  <span className="detail-value">09/12/1974</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Gender</span>
                  <span className="detail-value">Male</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Country of Birth</span>
                  <span className="detail-value">United States</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Country of Residence</span>
                  <span className="detail-value">United States</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Educational Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Languages You Speak</span>
                  <span className="detail-value">English, Spanish, Portuguese</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Your Specialization</span>
                  <span className="detail-value">Elementary</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Allocation Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Classes & Subject Name</span>
                  <div className="subjects-list">
                    {teacher.subjects.map((subject, index) => (
                      <span key={index} className="subject-badge">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Contact Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Phone Number</span>
                  <span className="detail-value">+1 234 567 890</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email Address</span>
                  <span className="detail-value">theLincoln@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Address</span>
                  <span className="detail-value">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Country</span>
                  <span className="detail-value">United States</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Account Credentials</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Username</span>
                  <span className="detail-value">lincolnbergsonpleasant@thinca.edu.us</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Password</span>
                  <span className="detail-value">••••••••••••</span>
                </div>
              </div>
              <div className="account-actions">
                <button className="action-link" onClick={handleResetPassword}>
                  Reset Account Password
                </button>
                <button className="action-link" onClick={handleCreateTeacherAccount}>
                  Email Credentials to Teacher Personal Account
                </button>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button className="edit-details-btn" onClick={handleEdit}>
              Edit Details
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button className="deactivate-btn" onClick={handleDeactivate}>
              Deactivate Account
            </button>
          </div>
        </div>

        {showDeleteConfirm && (
          <div className="confirm-overlay">
            <div className="confirm-modal">
              <h3>Confirm Delete</h3>
              <p>Are you sure you want to delete {teacher.name}? This action cannot be undone.</p>
              <div className="confirm-actions">
                <button className="cancel-btn" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </button>
                <button className="confirm-delete-btn" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
