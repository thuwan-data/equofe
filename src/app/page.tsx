'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to external Express.js authentication
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
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
      <main className="login-main">
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
          <div className="bookshelf-container">
            <div className="bookshelf">
              <div className="shelf shelf-top"></div>
              <div className="shelf shelf-middle"></div>
              <div className="shelf shelf-bottom"></div>
              <div className="books books-top">
                <div className="book book-red"></div>
                <div className="book book-blue"></div>
                <div className="book book-green"></div>
              </div>
              <div className="books books-middle">
                <div className="book book-orange"></div>
                <div className="book book-purple"></div>
              </div>
              <div className="books books-bottom">
                <div className="book book-yellow"></div>
                <div className="book book-pink"></div>
                <div className="book book-cyan"></div>
              </div>
            </div>
          </div>
          <div className="plant-container">
            <div className="plant">
              <div className="plant-pot"></div>
              <div className="plant-leaves">
                <div className="leaf leaf-1"></div>
                <div className="leaf leaf-2"></div>
                <div className="leaf leaf-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="login-form-container">
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

              <Link href="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
            </form>
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
