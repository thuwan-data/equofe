'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TeacherPasswordSuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Redirect to login page
          window.location.href = '/teachers/login';
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGoToLogin = () => {
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

          <div className="success-container">
            <div className="success-modal">
              <div className="success-icon-large">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#4CAF50"/>
                  <path d="M25 40L35 50L55 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h2 className="success-title">Your password has been successfully updated.</h2>
              <p className="success-description">
                You will now be redirected to the Login screen.
              </p>

              <div className="redirect-info">
                <p className="redirect-text">
                  Redirecting in <span className="countdown-number">{countdown}</span> seconds...
                </p>
              </div>

              <button 
                type="button" 
                className="auth-submit-btn"
                onClick={handleGoToLogin}
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F8fb58adcda2b4a1ea321e1672f825117%2F1019ceb1af3d4bf0afecb4d455955167?format=webp&width=800"
          alt="Success background"
          className="auth-background-image"
        />
        <div className="auth-overlay-content">
          <div className="feature-icons">
            <div className="feature-icon graduation-cap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 25L35 18.75L20 12.5L5 18.75L20 25Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 22.5V30C10 31.3261 10.5268 32.5979 11.4645 33.5355C12.4021 34.4732 13.6739 35 15 35H25C26.3261 35 27-5979 34.4732 28.5355 33.5355C29.4732 32.5979 30 31.3261 30 30V22.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
