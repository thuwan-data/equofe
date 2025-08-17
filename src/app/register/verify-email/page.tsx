'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function VerifyEmailPage() {
  const [isEmailSent, setIsEmailSent] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResendEmail = async () => {
    if (!canResend) return;
    
    setCanResend(false);
    setCountdown(60);
    
    // Simulate resending email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Verification email resent');
    
    // Restart countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleBackToRegister = () => {
    window.location.href = '/register';
  };

  const handleGoToLogin = () => {
    window.location.href = '/';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
            <button className="back-button" onClick={handleBackToRegister}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 className="register-title">Verify Your Email</h1>
          </div>

          <div className="verification-content">
            <div className="verification-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#E3F2FD"/>
                <path d="M25 40L40 50L55 30" stroke="#288474" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 25H60C62.2091 25 64 26.7909 64 29V51C64 53.2091 62.2091 55 60 55H20C17.7909 55 16 53.2091 16 51V29C16 26.7909 17.7909 25 20 25Z" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M64 29L40 42L16 29" stroke="#288474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h2 className="verification-title">Check Your Email</h2>
            <p className="verification-description">
              We've sent a verification link to your email address. Please click the link in the email to verify your account and complete your registration.
            </p>

            <div className="verification-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">Check your email inbox</div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">Click the verification link</div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">Complete your registration</div>
              </div>
            </div>

            <div className="resend-section">
              <p className="resend-text">
                Didn't receive the email? {canResend ? (
                  <button type="button" className="resend-link" onClick={handleResendEmail}>
                    Resend verification email
                  </button>
                ) : (
                  <span>
                    You can resend in <span className="countdown-text">{formatTime(countdown)}</span>
                  </span>
                )}
              </p>
            </div>

            <div className="verification-actions">
              <button className="btn-primary" onClick={handleGoToLogin}>
                Go to Login
              </button>
              <button className="btn-secondary" onClick={handleBackToRegister}>
                Back to Registration
              </button>
            </div>

            <div className="help-section">
              <p className="help-text">
                Having trouble? Check your spam folder or contact our support team for assistance.
              </p>
            </div>
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
            Almost there! Verify your email to join our learning community
          </h2>
        </div>
        
        <div className="register-illustration">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8fb58adcda2b4a1ea321e1672f825117%2F80d0adc184cf44e4b8e89700920e9294?format=webp&width=800"
            alt="Email verification illustration"
            className="register-image"
          />
        </div>
      </div>
    </div>
  );
}
