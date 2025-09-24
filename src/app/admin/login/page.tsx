"use client";

import { useState, useMemo } from "react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => username.trim().length > 0 && password.length > 0 && !loading, [username, password, loading]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = typeof data?.error === "string" ? data.error : "Invalid credentials";
        setError(message);
        setLoading(false);
        return;
      }
      window.location.href = 
        typeof window !== "undefined" && new URLSearchParams(window.location.search).get("redirect")
          ? String(new URLSearchParams(window.location.search).get("redirect"))
          : "/admin";
    } catch {
      setError("Unable to reach authentication service");
      setLoading(false);
    }
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
                <label className="form-label" htmlFor="username">Username</label>
                <input id="username" className="form-input" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input id="password" className="form-input password-input" type={showPassword?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} required />
                  <button type="button" className="password-toggle" onClick={()=>setShowPassword(!showPassword)}>{showPassword?"Hide":"Show"}</button>
                </div>
              </div>
              {error ? (
                <div role="alert" className="auth-error-message">{error}</div>
              ) : null}
              <button className="login-button" type="submit" disabled={!canSubmit}>{loading?"Logging in...":"Login"}</button>
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
