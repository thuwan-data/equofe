'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AdminLoginFormProps {
  onSubmit?: (email: string, password: string) => void;
  className?: string;
}

export default function AdminLoginForm({ onSubmit, className = '' }: AdminLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email, password);
    } else {
      // Default behavior - TODO: Connect to external Express.js authentication
      console.log('Login attempt:', { email, password });
    }
  };

  return (
    <div className={`login-form-container ${className}`}>
      <div className="login-form-card">
        <h1 className="login-title">Login to your Equo Profile</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="moveed.thanish@buc.pk"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-input password-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <Link href="/pages/admin/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
}
