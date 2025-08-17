'use client';

import { useState } from 'react';

interface Teacher {
  id: string;
  name: string;
  staffId: string;
  standard: string;
  subjects: string[];
}

interface AddEditTeacherProps {
  teacher?: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (teacher: Teacher) => void;
}

export default function AddEditTeacher({ 
  teacher, 
  isOpen, 
  onClose, 
  onSave 
}: AddEditTeacherProps) {
  const [formData, setFormData] = useState({
    firstName: teacher?.name.split(' ')[0] || '',
    lastName: teacher?.name.split(' ').slice(1).join(' ') || '',
    dateOfBirth: '',
    gender: 'Male',
    countryOfBirth: 'United States',
    countryOfResidence: 'United States',
    phoneNumber: '+1 234 567 890',
    emailAddress: '',
    address: 'Lorem ipsum dolor sit amet elit porttitor sed ut mundo',
    languageSpoken: 'Native',
    nativeLanguage: 'English',
    areaOfSpecialization: 'Elementary',
    yearGroup: 'Elementary',
    subjectGroup1: 'Mathematics',
    subjectGroup2: '',
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
    const newTeacher: Teacher = {
      id: teacher?.id || Date.now().toString(),
      name: `${formData.firstName} ${formData.lastName}`,
      staffId: teacher?.staffId || `STM${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      standard: 'Standard II',
      subjects: [formData.subjectGroup1, formData.subjectGroup2].filter(Boolean)
    };
    
    onSave(newTeacher);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="add-edit-teacher-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {teacher ? 'Edit Teacher' : 'Add New Teacher'}
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
                    placeholder="Mosad"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Shahid"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <select
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="form-select"
                  >
                    <option value="">DD/MM/YYYY</option>
                    <option value="01/01/1990">01/01/1990</option>
                    <option value="15/06/1985">15/06/1985</option>
                  </select>
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
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Country of Birth</label>
                  <select
                    value={formData.countryOfBirth}
                    onChange={(e) => handleInputChange('countryOfBirth', e.target.value)}
                    className="form-select"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Country of Residence</label>
                  <select
                    value={formData.countryOfResidence}
                    onChange={(e) => handleInputChange('countryOfResidence', e.target.value)}
                    className="form-select"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Educational Information */}
            <div className="form-section">
              <h3 className="section-title">Educational Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Language You Speak</label>
                  <div className="language-input">
                    <select
                      value={formData.languageSpoken}
                      onChange={(e) => handleInputChange('languageSpoken', e.target.value)}
                      className="form-select"
                    >
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Basic">Basic</option>
                    </select>
                    <select
                      value={formData.nativeLanguage}
                      onChange={(e) => handleInputChange('nativeLanguage', e.target.value)}
                      className="form-select"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                  </div>
                  <button type="button" className="add-language-btn">
                    + Add another language
                  </button>
                </div>

                <div className="form-group">
                  <label className="form-label">Area of Specialization</label>
                  <select
                    value={formData.areaOfSpecialization}
                    onChange={(e) => handleInputChange('areaOfSpecialization', e.target.value)}
                    className="form-select"
                  >
                    <option value="Elementary">Elementary</option>
                    <option value="Middle School">Middle School</option>
                    <option value="High School">High School</option>
                  </select>
                  <button type="button" className="add-specialization-btn">
                    + Add another specialization
                  </button>
                </div>
              </div>
            </div>

            {/* Allocation */}
            <div className="form-section">
              <h3 className="section-title">Allocation</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Assign Year Group</label>
                  <select
                    value={formData.yearGroup}
                    onChange={(e) => handleInputChange('yearGroup', e.target.value)}
                    className="form-select"
                  >
                    <option value="Elementary">Elementary</option>
                    <option value="Middle School">Middle School</option>
                    <option value="High School">High School</option>
                  </select>
                  <button type="button" className="add-year-group-btn">
                    + Add another year group
                  </button>
                </div>

                <div className="form-group">
                  <label className="form-label">Assign Subject</label>
                  <select
                    value={formData.subjectGroup1}
                    onChange={(e) => handleInputChange('subjectGroup1', e.target.value)}
                    className="form-select"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English">English</option>
                  </select>
                  <button type="button" className="add-subject-btn">
                    + Add another year group
                  </button>
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
                    placeholder="+1 234 567 890"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    placeholder="something@anything.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Address</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Lorem ipsum dolor sit amet elit porttitor sed ut mundo"
                    className="form-textarea"
                    rows={3}
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
