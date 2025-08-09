'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to external Express.js authentication
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      {/* Header */}
      <header className="login-header">
        <div className="brand-logo">
          <span className="brand-text">equo</span>
          <span className="brand-tagline">Education for all</span>
        </div>
        <div className="language-selector">
          <span>Language</span>
          <select className="language-dropdown">
            <option>English</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="forgot-password-main">
        {/* Background Decorations */}
        <div className="decoration-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>

        {/* Left Illustration */}
        <div className="left-illustration">
          <div className="plant-container-large">
            <div className="plant-large">
              <div className="plant-pot-large"></div>
              <div className="plant-leaves-large">
                <div className="leaf-large leaf-large-1"></div>
                <div className="leaf-large leaf-large-2"></div>
                <div className="leaf-large leaf-large-3"></div>
                <div className="leaf-large leaf-large-4"></div>
                <div className="leaf-large leaf-large-5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forgot Password Form */}
        <div className="forgot-password-form-container">
          <div className="forgot-password-form-card">
            <Link href="/" className="back-button">
              ← Forgot Password
            </Link>
            
            <div className="forgot-password-content">
              <p className="forgot-password-description">
                Please submit your request to the system administrator. 
                You'll receive an email with instructions to reset/recover 
                your password.
              </p>
              
              <p className="forgot-password-support">
                If you are facing any technical issues, please contact the 
                support team.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="forgot-password-form">
                  <button type="submit" className="submit-forgot-password-button">
                    Submit Forgot Password Request
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <p>Your password reset request has been submitted successfully. Please check your email for further instructions.</p>
                  <Link href="/" className="back-to-login-button">
                    Back to Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="right-illustration">
          <div className="desk-container">
            <div className="desk">
              <div className="desk-surface"></div>
              <div className="desk-leg desk-leg-left"></div>
              <div className="desk-leg desk-leg-right"></div>
              <div className="chair">
                <div className="chair-back"></div>
                <div className="chair-seat"></div>
                <div className="chair-base"></div>
              </div>
              <div className="desk-items">
                <div className="books-stack">
                  <div className="book-stack book-stack-1"></div>
                  <div className="book-stack book-stack-2"></div>
                  <div className="book-stack book-stack-3"></div>
                </div>
                <div className="laptop">
                  <div className="laptop-screen"></div>
                  <div className="laptop-keyboard"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <p>Copyright (c) 2024 Equo | Privacy Policy</p>
      </footer>
    </div>
  );
}
