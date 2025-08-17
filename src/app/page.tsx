'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to teachers page to show new responsive design
    router.push('/pages/admin/teachers');
  }, [router]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1>Welcome to Equo</h1>
        <p>Loading responsive teachers page...</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
