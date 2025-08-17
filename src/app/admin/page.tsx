'use client';

import AdminHeader from '../../components/AdminHeader';
import AdminFooter from '../../components/AdminFooter';
import AdminLoginForm from '../../components/AdminLoginForm';
import BackgroundIllustrations from '../../components/BackgroundIllustrations';

export default function AdminLoginPage() {
  const handleLogin = (email: string, password: string) => {
    // TODO: Connect to external Express.js authentication
    console.log('Admin login attempt:', { email, password });
    // On successful login, redirect to dashboard
    // window.location.href = '/pages/admin/dashboard';
  };

  return (
    <div className="login-container">
      <AdminHeader />

      <main className="login-main">
        <AdminLoginForm onSubmit={handleLogin} />
      </main>

      <AdminFooter />
    </div>
  );
}
