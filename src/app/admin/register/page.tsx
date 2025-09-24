'use client';

import { useState } from 'react';

export default function AdminRegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
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
            <h1 className="login-title">Admin Registration</h1>
            <form className="login-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input id="name" className="form-input" value={name} onChange={(e)=>setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input id="email" type="email" className="form-input" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input id="password" type="password" className="form-input" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="confirm">Confirm Password</label>
                <input id="confirm" type="password" className="form-input" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required />
              </div>
              <button className="login-button" type="submit" disabled={loading}>{loading?'Creating...':'Create account'}</button>
              <div className="login-footer">Already have an account? <a className="forgot-password-link" href="/admin/login">Login</a></div>
            </form>
          </div>
        </div>
      </main>
      <footer className="login-footer">© {new Date().getFullYear()} Equo</footer>
    </div>
  );
}
