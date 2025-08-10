'use client';

import Link from 'next/link';
import { useState } from 'react';
import AdminHeader from '../../../components/AdminHeader';
import AdminFooter from '../../../components/AdminFooter';
import BackgroundIllustrations from '../../../components/BackgroundIllustrations';

export default function AdminForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to external Express.js authentication
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <AdminHeader />

      <main className="forgot-password-main">
        <BackgroundIllustrations variant="forgot-password" />

        <div className="forgot-password-form-container">
          <div className="forgot-password-form-card">
            <Link href="/pages/admin" className="back-button">
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
                  <Link href="/pages/admin" className="back-to-login-button">
                    Back to Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <AdminFooter />
    </div>
  );
}
