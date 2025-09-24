'use client';

import Image from 'next/image';

export default function HomePage() {
  const goTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="brand-logo">
          <Image src="/logo-equo.svg" alt="Equo" width={120} height={40} />
          {/* <span className="brand-tagline">Inclusion for all</span> */}
        </div>
        <div className="language-selector">
          <span>Language: English</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </header>

      <main className="login-main">
        <div className="login-form-container">
          <div className="login-form-card">
            <h1 className="login-title">Choose your portal</h1>
            <div className="role-grid">
              <button className="role-card admin" onClick={() => goTo('/admin/login')}>
                <div className="role-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 22c0-3.866 3.582-7 8-7h4c4.418 0 8 3.134 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="role-info">
                  <h2>Admin</h2>
                  <p>Manage classes, teachers and students</p>
                </div>
              </button>

              <button className="role-card teacher" onClick={() => goTo('/teachers/login')}>
                <div className="role-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7l-10-5L2 7l10 5 10-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M6 10v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="role-info">
                  <h2>Teacher</h2>
                  <p>View timetable, classes and resources</p>
                </div>
              </button>

              <button className="role-card student" onClick={() => goTo('/students/login')}>
                <div className="role-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="role-info">
                  <h2>Student</h2>
                  <p>Access learning materials and classes</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="login-footer">© {new Date().getFullYear()} Equo</footer>
    </div>
  );
}
