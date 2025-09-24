'use client';

import { useState } from 'react';

export default function StudentForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <div className="forgot-password-container">
      <main className="forgot-password-main">
        <div className="forgot-password-form-container">
          <div className="forgot-password-form-card">
            {!sent ? (
              <>
                <a className="back-button" href="/students/login">← Back</a>
                <h1 className="login-title">Reset your password</h1>
                <p className="forgot-password-description">Enter your student email to receive the password reset link.</p>
                <form className="forgot-password-form" onSubmit={onSubmit}>
                  <div className="form-group form-fullwidth">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input id="email" className="form-input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                  </div>
                  <button className="submit-forgot-password-button" type="submit">Send reset link</button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <h2 className="login-title">Check your email</h2>
                <p>We have sent a password reset link to {email}.</p>
                <a className="back-to-login-button" href="/students/login">Back to login</a>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="login-footer">© {new Date().getFullYear()} Equo</footer>
    </div>
  );
}
