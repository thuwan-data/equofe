'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TeacherRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Registration
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Step 2: Personal Information
    languageSpeak: 'English',
    languageLevel: 'Native',
    additionalLanguages: [] as string[],
    gender: 'Male',
    dateOfBirth: '',
    countryOfBirth: 'United States',
    countryOfResidence: 'Select',
    // Step 3: Profile Photo
    profilePhoto: null as File | null,
    // Step 4: Education
    specializedArea: 'Elementary',
    yearGroups: 'Early Years 1, Early Years 2',
    subjects: 'Mathematics, English'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === 1) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      setCurrentStep(3);
      return;
    }

    if (currentStep === 3) {
      setCurrentStep(4);
      return;
    }

    if (currentStep === 4) {
      setCurrentStep(5);
      return;
    }

    if (currentStep === 5) {
      setIsLoading(true);

      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Teacher registration complete:', formData);
      setIsLoading(false);

      // Redirect to teacher dashboard after successful registration
      window.location.href = '/teachers/dashboard';
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addLanguage = () => {
    setFormData(prev => ({
      ...prev,
      additionalLanguages: [...prev.additionalLanguages, '']
    }));
  };

  const handleBackToLogin = () => {
    window.location.href = '/teachers/login';
  };

  return (
    <div className="teacher-auth-container">
      <div className="auth-left-section">
        <div className="language-selector">
          <span>Language: English</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="auth-form-container">
          <div className="brand-logo">
            <Image
              src="/logo-equo.svg"
              alt="Equo - Inclusion for all"
              width={120}
              height={40}
              priority
            />
          </div>

          <div className="auth-header">
            <button
              type="button"
              className="back-button"
              onClick={currentStep === 1 ? handleBackToLogin : handlePrevStep}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 className="auth-title">
              {currentStep === 1 && 'Register to Get Started'}
              {currentStep === 2 && 'Personal Information'}
              {currentStep === 3 && 'Profile Photo'}
              {currentStep === 4 && 'Education'}
              {currentStep === 5 && 'Your Profile is complete.'}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {currentStep === 1 && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Moseed"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Shahid"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="moseed.shahid@schoolmail.com"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Password"
                      className="form-input"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L17.94 17.94Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 1l22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19L9.9 4.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Re-Enter Password"
                      className="form-input"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L17.94 17.94Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 1l22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19L9.9 4.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn register-btn"
                  disabled={isLoading}
                >
                  Register
                </button>

                <div className="auth-footer">
                  <span>Already have an account? </span>
                  <button
                    type="button"
                    className="auth-link"
                    onClick={handleBackToLogin}
                  >
                    Login here
                  </button>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="languageSpeak" className="form-label">Language You Speak</label>
                    <select
                      id="languageSpeak"
                      value={formData.languageSpeak}
                      onChange={(e) => handleInputChange('languageSpeak', e.target.value)}
                      className="form-input form-select"
                      required
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Chinese">Chinese</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="languageLevel" className="form-label">Level</label>
                    <select
                      id="languageLevel"
                      value={formData.languageLevel}
                      onChange={(e) => handleInputChange('languageLevel', e.target.value)}
                      className="form-input form-select"
                      required
                    >
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Beginner">Beginner</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  className="add-language-btn"
                  onClick={addLanguage}
                >
                  + Add another language
                </button>

                <div className="form-group">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="form-input form-select"
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="form-input"
                    placeholder="DD/MM/YYYY"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="countryOfBirth" className="form-label">Country of Birth</label>
                  <input
                    type="text"
                    id="countryOfBirth"
                    value={formData.countryOfBirth}
                    onChange={(e) => handleInputChange('countryOfBirth', e.target.value)}
                    placeholder="United States"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="countryOfResidence" className="form-label">Country of Residence</label>
                  <select
                    id="countryOfResidence"
                    value={formData.countryOfResidence}
                    onChange={(e) => handleInputChange('countryOfResidence', e.target.value)}
                    className="form-input form-select"
                    required
                  >
                    <option value="Select">Select</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn continue-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save & Continue'}
                </button>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="profile-photo-section">
                  <div className="photo-upload-area">
                    <div className="upload-placeholder">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 8H12C10.8954 8 10 8.89543 10 10V38C10 39.1046 10.8954 40 12 40H36C37.1046 40 38 39.1046 38 38V18L28 8Z" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 8V18H38" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30 26L24 32L18 26" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M24 32V20" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>JPG, PNG</p>
                      <p>Max 5 mb size</p>
                    </div>
                  </div>

                  <div className="user-info">
                    <h3>{formData.firstName} S <img src="https://flagcdn.com/w20/gb.png" alt="UK Flag" /></h3>
                    <p>Age: 31</p>
                    <p>Spoken English (Native)</p>
                  </div>

                  <button type="button" className="upload-photo-btn">
                    Upload Photo
                  </button>

                  <div className="photo-guidelines">
                    <h4>What you photo needs</h4>
                    <div className="guidelines-list">
                      <div className="guideline-item">
                        <span className="checkmark">✓</span>
                        <span>You should be facing forward</span>
                      </div>
                      <div className="guideline-item">
                        <span className="checkmark">✓</span>
                        <span>Frame your head and shoulders</span>
                      </div>
                      <div className="guideline-item">
                        <span className="checkmark">✓</span>
                        <span>You should be centered and upright</span>
                      </div>
                      <div className="guideline-item">
                        <span className="checkmark">✓</span>
                        <span>You should be the only person in the photo</span>
                      </div>
                      <div className="guideline-item">
                        <span className="checkmark">✓</span>
                        <span>Use a color photo with high resolution and no filters</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn continue-btn"
                  disabled={isLoading}
                >
                  Save & Continue
                </button>
              </>
            )}

            {currentStep === 4 && (
              <>
                <div className="form-group">
                  <label htmlFor="specializedArea" className="form-label">Which area do you specialize in?</label>
                  <select
                    id="specializedArea"
                    value={formData.specializedArea}
                    onChange={(e) => handleInputChange('specializedArea', e.target.value)}
                    className="form-input form-select"
                    required
                  >
                    <option value="Elementary">Elementary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="High School">High School</option>
                    <option value="Special Education">Special Education</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="yearGroups" className="form-label">What year groups do you teach?</label>
                  <select
                    id="yearGroups"
                    value={formData.yearGroups}
                    onChange={(e) => handleInputChange('yearGroups', e.target.value)}
                    className="form-input form-select"
                    required
                  >
                    <option value="Early Years 1, Early Years 2">Early Years 1, Early Years 2</option>
                    <option value="Year 1, Year 2">Year 1, Year 2</option>
                    <option value="Year 3, Year 4">Year 3, Year 4</option>
                    <option value="Year 5, Year 6">Year 5, Year 6</option>
                    <option value="Year 7, Year 8">Year 7, Year 8</option>
                    <option value="Year 9, Year 10">Year 9, Year 10</option>
                    <option value="Year 11, Year 12">Year 11, Year 12</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subjects" className="form-label">What subjects you teach?</label>
                  <select
                    id="subjects"
                    value={formData.subjects}
                    onChange={(e) => handleInputChange('subjects', e.target.value)}
                    className="form-input form-select"
                    required
                  >
                    <option value="Mathematics, English">Mathematics, English</option>
                    <option value="Science, Mathematics">Science, Mathematics</option>
                    <option value="English, History">English, History</option>
                    <option value="Arts, Music">Arts, Music</option>
                    <option value="Physical Education">Physical Education</option>
                    <option value="Special Education">Special Education</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn continue-btn"
                  disabled={isLoading}
                >
                  Save & Continue
                </button>
              </>
            )}

            {currentStep === 5 && (
              <>
                <div className="completion-section">
                  <div className="success-icon">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="60" fill="#A2EBC1"/>
                      <path d="M40 60L50 70L80 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="completion-message">
                    <p>Redirecting you to your home page</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn continue-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Setting up...' : 'Complete Registration'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="auth-right-section register-right">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F8fb58adcda2b4a1ea321e1672f825117%2F1019ceb1af3d4bf0afecb4d455955167?format=webp&width=800"
          alt="Registration background"
          className="auth-background-image"
        />
        <div className="auth-overlay-content">
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
            This section is intentionally created to add the features of the platform and system
          </h2>
        </div>
      </div>
    </div>
  );
}
