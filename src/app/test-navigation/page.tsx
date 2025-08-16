import Link from 'next/link';

export default function TestNavigationPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ color: '#288474' }}>✅ All Merge Conflicts Fixed!</h1>
      <p>All admin routes are now working correctly:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <Link
          href="/pages/admin/dashboard"
          style={{
            padding: '1rem',
            background: '#288474',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600'
          }}
        >
          📊 Updated Admin Dashboard (Figma Design)
        </Link>

        <Link
          href="/pages/admin"
          style={{
            padding: '1rem',
            background: '#288474',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          🔐 Admin Login Page (Centered)
        </Link>

        <Link
          href="/pages/admin/forgot-password"
          style={{
            padding: '1rem',
            background: '#288474',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          🔑 Forgot Password Page (Centered)
        </Link>

        <Link
          href="/"
          style={{
            padding: '1rem',
            background: '#A2EBC1',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '12px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          🏠 Home Page (redirects to dashboard)
        </Link>
      </div>
      
      <div style={{ marginTop: '3rem' }}>
        <h2>Components Created:</h2>
        <ul>
          <li>✅ AdminHeader</li>
          <li>✅ AdminFooter</li>
          <li>✅ AdminLoginForm</li>
          <li>✅ AdminSidebar</li>
          <li>✅ AdminDashboardHeader</li>
          <li>✅ AdminStatsCards</li>
          <li>✅ AdminClassSchedule</li>
          <li>✅ AdminCalendar</li>
          <li>✅ AdminStudentsChart</li>
          <li>✅ BackgroundIllustrations</li>
        </ul>
        
        <h2>SVG Assets Created:</h2>
        <ul>
          <li>✅ /public/logo-equo.svg</li>
          <li>✅ /public/illustrations/bookshelf.svg</li>
          <li>✅ /public/illustrations/plant.svg</li>
          <li>✅ /public/illustrations/desk.svg</li>
          <li>✅ /public/illustrations/background-dots.svg</li>
        </ul>
      </div>
    </div>
  );
}
