'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to admin login page
    router.push('/pages/admin');
  }, [router]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1>Welcome to Equo</h1>
        <p>Redirecting to admin login...</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
