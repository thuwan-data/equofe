'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RegisterPage() {
  const handleStudentRegister = () => {
    window.location.href = '/register/student';
  };

  const handleTeacherRegister = () => {
    window.location.href = '/register/teacher';
  };

  const handleParentRegister = () => {
    window.location.href = '/register/parent';
  };

  const handleLoginRedirect = () => {
    window.location.href = '/';
  };

  return (
    <div className="register-landing-container">
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

          <h1 className="register-title">Join Equo Platform</h1>
          <p className="register-description">
            Create your account to access our inclusive education platform
          </p>

          <div className="register-options">
            <button className="register-option-btn student" onClick={handleStudentRegister}>
              <div className="option-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 20L28 15L16 10L4 15L16 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 18V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28H20C21.0609 28 22.0783 27.5786 22.8284 26.8284C23.5786 26.0783 24 25.0609 24 24V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="option-content">
                <h3>Register as Student</h3>
                <p>Access courses, assignments, and learning materials</p>
              </div>
            </button>

            <button className="register-option-btn teacher" onClick={handleTeacherRegister}>
              <div className="option-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3333 20H10.6667C9.25218 20 7.89563 20.5619 6.89543 21.5621C5.89524 22.5623 5.33333 23.9188 5.33333 25.3333V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="option-content">
                <h3>Register as Teacher</h3>
                <p>Manage classes, students, and educational content</p>
              </div>
            </button>

            <button className="register-option-btn parent" onClick={handleParentRegister}>
              <div className="option-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6667 28V25.3333C22.6667 23.9188 22.1048 22.5623 21.1046 21.5621C20.1044 20.5619 18.7479 20 17.3333 20H6.66667C5.25218 20 3.89563 20.5619 2.89543 21.5621C1.89524 22.5623 1.33333 23.9188 1.33333 25.3333V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05448 4 6.66667 6.38781 6.66667 9.33333C6.66667 12.2789 9.05448 14.6667 12 14.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.3333 28V25.3333C29.3332 24.0948 28.9172 22.8907 28.1519 21.9073C27.3867 20.924 26.3133 20.2128 25.1333 19.8667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.6667 4.86667C21.8511 5.21018 22.9289 5.92184 23.6971 6.90609C24.4654 7.89035 24.8835 9.09709 24.8835 10.3383C24.8835 11.5796 24.4654 12.7863 23.6971 13.7706C22.9289 14.7548 21.8511 15.4665 20.6667 15.81" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="option-content">
                <h3>Register as Parent</h3>
                <p>Monitor your child's progress and communicate with teachers</p>
              </div>
            </button>
          </div>

          <div className="login-redirect">
            <p>Already have an account? 
              <button className="login-link" onClick={handleLoginRedirect}>
                Sign In
              </button>
            </p>
          </div>
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
            Join our inclusive education platform designed for all learners
          </h2>
        </div>
        
        <div className="register-illustration">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8fb58adcda2b4a1ea321e1672f825117%2F80d0adc184cf44e4b8e89700920e9294?format=webp&width=800"
            alt="Education platform illustration"
            className="register-image"
          />
        </div>
      </div>
    </div>
  );
}
