'use client';

import { useState } from 'react';

interface Student {
  id?: string;
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

interface AddEditStudentProps {
  student?: Student | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (student: Student) => void;
}

export default function AddEditStudent({ 
  student, 
  isOpen, 
  onClose, 
  onSave 
}: AddEditStudentProps) {
  const [formData, setFormData] = useState({
    firstName: student?.name.split(' ')[0] || '',
    lastName: student?.name.split(' ').slice(1).join(' ') || '',
    dateOfBirth: student?.dateOfBirth || '',
    gender: student?.gender || 'Male',
    yearGroup: student?.yearGroup || 'Year 7',
    nationality: student?.nationality || 'American',
    inclusion: student?.inclusion || 'None',
    phoneNumber: student?.phoneNumber || '+1 555 000 0000',
    emailAddress: '',
    address: student?.address || '',
    fatherName: '',
    motherName: '',
    guardianPhone: student?.phoneNumber || '+1 555 000 0000',
    guardianEmail: '',
    previousSchool: '',
    medicalConditions: 'None',
    allergies: 'None',
    emergencyContactName: '',
    emergencyContactPhone: ''
  });

  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const newStudent: Student = {
      id: student?.id || Date.now().toString(),
      name: `${formData.firstName} ${formData.lastName}`,
      studentId: student?.studentId || `STU${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      class: formData.yearGroup,
      dateOfBirth: formData.dateOfBirth,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      gender: formData.gender,
      yearGroup: formData.yearGroup,
      nationality: formData.nationality,
      inclusion: formData.inclusion
    };
    
    onSave(newStudent);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="add-edit-student-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {student ? 'Edit Student' : 'Add New Student'}
          </h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-content">
          <div className="form-sections">
            {/* Personal Information */}
            <div className="form-section">
              <h3 className="section-title">Personal Information</h3>
              <div className="form-grid">
                <div className="form-group photo-upload">
                  <label className="form-label">Profile Photo</label>
                  <div className="photo-upload-area">
                    {uploadedPhoto ? (
                      <img src={uploadedPhoto} alt="Profile" className="uploaded-photo" />
                    ) : (
                      <div className="upload-placeholder">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>No Photo</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="photo-input"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="upload-button">
                      Upload Photo
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Emma"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Watson"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="form-select"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Nationality</label>
                  <select
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                    className="form-select"
                  >
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Canadian">Canadian</option>
                    <option value="Australian">Australian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="form-section">
              <h3 className="section-title">Academic Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Year Group</label>
                  <select
                    value={formData.yearGroup}
                    onChange={(e) => handleInputChange('yearGroup', e.target.value)}
                    className="form-select"
                  >
                    <option value="Year 6">Year 6</option>
                    <option value="Year 7">Year 7</option>
                    <option value="Year 8">Year 8</option>
                    <option value="Year 9">Year 9</option>
                    <option value="Year 10">Year 10</option>
                    <option value="Year 11">Year 11</option>
                    <option value="Year 12">Year 12</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Inclusion</label>
                  <select
                    value={formData.inclusion}
                    onChange={(e) => handleInputChange('inclusion', e.target.value)}
                    className="form-select"
                  >
                    <option value="None">None</option>
                    <option value="Special Needs">Special Needs</option>
                    <option value="Gifted Program">Gifted Program</option>
                    <option value="ESL Support">ESL Support</option>
                    <option value="Learning Support">Learning Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Previous School</label>
                  <input
                    type="text"
                    value={formData.previousSchool}
                    onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                    placeholder="Previous School Name"
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section">
              <h3 className="section-title">Contact Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="+1 555 123 4567"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    placeholder="student@school.edu"
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Address</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="123 Main Street, City, State, ZIP"
                    className="form-textarea"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Guardian Information */}
            <div className="form-section">
              <h3 className="section-title">Guardian Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Father's Name</label>
                  <input
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => handleInputChange('fatherName', e.target.value)}
                    placeholder="Father's Full Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mother's Name</label>
                  <input
                    type="text"
                    value={formData.motherName}
                    onChange={(e) => handleInputChange('motherName', e.target.value)}
                    placeholder="Mother's Full Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Guardian Phone</label>
                  <input
                    type="tel"
                    value={formData.guardianPhone}
                    onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                    placeholder="+1 555 000 0000"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Guardian Email</label>
                  <input
                    type="email"
                    value={formData.guardianEmail}
                    onChange={(e) => handleInputChange('guardianEmail', e.target.value)}
                    placeholder="guardian@email.com"
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="form-section">
              <h3 className="section-title">Medical Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Medical Conditions</label>
                  <textarea
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    placeholder="None or specify medical conditions"
                    className="form-textarea"
                    rows={2}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Allergies</label>
                  <textarea
                    value={formData.allergies}
                    onChange={(e) => handleInputChange('allergies', e.target.value)}
                    placeholder="None or specify allergies"
                    className="form-textarea"
                    rows={2}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Emergency Contact Name</label>
                  <input
                    type="text"
                    value={formData.emergencyContactName}
                    onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                    placeholder="Emergency Contact Full Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Emergency Contact Phone</label>
                  <input
                    type="tel"
                    value={formData.emergencyContactPhone}
                    onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                    placeholder="+1 555 999 8888"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button className="save-details-btn" onClick={handleSave}>
              Save Details
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
