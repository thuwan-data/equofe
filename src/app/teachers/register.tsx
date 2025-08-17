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
