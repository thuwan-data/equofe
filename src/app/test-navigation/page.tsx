import Link from 'next/link';

export default function TestNavigationPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Navigation Test Page</h1>
      <p>Test all the admin routes:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <Link 
          href="/pages/admin" 
          style={{ 
            padding: '1rem', 
            background: '#26a69a', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            textAlign: 'center'
          }}
        >
          🔐 Admin Login Page
        </Link>
        
        <Link 
          href="/pages/admin/forgot-password" 
          style={{ 
            padding: '1rem', 
            background: '#42a5f5', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            textAlign: 'center'
          }}
        >
          🔑 Forgot Password Page
        </Link>
        
        <Link 
          href="/pages/admin/dashboard" 
          style={{ 
            padding: '1rem', 
            background: '#66bb6a', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            textAlign: 'center'
          }}
        >
          📊 Admin Dashboard
        </Link>
        
        <Link 
          href="/" 
          style={{ 
            padding: '1rem', 
            background: '#ffa726', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            textAlign: 'center'
          }}
        >
          🏠 Home Page (redirects to admin)
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
