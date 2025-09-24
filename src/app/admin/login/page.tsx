'use client';

import { useState } from 'react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="brand-logo">
          <span className="brand-text">Equo</span>
          <span className="brand-tagline">Inclusion for all</span>
        </div>
      </header>
      <main className="login-main">
        <div className="login-form-container">
          <div className="login-form-card">
            <h1 className="login-title">Admin Login</h1>
            <form className="login-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input id="email" className="form-input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input id="password" className="form-input password-input" type={showPassword?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} required />
                  <button type="button" className="password-toggle" onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide':'Show'}</button>
                </div>
              </div>
              <button className="login-button" type="submit" disabled={loading}>{loading?'Logging in...':'Login'}</button>
              <a className="forgot-password-link" href="/admin/forgot-password">Forgot Password?</a>
              <div className="login-footer">Don't have an account? <a className="forgot-password-link" href="/admin/register">Register here</a></div>
            </form>
          </div>
        </div>
      </main>
      <footer className="login-footer">© {new Date().getFullYear()} Equo</footer>
    </div>
  );
}
