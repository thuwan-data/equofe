'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TeacherRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    phoneNumber: '',
    
    // Professional Information
    teacherId: '',
    experience: '',
    specialization: '',
    qualifications: '',
    previousSchool: '',
    
    // Contact Information
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Verification Documents
    certificationNumber: '',
    universityDegree: '',
    teachingLicense: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Teacher registration data:', formData);
    // Navigate to verification page
    window.location.href = '/register/verify-email';
  };

  const handleBackToOptions = () => {
    window.location.href = '/register';
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2 className="step-title">Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your professional email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a strong password"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="step-content">
            <h2 className="step-title">Professional Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Teacher ID (if available)</label>
                <input
                  type="text"
                  value={formData.teacherId}
                  onChange={(e) => handleInputChange('teacherId', e.target.value)}
                  placeholder="Your current teacher ID"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="16+">16+ years</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Primary Specialization</label>
                <select
                  value={formData.specialization}
                  onChange={(e) => handleInputChange('specialization', e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Select specialization</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Physical Education">Physical Education</option>
                  <option value="Special Education">Special Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nationality</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Your nationality"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  placeholder="Your contact number"
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="step-content">
            <h2 className="step-title">Professional Background</h2>
            <div className="form-grid">
              <div className="form-group full-width">
                <label className="form-label">Educational Qualifications</label>
                <textarea
                  value={formData.qualifications}
                  onChange={(e) => handleInputChange('qualifications', e.target.value)}
                  placeholder="List your degrees, certifications, and qualifications"
                  className="form-textarea"
                  rows={3}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Previous School/Institution</label>
                <input
                  type="text"
                  value={formData.previousSchool}
                  onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                  placeholder="Name of your current/previous workplace"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Teaching License Number</label>
                <input
                  type="text"
                  value={formData.teachingLicense}
                  onChange={(e) => handleInputChange('teachingLicense', e.target.value)}
                  placeholder="Your teaching license number"
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label className="form-label">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Your complete address"
                  className="form-textarea"
                  rows={2}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Emergency Contact Name</label>
                <input
                  type="text"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  placeholder="Emergency contact person"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Emergency Contact Phone</label>
                <input
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                  placeholder="Emergency contact number"
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="step-content">
            <h2 className="step-title">Verification & Review</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Certification Number</label>
                <input
                  type="text"
                  value={formData.certificationNumber}
                  onChange={(e) => handleInputChange('certificationNumber', e.target.value)}
                  placeholder="Professional certification number"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">University Degree</label>
                <input
                  type="text"
                  value={formData.universityDegree}
                  onChange={(e) => handleInputChange('universityDegree', e.target.value)}
                  placeholder="Your highest degree"
                  className="form-input"
                />
              </div>
              <div className="review-section">
                <h3>Review Your Information</h3>
                <div className="review-item">
                  <strong>Name:</strong> {formData.firstName} {formData.lastName}
                </div>
                <div className="review-item">
                  <strong>Email:</strong> {formData.email}
                </div>
                <div className="review-item">
                  <strong>Specialization:</strong> {formData.specialization}
                </div>
                <div className="review-item">
                  <strong>Experience:</strong> {formData.experience}
                </div>
                <div className="review-item">
                  <strong>Phone:</strong> {formData.phoneNumber}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="register-container">
      <div className="register-left-section">
        <div className="language-selector">
          <span>Language: English</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="register-form-container">
          <div className="brand-logo">
            <Image
              src="/logo-equo.svg"
              alt="Equo - Inclusion for all"
              width={120}
              height={40}
              priority
            />
          </div>

          <div className="register-header">
            <button className="back-button" onClick={handleBackToOptions}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 className="register-title">Teacher Registration</h1>
          </div>

          <div className="progress-bar">
            <div className="progress-step">
              <div className={`step-number ${currentStep >= 1 ? 'active' : ''}`}>1</div>
              <span className="step-label">Personal</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className={`step-number ${currentStep >= 2 ? 'active' : ''}`}>2</div>
              <span className="step-label">Professional</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className={`step-number ${currentStep >= 3 ? 'active' : ''}`}>3</div>
              <span className="step-label">Background</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className={`step-number ${currentStep >= 4 ? 'active' : ''}`}>4</div>
              <span className="step-label">Verification</span>
            </div>
          </div>

          <form className="register-form">
            {renderStepContent()}

            <div className="form-actions">
              {currentStep > 1 && (
                <button type="button" className="btn-secondary" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button type="button" className="btn-primary" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="button" className="btn-primary" onClick={handleSubmit}>
                  Complete Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="register-right-section">
        <div className="feature-card">
          <div className="feature-icons">
            <div className="feature-icon graduation-cap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 25L35 18.75L20 12.5L5 18.75L20 25Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 22.5V30C10 31.3261 10.5268 32.5979 11.4645 33.5355C12.4021 34.4732 13.6739 35 15 35H25C26.3261 35 27.5979 34.4732 28.5355 33.5355C29.4732 32.5979 30 31.3261 30 30V22.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="feature-icon tablet">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.5" y="5" width="25" height="30" rx="2.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 30H22.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h2 className="feature-title">
            Join our community of dedicated educators making a difference
          </h2>
        </div>
        
        <div className="register-illustration">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8fb58adcda2b4a1ea321e1672f825117%2F80d0adc184cf44e4b8e89700920e9294?format=webp&width=800"
            alt="Teacher registration illustration"
            className="register-image"
          />
        </div>
      </div>
    </div>
  );
}
