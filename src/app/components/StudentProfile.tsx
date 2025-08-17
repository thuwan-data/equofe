'use client';

import { useState } from 'react';

interface Student {
  id: string;
  name: string;
  studentId: string;
  class: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  gender?: string;
  yearGroup?: string;
  nationality?: string;
  inclusion?: string;
}

interface StudentProfileProps {
  student: Student | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit?: (student: Student) => void;
  onDelete?: (studentId: string) => void;
}

export default function StudentProfile({ 
  student, 
  isOpen, 
  onClose, 
  onEdit, 
  onDelete 
}: StudentProfileProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!isOpen || !student) return null;

  const handleEdit = () => {
    if (onEdit) {
      onEdit(student);
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (onDelete) {
      onDelete(student.id);
    }
    setShowDeleteConfirm(false);
    onClose();
  };

  const handleDeactivate = () => {
    console.log('Deactivate account for:', student.name);
  };

  const handleResetPassword = () => {
    console.log('Reset password for:', student.name);
  };

  const handleCreateStudentAccount = () => {
    console.log('Create student account for:', student.name);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="student-profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Student Profile</h2>
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
              <span>{student.name.charAt(0)}</span>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{student.name}</h3>
              <p className="profile-id">{student.studentId}</p>
              <p className="profile-class">{student.class}</p>
            </div>
          </div>

          <div className="profile-sections">
            <div className="profile-section">
              <h4 className="section-title">Personal Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">First Name</span>
                  <span className="detail-value">{student.name.split(' ')[0]}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Last Name</span>
                  <span className="detail-value">{student.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date of Birth</span>
                  <span className="detail-value">{student.dateOfBirth}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Gender</span>
                  <span className="detail-value">{student.gender || 'Not specified'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Year Group</span>
                  <span className="detail-value">{student.yearGroup || 'Not specified'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Nationality</span>
                  <span className="detail-value">{student.nationality || 'Not specified'}</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Educational Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Current Class</span>
                  <span className="detail-value">{student.class}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Student ID</span>
                  <span className="detail-value">{student.studentId}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Inclusion</span>
                  <span className="detail-value">{student.inclusion || 'None'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Academic Year</span>
                  <span className="detail-value">2024-2025</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Contact Details</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Phone Number</span>
                  <span className="detail-value">{student.phoneNumber}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email Address</span>
                  <span className="detail-value">{student.name.toLowerCase().replace(' ', '.')}@student.school.edu</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Address</span>
                  <span className="detail-value">{student.address}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Emergency Contact</span>
                  <span className="detail-value">Parent/Guardian - {student.phoneNumber}</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Guardian Information</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Father's Name</span>
                  <span className="detail-value">John {student.name.split(' ').slice(-1)[0]}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Mother's Name</span>
                  <span className="detail-value">Sarah {student.name.split(' ').slice(-1)[0]}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Guardian Phone</span>
                  <span className="detail-value">{student.phoneNumber}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Guardian Email</span>
                  <span className="detail-value">parents.{student.name.toLowerCase().replace(' ', '.')}@email.com</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h4 className="section-title">Account Credentials</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Username</span>
                  <span className="detail-value">{student.studentId.toLowerCase()}@student.school.edu</span>
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
                <button className="action-link" onClick={handleCreateStudentAccount}>
                  Email Credentials to Student Account
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
              <p>Are you sure you want to delete {student.name}? This action cannot be undone.</p>
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
